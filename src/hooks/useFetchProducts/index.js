import { useEffect, useState } from "react"
import { ProductsService } from "@/services/products"
import { useQuery } from 'react-query'
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom'

export const useFetchProducts = ({ perPage = 30 }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const { data, isLoading } = useQuery(['products', page], () => ProductsService.findAll(page, perPage))

  const changePage = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return
    }

    setPage(pageNumber)

    const pathname = location.pathname
    navigate(`${pathname}/?page=${pageNumber}`)
  }
  
  useEffect(() => {
    const value = data?.data.numberOfPages ?? 1
    setTotalPages(value)
  }, [data])

  useEffect(() => {
    const pageFromParams = +searchParams.get('page')
    if (pageFromParams > 0) {
      setPage(pageFromParams)
    }
  }, [searchParams])

  return { products: data?.data.products ?? [], isLoading, page, totalPages, changePage }
}