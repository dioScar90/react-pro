import { useQuery } from 'react-query'
import { CategoriesService } from '../../../services/categories'

export const useCategoriesViewModel = () => {
  const { data, isLoading, isError } = useQuery('categories', CategoriesService.findAll, { refetchOnMount: true })
  const categories = data.data ?? []

  return { categories, isLoading, isError }
}