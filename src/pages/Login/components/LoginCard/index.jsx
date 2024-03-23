import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaLoginCard } from './consts'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext'

export const LoginCard = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const [errorAuth, setErrorAuth] = useState(null)
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schemaLoginCard)
  })
  
  const onSubmitHandler = async (data) => {
    try {
      await login(data)
      navigate('/')
    } catch (err) {
      if (err.response.status === 401) {
        setErrorAuth('Credenciais erradas.')
      }
      console.log('err', err)
    }
  }

  return (
    <div className="p-6 rounded-lg bg-white shadow-md w-80">
      <h1 className="text-3xl text-center">Login</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        {errorAuth && (
          <span className="text-red-400 inline-block mb-3 font-medium">{errorAuth}</span>
        )}
        <div className="flex flex-col gap-y-1">
          <label htmlFor="">Email</label>
          <input
            type="text"
            className="border outline-none px-3 py-1 rounded-lg w-full"
            placeholder="Email"
            {...register('email')}
          />
          <span className="text-red-300">{formState.errors.email?.message}</span>
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            className="border outline-none px-3 py-1 rounded-lg w-full"
            placeholder="Senha"
            {...register('password')}
          />
          <span className="text-red-300">{formState.errors.password?.message}</span>
        </div>
        <button type="submit" className="mt-7 bg-primary w-full py-2 rounded-lg text-white">
          Entrar
        </button>
        <Link to="/register" className="text-center text-primary">
          Registrar
        </Link>
      </form>
    </div>
  )
}
