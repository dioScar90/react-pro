const getDateTypeValue = (value) => {
  if (value instanceof Date) {
    return value
  }

  if (typeof value !== 'string') {
    return null
  }

  if (value.includes('T')) {
    return new Date(value)
  }

  const dateStr = value + 'T00:00'
  return new Date(dateStr)
}

export const formatDate = (value, options = {}) => {
  const date = getDateTypeValue(value)

  if (!date) {
    return null
  }

  return new Intl.DateTimeFormat('pt-BR', { ...options }).format(date)
}

