import * as yup from 'yup'

export const schemaRegisterCard = yup.object().shape({
  email: yup
    .string()
    .email('Não é um email válido')
    .required('Email é obrigatório'),
  name: yup
    .string()
    .required('Nome é obrigatório')
    .min(3, 'Mínimo de 3 dígitos'),
  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(4, 'Mínimo de 4 dígitos'),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Campos diferentes')
})
