import { useState } from "react"
import { useCartStore } from "../../stores/cartStore"

export const useCartViewModel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [productId, setProductId] = useState(null)
  const { removeItem, items, total, changeQuantity } = useCartStore()
  
  const onCloseModal = () => {
    setIsModalOpen(false)
    setProductId(null)
  }

  const onConfirmModal = () => {
    if (productId) {
      removeItem(productId)
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
    items,
    total,
    modalProps,
    changeQuantity,
    setIsModalOpen,
    setProductId,
  }
}