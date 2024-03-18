import { CategoryForm } from '../components/CategoryForm'

export const CreateCategory = () => {
  return (
    <div className="custom-container">
      <h1 className="text-3xl font-medium">Nova categoria</h1>
      <div className="w-96 mt-4">
        <CategoryForm />
      </div>
    </div>
  )
}
