import { useCartStore } from "@/stores/cartStore"

export const useProductCartViewModel = (procut) => {
  const addItem = useCartStore(({ addItem }) => addItem)

  const addToCart = () => {
    addItem({
      ...product,
      productId: product.id,
    })
  }

  return { addToCart }
}