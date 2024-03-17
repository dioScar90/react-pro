import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from "./consts"

export const LoginCard = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log('data', data)
  }

  return (
    <div className="p-6 rounded-lg bg-white shadow-md w-80">
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
        <button type='submit' className='mt-7 bg-blue-400 w-full py-2 rounded-lg text-white'>
          Entrar
        </button>
      </form>
    </div>
  )
}
