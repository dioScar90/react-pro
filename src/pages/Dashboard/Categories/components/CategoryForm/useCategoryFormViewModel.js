import { useForm } from "react-hook-form"
import { schemaCreateCategory } from "./consts"
import { yupResolver } from "@hookform/resolvers/yup"
import { CategoriesService } from "@/services/categories"
import { useNavigate } from 'react-router-dom'
import { useQueryClient, useQuery } from 'react-query'
import { useEffect } from "react"

export const useCategoryFormViewModel = (categoryId) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { data, isLoading } = useQuery(
    ['categories', categoryId],
    () => CategoriesService.findById(categoryId),
    {
      enabled: !!categoryId,
    }
  )
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schemaCreateCategory)
  })

  const onSubmitHandler = async (data) => {
    if (categoryId) {
      try {
        await CategoriesService.update(categoryId, data)
        // queryClient.refetchQueries('categories')
        queryClient.setQueriesData('categories', (current) => {
          const data = current.data.map((category) => {
            if (category.id.toString() === categoryId) {
              return { ...category, ...data }
            }
  
            return category
          })

          return { ...current, data }
        })
        navigate('/dashboard/categories')
      } catch (err) {
        const msg = err.response.data.message || 'Ocorreu um error ao editar categoria'
        alert(msg)
      }
    } else {
      try {
        const res = await CategoriesService.create(data)
        queryClient.setQueriesData('categories', (current) => {
          return { ...current, data: [...current.data, res.data] }
        })
        navigate('/dashboard/categories')
      } catch (err) {
        const msg = err.response.data.message || 'Ocorreu um error ao cadastrar categoria'
        alert(msg)
      }
    }
    
    useEffect(() => {
      if (!isLoading && data) {
        reset({ name: data.data.name })
      }
    }, [data, isLoading, reset])
  }
  return { register, handleSubmit, formState, onSubmitHandler }
}