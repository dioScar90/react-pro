import * as yup from 'yup'

export const schemaCreateProduct = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Nome precisa ter pelo menos 3 caracteres')
    .required('Nome é obrigatório'),
  price: yup.string().required('Preço é obrigatório'),
  category: yup.string().required('Categoria é obrigatória'),
  description: yup.string().required('Descrição é obrigatória'),
  stock: yup.string().required('Estoque é obrigatório'),
  insertImg: yup.boolean().default(false),
  file: yup.mixed().when('insertImg', { is: true, then: (field) => field.required('Arquivo é obrigatório') }),
})
