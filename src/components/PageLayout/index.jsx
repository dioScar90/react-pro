import { Outlet } from 'react-router-dom'
import { Header } from '../Header'

export const PageLayout = () => {
  return (
    <div className="custom-container">
      <Header />
      <Outlet />
    </div>
  )
}