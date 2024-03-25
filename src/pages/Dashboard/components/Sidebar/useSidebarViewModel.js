import { useNavigate } from 'react-router-dom'
import { removeStorage } from '../../../../helperFunctions/storage/revemoStorage'
import { useAuthStore } from '../../../../stores/authStore'

export const useSidebarViewModel = () => {
  const navigate = useNavigate()
  const setUser = useAuthStore(({ setUser }) => setUser)

  const leaveHandler = () => {
    setUser(null)
    removeStorage('token', 'user')
    navigate('/dashboard/login')
  }

  return { leaveHandler }
}