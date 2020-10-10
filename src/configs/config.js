const URL = {
  BASE_URL: process.env.NODE_ENV === 'production'
      ? '/'
      : '/api'
}
const CITY = window.sessionStorage.getItem("city") || 'sh'
export {
  URL,
  CITY
}