import PropTypes from 'prop-types'
import { useProductFormViewModel } from './useProductFormViewModel'
import { DropFileZone } from './components/DropFileZone'
import { Controller } from 'react-hook-form'

export const ProductForm = ({ productId }) => {
  const {
    register,
    handleSubmit,
    formState,
    control,
    onSubmitHandler,
    file,
    insertImg,
    onPriceChangeHandler,
    onStockChangeHandler,
    categories,
  } = useProductFormViewModel(productId)

  return (
    <form
      className="flex flex-col gap-y-3"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className="flex items-center gap-x-3">
        <label htmlFor="insertImg">Inserir Imagem</label>
        <input type="checkbox" id="insertImg" className="toggle" {...register('insertImg')} />
      </div>
      {insertImg &&
        <div>
          {file &&
            <div className="flex justify-center">
              <div className="w-40 h-40 rounded-full mb-6">
                <img
                  src={
                    typeof file === 'string'
                      ? `http://localhost:3000/${file}`
                      : URL.createObjectUrl(file)
                  }
                  alt="Imagem do produto"
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </div>
          }
          <Controller
            name="file"
            control={control}
            render={({ field }) => <DropFileZone onDrop={(files) => field.onChange(files[0])} />}
          />
          {file?.name}
        </div>
      }
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
        <label htmlFor="">Preço</label>
        <input
          type="text"
          className="border outline-none px-3 py-1 rounded-lg w-full"
          placeholder="Preço"
          {...register('price')}
          onChange={onPriceChangeHandler}
        />
        <span className="text-red-300">{formState.errors.price?.message}</span>
      </div>
      <div className="flex flex-col gap-y-1">
        <label htmlFor="">Estoque</label>
        <input
          type="text"
          className="border outline-none px-3 py-1 rounded-lg w-full"
          placeholder="Estoque"
          {...register('stock')}
          onChange={onStockChangeHandler}
        />
        <span className="text-red-300">{formState.errors.stock?.message}</span>
      </div>
      <button
        type="submit"
        className="mt-7 bg-primary w-full py-2 rounded-lg text-white disabled:bg-opacity-30 disabled:cursor-not-allowed"
        disabled={!formState.isDirty || formState.isSubmitting}
      >
        {productId ? 'Editar' : 'Cadastrar'}
      </button>
    </form>
  )
}

ProductForm.propTypes = {
  productId: PropTypes.string,
}
