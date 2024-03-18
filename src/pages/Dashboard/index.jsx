import { useState } from "react"

export const Dashboard = () => {
  const [page, setPage] = useState(1)

  const users = [
    {
      id: 1,
      name: 'João',
      email: 'XXXXXXXXXXXXXXX',
      createdAt: '2023-01-01',
      updatedAt: '2023-01-01',
    },
    {
      id: 2,
      name: 'João',
      email: 'XXXXXXXXXXXXXXX',
      createdAt: '2023-01-01',
      updatedAt: '2023-01-01',
    },
    {
      id: 3,
      name: 'João',
      email: 'XXXXXXXXXXXXXXX',
      createdAt: '2023-01-01',
      updatedAt: '2023-01-01',
    },
    {
      id: 4,
      name: 'João',
      email: 'XXXXXXXXXXXXXXX',
      createdAt: '2023-01-01',
      updatedAt: '2023-01-01',
    },
  ]

  const perPage = 2
  const totalPages = Math.ceil(users.length / perPage)

  const handleShowMore = () => {
    setPage(prev => prev + 1)
  }

  return (
    <div className="custom-container">
      <h1 className="text-3xl font-medium py-8">Usuários</h1>
      <div className="overflow-x-auto mt-4">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Criação</th>
              <th>Atualização</th>
            </tr>
          </thead>
          <tbody>
            {users.slice(0, page * perPage).map(user =>
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.updatedAt}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {page < totalPages &&
        <div className="flex justify-center">
          <button type="button" className="mt-4 text-primary" onClick={handleShowMore}>
            Mostrar mais
          </button>
        </div>
      }
    </div>
  )
}