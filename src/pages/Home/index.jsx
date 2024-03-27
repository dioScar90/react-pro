import { SearchBar } from './components/SearchBar'
import { ProductCard } from './components/ProductCard'
import { useHomeViewModel } from './useHomeViewModel'
import { Spinner } from '@/components/Spinner'
import { Pagination } from '@/components/Pagination'

export const Home = () => {
  const { onSearchHandler, onChangeSearchHandler, searchValue, searchedProducts, isLoading, page, products } = useHomeViewModel()

  return (
    <div className="min-h-screen">
      <main className="pl-12 pb-60">
        <SearchBar onSearch={onSearchHandler} onChange={onChangeSearchHandler} />
        <div className="mt18">
          <h1 className="font-medium text-4xl">Produtos</h1>

          {isLoading ? (
            <div className="flex justify-center pt-10">
              <Spinner />
            </div>
          ) : (
            <>
              {searchValue ? (
                <ul className="grid grid-cols-4 gap-4 mt-6">
                {searchedProducts.map(product => {
                  <li key={product.id}>
                    <ProductCard product={product} />
                  </li>
                })}
              </ul>
              ) : (
                <ul className="grid grid-cols-4 gap-4 mt-6">
                  {products.map((product) => {
                    <li key={product.id}>
                      <ProductCard product={product} />
                    </li>
                  })}
                </ul>
              )}
            </>
          )}
          {searchValue ? null : (
            <div className="flex justify-center mt-10">
              <Pagination
                page={page}
              />
            </div>
          )}
          
        </div>
      </main>
    </div>
  )
}