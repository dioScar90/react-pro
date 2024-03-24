import { Link } from 'react-router-dom'
import { IoIosAdd } from 'react-icons/io'
import { useState } from 'react'
import { useCategoriesViewModel } from './useCategoriesViewModel'

export const Categories = () => {
  const { categories, isLoading } = useCategoriesViewModel()
  
  const perPage = 2
  const totalPages = Math.ceil(categories.length / perPage)

  const handleShowMore = () => {
    setPage((prev) => prev + 1)
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-medium py-8">Categorias</h1>
        <Link to="/dashboard/categories/create">
          <IoIosAdd className="text-4xl text-primary" />
        </Link>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Quantidade de produtos</th>
              <th>Criação</th>
              <th>Atualização</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {categories.slice(0, page * perPage).map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.qtyProducts}</td>
                <td>{category.createdAt}</td>
                <td>{category.updatedAt}</td>
                <td>
                  <Link to={`/dashboard/categories/edit/${category.id}`} className="text-blue-400">
                    Editar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {page < totalPages && (
          <div className="flex justify-center">
            <button type="button" className="mt-4 text-primary" onClick={handleShowMore}>
              Mostrar mais
            </button>
          </div>
        )}
      </div>
    </>
  )
}
