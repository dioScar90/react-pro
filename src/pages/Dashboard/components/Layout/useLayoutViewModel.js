import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuthStore } from '../../../../stores/authStore'

export const useLayoutViewModel = () => {
  const user = useAuthStore(({ user }) => user)
  const navigate = useNavigate()

  useEffect(() => {
    if (user?.role?.name !== 'ADMIN') {
      navigate('/')
    }
  }, [user, navigate])

  return {}
}