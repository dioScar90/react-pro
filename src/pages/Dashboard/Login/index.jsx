import DashboardLoginImage from '../../../assets/dashboardLoginImage.svg'
import { LoginCard } from './components/LoginCard'

export const DashboardLogin = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 pr-3">
        <img src={DashboardLoginImage} alt="Mulher no mercado fazendo compra" />
      </div>
      <div className="flex justify-center items-center flex-1 border-1 bg-gray-100">
        <LoginCard />
      </div>
    </div>
  )
}