import { CartContext } from "../../contexts/CartContext"

export const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider>
      {children}
    </CartContext.Provider>
  )
}