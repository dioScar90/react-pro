import { ProductForm } from '../components/ProductForm'

export const CreateProduct = () => {
  return (
    <div className="custom-container">
      <h1 className="text-3xl font-medium">Novo produto</h1>
      <div className="w-96 mt-4">
        <ProductForm />
      </div>
    </div>
  )
}
