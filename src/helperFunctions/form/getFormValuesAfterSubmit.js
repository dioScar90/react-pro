export const getFormValuesAfterSubmit = (form, alsoFileType = false) => {
  if (!form || !(form instanceof HTMLFormElement)) {
    return null
  }

  const formData = new FormData(form)
  return Object.fromEntries(
    [...formData]
    .filter(([_, value]) => alsoFileType || typeof value === 'string')
  )
}