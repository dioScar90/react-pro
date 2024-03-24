import { IoCartOutline } from 'react-icons/io5'
import PropTypes from 'prop-types'
import { formatCurrency } from '../../../../helperFunctions/dataManipulation/formatCurrency'

export const ProductCard = ({ product }) => {
  const { addToCart } = useProductCartViewModel(product)
  
  return (
    <div className="rounded-lg border">
      <div className="h-48">
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={`http://localhost:3000/${product.imgSrc}`}
          alt="Nome do produto"
        />
      </div>
      <div className="px-4 pt-6 pb-4">
        <h2 className="text-lg font-medium text-gray-800">
          {product.name}
        </h2>
        <span className="text-gray-400">
          Restam {product.stock} un. no estoque
        </span>
        <button
          type="button"
          className="bg-primary flex justify-center items-center gap-x-2 text-white rounded-2xl"
          onClick={addToCart}
        >
          <IoCartOutline className="text-3xl text-white" />
          <span className="text-lg font-medium">
            {formatCurrency(product.price)}
          </span>
        </button>
      </div>
    </div>
  )
}