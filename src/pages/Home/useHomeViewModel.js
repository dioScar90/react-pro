import { useState } from 'react'
import { useFetchProducts } from '@/hooks/useFetchProducts'
import { ProductsService } from '@/services/products'
import { debounce } from '@/utils/debounce/debounce'

export const useHomeViewModel = () => {
  const [searchedProducts, setSearchedProducts] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const { products, isLoading, page, totalPages, changePage } = useFetchProducts({
    perPage: 3,
  })
  
  const onSearchHandler = async (value) => {
    if (value) {
      setSearchValue(value)
      const { data } = await ProductsService.search(value)
      setSearchedProducts(data)
    }
  }

  const onChangeSearchHandler = debounce(async (value) => {
    if (!value) {
      setSearchValue('')
      return
    }
    
    setSearchValue(value)
    const { data } = await ProductsService.search(value)
    setSearchedProducts(data)
  }, 1_000)

  return { onSearchHandler, onChangeSearchHandler, searchValue, searchedProducts, isLoading, page, products, totalPages, changePage }
}
