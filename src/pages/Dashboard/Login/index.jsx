import DashboardLoginImage from '../../../assets/dashboardLoginImage.svg'
import { LoginCard } from './components/LoginCard'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'

export const DashboardLogin = () => {
  const { user, isLoading } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoading) {
      return
    }
    
    if (user?.role?.name === 'ADMIN') {
      navigate('/dashboard')
    }
  }, [user, navigate, isLoading])
  
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