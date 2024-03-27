import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaLoginCard } from './consts'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuthStore } from '@/stores/authStore'
import { AuthService } from '@/services/auth'
import { setStorage } from '@/utils/storage/setStorage'
import { UsersService } from '@/services/users'

export const useLoginCardViewModel = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schemaLoginCard)
  })
	const [error, setError] = useState('')
  const navigate = useNavigate()
	const setUser = useAuthStore(({ setUser }) => setUser)
	
  const onSubmitHandler = async (data) => {
    try {
			const { data: responseData } = await AuthService.login(data)
			setStorage('token', responseData.token)
			const { data: user } = await UsersService.getMe()
			setUser(user)
			
      if (role === 'ADMIN') {
        navigate('/dashboard')
      } else {
        setError('Email ou senha incorretos.')
      }
    } catch (err) {
      if (err.response.status === 401) {
        setError('Credenciais erradas.')
      }
    }
  }

	return { register, handleSubmit, formState, error, onSubmitHandler }
}