import PropTypes from 'prop-types'
import { useCategoryFormViewModel } from './useCategoryFormViewModel'

export const CategoryForm = ({ categoryId }) => {
  const { register, handleSubmit, formState, onSubmitHandler } = useCategoryFormViewModel(categoryId)

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
      <button type="submit" className="mt-4 bg-primary w-full py-2 rounded-lg text-white">
        {categoryId ? 'Editar' : 'Cadastrar'}
      </button>
    </form>
  )
}

CategoryForm.propTypes = {
  categoryId: PropTypes.string
  // name: PropTypes.string,
  // email: PropTypes.string,
}
