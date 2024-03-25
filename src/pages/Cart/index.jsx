import { FaMinus, FaTrash } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'
import { formatCurrency } from '../../helperFunctions/dataManipulation/formatCurrency'
import { useCartViewModel } from './useCartViewModel'

export const Cart = () => {
  const {
    items,
    total,
    modalProps,
    changeQuantity,
    setIsModalOpen,
    setProductId,
  } = useCartViewModel()
  
  return (
    <main className="min-h-screen pt-10">
      <span className="text-2xl font-medium-mb-6 block text-right">
        Total: {formatCurrency(total)}
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
                  {formatCurrency(item.price)}
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
                  {formatCurrency(item.subTotal)}
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