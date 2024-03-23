import * as yup from 'yup'

export const schemaLoginCard = yup.object().shape({
  email: yup
    .string()
    .email('Não é um email válido')
    .required('Email é obrigatório'),
  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(4, 'Mínimo de 4 dígitos'),
})
