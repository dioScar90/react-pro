import { useEffect, useState } from "react"
import { httpClient } from "@/services/axios"

export const useDashboardViewModel = () => {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [users, setUsers] = useState([])
  const perPage = 2

  const changePage = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return
    }

    setPage(pageNumber)
  }

  const getUsers = async (pageNumber) => {
    const response = await httpClient.get(`/users?pages=${pageNumber}&perPages=${perPage}`)
    setUsers(response.data.users)
    setTotalPages(response.data.numberOfPages)
  }

  useEffect(() => {
    getUsers(page)
  }, [page])

  return { users, page, totalPages, changePage }
}