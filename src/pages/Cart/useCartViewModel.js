import { useState } from "react"
import { useCartStore } from "../../stores/cartStore"

export const useCartViewModel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [productId, setProductId] = useState(null)
  const cartStore = useCartStore()
  
  const onCloseModal = () => {
    setIsModalOpen(false)
    setProductId(null)
  }

  const onConfirmModal = () => {
    if (productId) {
      cartStore.removeItem(productId)
      setIsModalOpen(false)
    }
  }

  const modalProps = {
    isOpen: isModalOpen,
    onClose: onCloseModal,
    onCancel: onCloseModal,
    onConfirm: onConfirmModal,
    title: 'Tem certeza?',
    content: 'Essa ação não pode ser desfeita',
  }
  
  return {
    items: cartStore.items,
    total: cartStore.total,
    modalProps,
    changeQuantity: cartStore.changeQuantity,
    setIsModalOpen,
    setProductId,
  }
}