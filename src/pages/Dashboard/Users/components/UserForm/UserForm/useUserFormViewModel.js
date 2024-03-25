import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaCreateUser } from './consts'
import { httpClient } from '../../../../../../services/axios'
import { useNavigate } from 'react-router'
import { useQuery } from 'react-query'
import { UsersService } from '../../../../../../services/users'
import { RolesService } from '../../../../../../services/roles'
import { useEffect } from 'react'

export const useUserFormViewModel = (userId) => {
  const navigate = useNavigate()
  const { register, reset, formState, handleSubmit } = useForm({
    resolver: yupResolver(schemaCreateUser)
  })
  const { data: userData, isLoading: isLoadingUser } = useQuery(
    ['user', userId],
    () => UsersService.findById(userId),
    {
      enabled: !!userId,
    }
  )
  const { data: rolesData, isLoading: isLoadingRoles } = useQuery(
    'roles',
    RolesService.findAll
  )

  const onSubmitHandler = async (data) => {
    if (userId) {
      try {
        const body = {
          name: data.name,
          email: data.email,
          roleId: parseInt(data.role),
        }
        await httpClient.put('/users/' + userId, body)
        navigate('/dashboard')
      } catch (err) {
        alert('Error ao tentar editar usuário')
      }
    } else {
      const body = {
        name: data.name,
        email: data.email,
        password: data.password,
        roleId: parseInt(data.role),
      }
      try {
        httpClient.post('/users', body)
        navigate('/dashboard')
      } catch (err) {
        alert('Erro ao tentar cadastrar usuário')
      }
    }
  }

  useEffect(() => {
    if (isLoadingUser && userData) {
      reset({
        name: userData.data.name,
        email: userData.data.email,
        password: '1234',
        role: userData.data.role.id.toString(),
      })
    }
  }, [isLoadingUser, userData, reset])

  return {
    formState,
    isLoading: isLoadingRoles || isLoadingUser,
    roles,
    register,
    handleSubmit,
    onSubmitHandler,
  }
}