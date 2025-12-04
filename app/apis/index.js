export const resolveApi = (name) => {
  const n = String(name || '').replace(/^\//, '')
  return `client/${n}`
}

export const API_MAP = {
}
