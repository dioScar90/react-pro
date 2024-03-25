import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaLoginCard } from './consts'
import { useNavigate } from 'react-router-dom'
import { AuthService } from '../../../../services/auth'
import { UsersService } from '../../../../services/users'
import { useAuthStore } from '../../../../stores/authStore'

export const useLoginCardViewModel = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schemaLoginCard)
  })
  const setUser = useAuthStore(({ setUser }) => setUser)
  
  const onSubmitHandler = async (data) => {
    try {
      const { data: respData } = await AuthService.login(data)
      const token = respData.token
      
      setStorage('token', token)

      const res = await UsersService.getMe()
      const userName = res.data
      setUser(userName)
      // await login(data)
      navigate('/')
    } catch (err) {
      if (err.response.status === 401) {
        setErrorAuth('Credenciais erradas.')
      }
      console.log('err', err)
    }
  }

  return { onSubmitHandler, handleSubmit, register, formState }
}