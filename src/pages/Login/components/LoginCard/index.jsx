import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaLoginCard } from './consts'
import { Link, useNavigate } from 'react-router-dom'

export const LoginCard = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schemaLoginCard)
  })
  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log('data', data)
    navigate('/dashboard')
  }

  return (
    <div className="p-6 rounded-lg bg-white shadow-md w-80">
      <h1 className="text-3xl text-center">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
