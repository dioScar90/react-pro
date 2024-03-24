import { useState } from 'react'
import { products as productsList } from './consts'
import { useFetchProducts } from '../../hooks/useFetchProducts'
import { ProductsService } from '../../services/products'

export const useHomeViewModel = () => {
  const [searchedProducts, setSearchedProducts] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const { products, page, totalPages, changePage } = useFetchProducts({
    perPage: 3,
  })
  
  const onSearchHandler = async (value) => {
    if (value) {
      setSearchValue(value)
      const { data } = await ProductsService.search(value)
      setSearchedProducts(data)
    }
  }

  const onChangeSearchHandler = (value) => {
    if (!value) {
      setSearchValue('')
    }
  }

  return { onSearchHandler, onChangeSearchHandler, searchValue, searchedProducts, isLoading, page, products, totalPages, changePage }
}
