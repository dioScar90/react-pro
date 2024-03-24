import { useCartStore } from "../../../../stores/cartStore"

export const useProductCartViewModel = (procut) => {
  const cartStore = useCartStore()

  const addToCart = () => {
    cartStore.addItem({
      ...product,
      productId: product.id,
    })
  }

  return { addToCart }
}