import DashboardLoginImage from '@/assets/dashboardLoginImage.svg'
import { RegisterCard } from './components/RegisterCard'

export const Register = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 pr-2">
        <img src={DashboardLoginImage} />
      </div>
      <div className="flex justify-center items-center flex-1">
        <RegisterCard />
      </div>
    </div>
  )
}
