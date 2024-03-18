import * as yup from 'yup'

export const schemaCreateCategory = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Nome precisa ter pelo menos 3 caracteres')
    .required('Nome é obrigatório'),
  qtyProducts: yup.number().required('Quantidade de Produtos é obrigatória'),
  role: yup.number()
})
