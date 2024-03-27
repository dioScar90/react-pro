export const calculateTotal = (data, key = null) => {
  return data.reduce((acc, curr) => {
    const toAdd = key ? curr[key] : curr
    return acc + toAdd
  }, 0)
}