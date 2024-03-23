import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginCard } from './components/LoginCard'
import { AuthContext } from '../../contexts/AuthContext'

export const Login = () => {
  const { user, isLoading } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoading) {
      return
    }
    
    if (user) {
      navigate('/')
    }
  }, [user, navigate, isLoading])

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-primary">
          <LoginCard />
      </div>
    </>
  )
}
