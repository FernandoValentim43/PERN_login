import axios from 'axios'
axios.defaults.withCredentials = true

export async function onRegistration(registrationData: any) {
  return await axios.post(
    'http://localhost:4000/api/register',
    registrationData
  )
}

export async function onLogin(loginData: any) {
  return await axios.post('http://localhost:4000/api/login', loginData)
}

export async function onLogout() {
  return await axios.get('http://localhost:4000/api/logout')
}

export async function fetchProtectedInfo() {
  return await axios.get('http://localhost:4000/api/protected')
}