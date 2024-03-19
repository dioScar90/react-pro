import { useParams } from 'react-router-dom'
import { ProductForm } from '../components/ProductForm'

export const EditProduct = () => {
  const { id } = useParams()

  return (
    <div className="custom-container">
      <h1 className="text-3xl font-medium">Editar categoria</h1>
      <div className="w-96 mt-4">
        <ProductForm productId={id} />
      </div>
    </div>
  )
}
