export const revemoStorage = (...keys) => {
  keys.forEach(key => localStorage.removeItem(key))
}
