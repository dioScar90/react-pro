import PropTypes from 'prop-types'
import { useUserFormViewModel } from './useUserFormViewModel'
import { Spinner } from '../../../../../../components/Spinner'

export const UserForm = ({ userId, name, email }) => {
  const {
    formState,
    isLoading,
    roles,
    register,
    handleSubmit,
    onSubmitHandler,
  } = useUserFormViewModel(userId)

  if (isLoading) {
    return <Spinner />
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
          {roles.map((role) => (
            <option key={role.id} value="{role.id}">{role.name}</option>
          ))}
        </select>
        <span className="text-red-300">{formState.errors.role?.message}</span>
      </div>
      <button
        type="submit"
        className="mt-4 bg-primary w-full py-2 rounded-lg text-white"
        disabled={!formState.isDirty || formState.isSubmitting}
      >
        {userId ? 'Editar' : 'Cadastrar'}
      </button>
    </form>
  )
}

UserForm.propTypes = {
  userId: PropTypes.string,
}
