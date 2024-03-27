import { Link } from 'react-router-dom'
import { useRegisterCardViewModel } from "./useRegisterCardViewModel"

export const RegisterCard = () => {
  const { register, handleSubmit, formState, onSubmitHandler } = useRegisterCardViewModel()

  return (
    <div className="p-6 rounded-lg bg-white shadow-md w-80">
    <h1 className="text-3xl text-center">Registre-se</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
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
          <label htmlFor="">Nome</label>
          <input
            type="text"
            className="border outline-none px-3 py-1 rounded-lg w-full"
            placeholder="Nome"
            {...register('name')}
          />
          <span className="text-red-300">{formState.errors.name?.message}</span>
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
        <div className="flex flex-col gap-y-1">
          <label htmlFor="password">Confirmar senha</label>
          <input
            type="password"
            className="border outline-none px-3 py-1 rounded-lg w-full"
            placeholder="Confirmar senha"
            {...register('confirmPassword')}
          />
          <span className="text-red-300">{formState.errors.confirmPassword?.message}</span>
        </div>
        <button type="submit" className="mt-7 bg-primary w-full py-2 rounded-lg text-white">
          Cadastrar
        </button>
        <Link to="/login" className="text-center text-primary">
          Já tenho conta
        </Link>
      </form>
    </div>
  )
}
