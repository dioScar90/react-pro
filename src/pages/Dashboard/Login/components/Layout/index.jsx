import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Sidebar'

export const Layout = () => {
  return (
    <>
      <Sidebar />
      <main className="ml-60">
        <Outlet />
      </main>
    </>
  )
}
