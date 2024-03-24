import { useEffect, useState } from "react"
import { ProductsService } from "../../services/products"
import { useQuery } from 'react-query'

export const useFetchProducts = ({ perPage = 30 }) => {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const { data, isLoading } = useQuery(['products', page], () => ProductsService.findAll(page, perPage))

  const changePage = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return
    }

    setPage(pageNumber)
  }
  
  useEffect(() => {
    const value = data?.data.numberOfPages ?? 1
    setTotalPages(value)
  }, [data])

  return { products: data?.data.products ?? [], isLoading, page, totalPages, changePage }
}