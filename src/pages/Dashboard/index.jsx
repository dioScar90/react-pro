import { Link } from "react-router-dom"
import { IoIosAdd } from 'react-icons/io'
import { useDashboardViewModel } from "./useDashboardViewModel"

export const Dashboard = () => {
  const { users, page, totalPages, changePage } = useDashboardViewModel()

  return (
    <div className="custom-container">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-medium">Usuários</h1>
        <Link to='/dashboard/users/create'>
          <IoIosAdd className="text-4xl text-primary" />
        </Link>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Função</th>
              <th>Criação</th>
              <th>Atualização</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role.name}</td>
                <td>{user.createdAt}</td>
                <td>{user.updatedAt}</td>
                <td></td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}