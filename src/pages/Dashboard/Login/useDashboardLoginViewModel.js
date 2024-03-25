import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDashboardLoginViewModel } from './useDashboardLoginViewModel'
import { useAuthStore } from '../../../stores/authStore'

export const useDashboardLoginViewModel = () => {
  const user = useAuthStore(({ user }) => user)
  const navigate = useNavigate()

  useEffect(() => {
    if (user?.role?.name === 'ADMIN') {
      navigate('/dashboard')
    }
  }, [user, navigate])
}
