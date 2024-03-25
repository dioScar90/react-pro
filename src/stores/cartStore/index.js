import { create } from "zustand"
import { persist, createJSONStorage } from 'zustand/middleware'
import { calculateTotal } from '../../helperFunctions/calculate/calculateTotal'
import { calculateTotalPrice } from '../../helperFunctions/calculate/calculateTotalPrice'

const changeQuantity = (id, qty, items) => {
  const newItems = items.map((item) => {
    if (item.productId === id) {
      item.qty = qty
      item.subTotal = calculateTotalPrice(item.price, qty)
      return item
    }
    return item
  })

  return newItems
}

const storeCallback = (set) => ({
  total: 0,
  items: [],
  changeQuantity: (id, qty) => set((state) => {
    if (qty < 1) {
      return state
    }
    const newItems = changeQuantity(id, qty, state.items)
    const total = calculateTotal(newItems, 'subTotal')
    return { items: newItems, total }
  }),
  addItem: (product) => set((state) => {
    const item = state.items.find((item) => {
      return item.productId === product.id
    })
    if (item) {
      const newItems = changeQuantity(item.id, item.qty + 1, state.items)
      const total = calculateTotal(newItems, 'subTotal')
      return { items: newItems, total }
    } else {
      const data = [
        ...state.items,
        { ...product, qty: 1, subTotal: product.price }
      ]
      const total = calculateTotal(data, 'subTotal')
      return { items: data, total }
    }
  }),
  removeItem: (id) => set((state) => {
    const newItems = state.items.filter((item) => {
      return item.productId !== id
    })
    const total = calculateTotal(newItems, 'subTotal')
    return { items: newItems, total }
  })
})

export const useCartStore = create(
  persist(storeCallback, {
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage)
  })
)
