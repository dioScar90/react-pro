import { useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { ProductCard } from './components/ProductCard'
import { products as productsList } from './consts'

export const Home = () => {
  const [products, setProducts] = useState(productsList)

  const onSearchHandler = (value) => {
    if (!value) {
      setProducts(productsList)
      return
    }

    const filteredProducts = products.filter(product => product.name.includes(value))
    setProducts(filteredProducts)
  }

  const onChangeSearchHandler = (value) => {
    if (!value) {
      setProducts(productsList)
    }
  }

  return (
    <div className="min-h-screen">
      <main className="pl-12 pb-60">
        <SearchBar onSearch={onSearchHandler} onChange={onChangeSearchHandler} />
        <div className="mt18">
          <h1 className="font-medium text-4xl">Produtos</h1>
          <ul className="grid grid-cols-4 gap-4 mt-6">
            {products.map(product => {
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            })}
          </ul>
        </div>
      </main>
    </div>
  )
}