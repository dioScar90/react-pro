import { debounce } from '../../helperFunctions/debounce/debounce'
import { CartsService } from '../../services/carts'
import { useAuthStore } from '../../stores/authStore'
import { useCartStore } from '../../stores/cartStore'
import { useQuery } from 'react-query'
import { calculateTotalPrice } from '../../helperFunctions/dataManipulation/calculateTotalPrice'
import { calculateTotal } from '../../helperFunctions/dataManipulation/calculateTotal'
import { useEffect } from 'react'

const makeRequestUpdateItem = debounce(CartsService.updateItem, 1000)

export const useCart = () => {
  const { items, total, setItems, setTotal } = useCartStore()
  const user = useAuthStore((state) => state.user)
  const { data, isLoading, isError } = useQuery('cart', CartsService.find, {
    enabled: !!user,
  })
  
  const addItem = (product) => {
    const item = items.find((item) => item.id === product.id)

    if (item) {
      changeQuantity(product.id, item.qty + 1)
    } else {
      const data = [...items, { ...product, qty: 1, subTotal: product.price }]
      const total = calculateTotal(data, 'subTotal')
      setItems(data)
      setTotal(total)
      if (user) {
        CartsService.addItem(product.id, 1)
      }
    }
  }

  const changeQuantity = (id, qty) => {
    if (qty < 1) {
      return
    }

    const newItems = items.map((item) => {
      if (item.id === id) {
        item.qty = qty
        item.subTotal = calculateTotalPrice(qty, item.price)
        return item
      }
      return item
    })

    setItems(newItems)
    setTotal(calculateTotal(newItems))
    if (user) {
      makeRequestUpdateItem(id, qty)
    }
  }

  const removeItem = (productId) => {
    const newItems = items.filter((item) => item.id !== productId)
    const total = calculateTotal(newItems, 'subTotal')
    setItems(newItems)
    setTotal(total)
    if (user) {
      CartsService.deleteItem(productId)
    }
  }

  useEffect(() => {
    if (user && !isLoading && !isError && data) {
      setItems(
        data.data.items.map((item) => ({
          id: item.productId,
          itemSrc: item.product.imgSrc,
          name: item.product.name,
          price: item.product.price,
          qty: item.quantity,
          subTotal: item.subTotal,
        }))
      )
      setTotal(data.data.total)
    }
  }, [isLoading, isError, data, user, setItems, setTotal])

  return { items, total, changeQuantity, addItem, removeItem }
}

