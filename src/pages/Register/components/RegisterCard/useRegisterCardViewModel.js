import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaRegisterCard } from './consts'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AuthService } from '../../../../services/auth'
import { setStorage } from '../../../../helperFunctions/storage/setStorage'
import { useAuthStore } from '../../../../stores/authStore'
import { UsersService } from '../../../../services/users'
// import { useAuthStorage } from '../../../../stores/authStore'

export const useRegisterCardViewModel = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schemaRegisterCard)
  })
  const setUser = useAuthStore(({ setUser }) => setUser)

  const onSubmitHandler = async (data) => {
    try {
      await AuthService.register(data)
      const response = await AuthService.login(data)
      setStorage('token', response.data.token)
      const res = await UsersService.getMe()
      setUser(res.data)
      navigate('/dashboard')
    } catch (err) {
      setError('Email já cadastrado')
    }
  }

  return { register, handleSubmit, formState, onSubmitHandler }
}