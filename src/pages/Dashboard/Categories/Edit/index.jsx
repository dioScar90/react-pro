import { useParams } from 'react-router-dom'
import { CategoryForm } from '../components/CategoryForm'

export const EditCategory = () => {
  const { id } = useParams()

  return (
    <div className="custom-container">
      <h1 className="text-3xl font-medium">Editar categoria</h1>
      <div className="w-96 mt-4">
        <CategoryForm categoryId={id} />
      </div>
    </div>
  )
}