import * as yup from 'yup'

export const schemaCreateProduct = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Nome precisa ter pelo menos 3 caracteres')
    .required('Nome é obrigatório')

  // id: 1,
  // image: 'https://scx1.b-cdn.net/csz/news/800a/2019/1-whilehuaweii.jpg',
  // name: 'Celulares',
  // price: 3,
  // stock: 3,
  // category: 'Celulares',
  // createdAt: '2023-01-01',
  // updatedAt: '2023-01-01'
})
