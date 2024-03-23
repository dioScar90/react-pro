import { Outlet, useNavigate } from 'react-router-dom'
import { Sidebar } from '../Sidebar'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext'

export const Layout = () => {
  const { user, isLoading } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoading) {
      return
    }

    if (user?.role?.name !== 'ADMIN') {
      navigate('/')
    }
  }, [user, navigate, isLoading])

  return (
    <>
      <Sidebar />
      <main className="ml-60 py-8">
        <Outlet />
      </main>
    </>
  )
}
