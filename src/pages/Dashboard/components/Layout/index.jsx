import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Sidebar'
import { useLayoutViewModel } from './useLayoutViewModel'

export const Layout = () => {
  useLayoutViewModel()

  return (
    <>
      <Sidebar />
      <main className="ml-60 py-8">
        <Outlet />
      </main>
    </>
  )
}
