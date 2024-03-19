import { Link } from 'react-router-dom'
import { IoIosAdd } from 'react-icons/io'
import { useState } from 'react'

export const Products = () => {
  const [page, setPage] = useState(1)

  const products = [
    {
      id: 1,
      image: 'https://scx1.b-cdn.net/csz/news/800a/2019/1-whilehuaweii.jpg',
      name: 'Celulares',
      price: 3,
      stock: 3,
      category: 'Celulares',
      createdAt: '2023-01-01',
      updatedAt: '2023-01-01'
    },
    {
      id: 2,
      image: 'https://scx1.b-cdn.net/csz/news/800a/2019/1-whilehuaweii.jpg',
      name: 'Notebooks',
      price: 4,
      stock: 4,
      category: 'Notebooks',
      createdAt: '2023-01-01',
      updatedAt: '2023-01-01'
    },
    {
      id: 3,
      image: 'https://scx1.b-cdn.net/csz/news/800a/2019/1-whilehuaweii.jpg',
      name: 'Impressoras',
      price: 5,
      stock: 5,
      category: 'Impressoras',
      createdAt: '2023-01-01',
      updatedAt: '2023-01-01'
    },
    {
      id: 4,
      image: 'https://scx1.b-cdn.net/csz/news/800a/2019/1-whilehuaweii.jpg',
      name: 'Carros',
      price: 6,
      stock: 6,
      category: 'Carros',
      createdAt: '2023-01-01',
      updatedAt: '2023-01-01'
    }
  ]

  const perPage = 2
  const totalPages = Math.ceil(products.length / perPage)

  const handleShowMore = () => {
    setPage((prev) => prev + 1)
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-medium py-8">Categorias</h1>
        <Link to="/dashboard/products/create">
          <IoIosAdd className="text-4xl text-primary" />
        </Link>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Imagem</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Estoque</th>
              <th>Categoria</th>
              <th>Criação</th>
              <th>Atualização</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.slice(0, page * perPage).map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <img src={product.image} alt={product.name} className="w-10 h-10 rounded-full object-contain border" />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>{product.category}</td>
                <td>{product.createdAt}</td>
                <td>{product.updatedAt}</td>
                <td>
                  <Link to={`/dashboard/products/edit/${product.id}`} className="text-blue-400">
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
