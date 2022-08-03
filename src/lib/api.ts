import axios from 'axios'

console.log()
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})