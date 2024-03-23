import { Link, useNavigate } from 'react-router-dom'
import { FaProductHunt, FaUser } from 'react-icons/fa'
import { BiCategoryAlt } from 'react-icons/bi'
import { useContext } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext'

export const Sidebar = () => {
  const navigate = useNavigate()
  const { logout } = useContext(AuthContext)

  const leaveHandler = () => {
    logout()
    navigate('/dashboard/login')
  }

  return (
    <aside className="fixed left-0 top-0 h-full flex flex-col justify-between bg-primary w-60 rounded-tr-lg rounded-br-lg p-8">
      <ul className="flex flex-col gap-y-4 text-white text-lg">
        <li>
          <Link to="/dashboard" className="flex items-center gap-x-3">
            <FaUser /> Usuários
          </Link>
        </li>
        <li>
          <Link to="/dashboard/products" className="flex items-center gap-x-3">
            <FaProductHunt /> Produtos
          </Link>
        </li>
        <li>
          <Link to="/dashboard/categories" className="flex items-center gap-x-3">
            <BiCategoryAlt /> Categorias
          </Link>
        </li>
      </ul>
      <button type="button" className="text-red-200 text-lg w-fit" onClick={leaveHandler}>
        Sair
      </button>
    </aside>
  )
}
