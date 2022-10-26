export const localDB = {
  getValue (key) {
    const data = localStorage.getItem(key)
    if (!data) return false

    return JSON.parse(data)
  },

  setValue (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
