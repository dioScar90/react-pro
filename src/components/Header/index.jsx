import { useContext } from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { useCartStore } from '../../stores/cartStore'

export const Header = () => {
  const { user } = useContext(AuthContext)
  const items = useCartStore(({ items }) => items)

  return (
    <header className="py-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-2xl">
        LOGO
      </Link>
      <div className="flex items-center gap-x-3">
        <Link to="/cart" className="flex">
          <IoCartOutline className="text-3xl text-gray-700" />
          {items.length}
        </Link>
        {user ? (
          <span>
            Olá, <span className="text-primary">{user}</span>
          </span>
        ) : (
          <Link to="/login" className="text-primary text-medium">
            Login
          </Link>
        )}
      </div>
    </header>
  )
}