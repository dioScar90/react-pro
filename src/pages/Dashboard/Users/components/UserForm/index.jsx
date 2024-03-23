import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaCreateUser } from './consts'
import PropTypes from 'prop-types'
import { httpClient } from '../../../../../services/axios'

export const UserForm = ({ userId, name, email }) => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: userId
      ? {
          name: 'João',
          email: 'XXXXXXXXXXXXXXX',
          password: 'XXXXXXXXXXXXXXX',
          role: 1
        }
      : undefined,
    resolver: yupResolver(schemaCreateUser)
  })

  const onSubmitHandler = (data) => {
    console.log('data', data)

    if (userId) {
      // TODO: edit user
    } else {
      const body = {
        name,
        email,
        password,
        roleId: 0
      }
      httpClient.post('/users', body)
    }

    // TODO: integrar com API
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
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
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="border outline-none px-3 py-1 rounded-lg w-full"
          placeholder="Email"
          {...register('email')}
        />
        <span className="text-red-300">{formState.errors.email?.message}</span>
      </div>
      {!userId && (
        <div className="flex flex-col gap-y-1">
          <label htmlFor="">Senha</label>
          <input
            type="password"
            className="border outline-none px-3 py-1 rounded-lg w-full"
            placeholder="Senha"
            {...register('password')}
          />
          <span className="text-red-300">{formState.errors.password?.message}</span>
        </div>
      )}
      <div className="flex flex-col gap-y-1">
        <label htmlFor="">Cargo</label>
        <select
          type="text"
          className="border outline-none px-3 py-2 rounded-lg w-full"
          {...register('role')}
        >
          <option value hidden>
            -- Selecione --
          </option>
          <option value="1">ADMIN</option>
        </select>
        <span className="text-red-300">{formState.errors.role?.message}</span>
      </div>
      <button type="submit" className="mt-4 bg-primary w-full py-2 rounded-lg text-white">
        {userId ? 'Editar' : 'Cadastrar'}
      </button>
    </form>
  )
}

UserForm.propTypes = {
  userId: PropTypes.string
  // name: PropTypes.string,
  // email: PropTypes.string,
}
