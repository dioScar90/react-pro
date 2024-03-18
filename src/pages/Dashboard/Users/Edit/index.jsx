import { useParams } from 'react-router-dom'
import { UserForm } from '../components/UserForm'

export const EditUser = () => {
  const { id } = useParams()

  return (
    <div className="custom-container">
      <h1 className="text-3xl font-medium">Editar usuário</h1>
      <div className="w-96 mt-4">
        <UserForm userId={id} />
      </div>
    </div>
  )
}
