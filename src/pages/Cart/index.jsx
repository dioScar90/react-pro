import { useEffect, useState } from 'react'
import { FaMinus, FaTrash } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'

const items = [
  {
    productId: crypto.randomUUID(),
    imagem: '',
    name: 'iPhone',
    price: 2_000,
    qty: 2,
    subTotal: 4_000
  },
  {
    productId: crypto.randomUUID(),
    imagem: '',
    name: 'TV',
    price: 3_000,
    qty: 1,
    subTotal: 3_000
  },
]

export const Cart = () => {
  const [total, setTotal] = useState(0)

  const removeItem = (id) => {
    const newItems = items.filter(item => item.productId !== id)
    setItems(newItems)
  }

  const formatToCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      currency: 'BRL',
      style: 'currency',
    }).format(value)
  }

  const calculateTotal = (items) => {
    const t = items.reduce((acc, curr) => acc += curr.subTotal, 0)
    setTotal(t)
  }

  useEffect(() => {
    calculateTotal(items)
  }, [items, calculateTotal])

  return (
    <main className="min-h-screen pt-10">
      <span className="text-2xl font-medium-mb-6 block text-right">
        Total: {formatToCurrency(total)}
      </span>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.productId}>
                <td>
                  <img src={item.imagem} alt={item.name} className="w-20 h-20 rounded-full object-cover" />
                </td>
                <td>{item.name}</td>
                <td>
                  {formatToCurrency(item.price)}
                </td>
                <td>
                  <div className="flex items-center gap-x-2">
                    <button type="button">
                      <FaMinus className="text-lg text-blue-500" />
                    </button>
                    <input type="text" className="border p-2 w-10 text-center rounded-lg" value={item.qty} />
                  </div>
                  <button type="button">
                    <GoPlus className="text-lg text-blue-500" />
                  </button>
                </td>
                <td>
                  {formatToCurrency(item.subTotal)}
                </td>
                <td>
                  <div>
                    <button type="button">
                      <FaTrash className="text-red-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}