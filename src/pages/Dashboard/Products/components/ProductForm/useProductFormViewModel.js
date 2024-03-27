import { useForm } from "react-hook-form"
import { schemaCreateProduct } from "./consts"
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom' 
import { currencyMask } from "./currencyMask"
import { httpClient } from '@/services/axios'
import { ProductsService } from "@/services/products"
import { useQuery } from 'react-query'
import { CategoriesService } from "@/services/categories"

export const useProductFormViewModel = (productId) => {
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()
  const { register, handleSubmit, formState, setValue, reset, control, watch } = useForm({
    resolver: yupResolver(schemaCreateProduct)
  })
  const file = watch('file')
  const { data: productData, isLoading } = useQuery(
    ['product', productId],
    () => ProductsService.findById(productId),
    {
      enabled: !!productId
    }
  )
  const { data: categoriesData } = useQuery(
    'categories',
    CategoriesService.findAll
  )
  const insertImg = watch('insertImg')

  const onDropHandler = (files) => {
    setFile(files[0])
  }

  const onPriceChangeHandler = (e) => {
    const value = e.target.value
    setValue('price', currencyMask(value))
  }

  const onStockChangeHandler = (e) => {
    const value = e.target.value
    setValue('stock', value.replace(/\D/g, ''))
  }

  const uploadImage = async (file, id) => {
    if (file) {
      const formData = new FormData()
      formData.append('file', file)
      try {
        await ProductsService.upload(id, formData)
      } catch (err) {
        alert('Ocorreu um error')
      }
    }
  }

  const onSubmitHandler = async (data) => {
    const body = {
      name: data.name,
      price: data.price,
      stock: data.stock,
      description: data.description,
      categoryId: data.category,
    }

    if (productId) {
      try {
        await ProductsService.update(productId, body)
        if (typeof data.file !== 'string') {
          await uploadImage(data.file, productId)
        }
        alert('Produto editado com sucesso')
        navigate('/dashboard/products')
      } catch (err) {
        alert('Ocorreu um erro ao editar um produto')
      }
    } else {
      try {
        const response = await ProductsService.create(body)
        await uploadImage(data.file, response.data.id)
        alert(`Produto ${response.data.name} criado com sucesso`)
        navigate('/dashboard/products')
      } catch (err) {
        alert('Ocorreu um erro ao criar um produto')
      }
    }

    // TODO: integrar com API
  }

  useEffect(async () => {
    const response = await httpClient.get('/categories')
    setCategories(response.data)
  }, [])

  useEffect(async () => {
    if (!productId) {
      return
    }

    const response = await httpClient.get(`/products/${productId}`)

    const values = {
      name: response.data.name,
      description: response.data.description,
      price: response.data.price.toFixed(2),
      stock: response.data.stock,
      stock: response.data.stock,
      category: response.data.category.id.toString(),
      file: response.data.imgSrc,
    }
    
    reset(values)
  }, [reset, productId])

  return {
    register,
    handleSubmit,
    formState,
    control,
    onSubmitHandler,
    file,
    insertImg,
    onDropHandler,
    onPriceChangeHandler,
    onStockChangeHandler,
    categories: categoriesData?.data || [],
  }
}