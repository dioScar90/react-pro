import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaCreateProduct } from './consts'
import PropTypes from 'prop-types'

export const ProductForm = ({ productId }) => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: productId
      ? {
          name: 'João',
        }
      : undefined,
    resolver: yupResolver(schemaCreateProduct)
  })

  const onSubmitHandler = (data) => {
    console.log('data', data)

    if (productId) {
      // TODO: edit product
    } else {
      // TODO: create product
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
        {productId ? 'Editar' : 'Cadastrar'}
      </button>
    </form>
  )
}

ProductForm.propTypes = {
  productId: PropTypes.string
  // name: PropTypes.string,
  // email: PropTypes.string,
}
