import * as yup from 'yup'

export const schemaCreateUser = yup.object().shape({
  name: yup.string().min(3, 'Nome precisa ter pelo menos 3 caracteres').required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  password: yup.string().min(4, 'Senha precisa ter pelo menos 4 caracteres').required('Senha é obrigatória'),
  role: yup.number()
})
