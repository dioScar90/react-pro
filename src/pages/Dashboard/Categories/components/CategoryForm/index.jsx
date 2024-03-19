import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaCreateCategory } from './consts'
import PropTypes from 'prop-types'

export const CategoryForm = ({ categoryId }) => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: categoryId
      ? {
          name: 'João',
          qtyProducts: 'XXXXXXXXXXXXXXX',
          role: 1
        }
      : undefined,
    resolver: yupResolver(schemaCreateCategory)
  })

  const onSubmitHandler = (data) => {
    console.log('data', data)

    if (categoryId) {
      // TODO: edit category
    } else {
      // TODO: create category
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
