import { UserForm } from '../components/UserForm/UserForm'

export const CreateUser = () => {
  return (
    <div className="custom-container">
      <h1 className="text-3xl font-medium">Novo usuário</h1>
      <div className="w-96 mt-4">
        <UserForm />
      </div>
    </div>
  )
}
