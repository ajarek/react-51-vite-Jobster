import { FetchMethod } from './FetchMethod'
const SIGN_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
  import.meta.env.VITE_KEY_ID
}`

export const SignIn = (email, password) => {
  return FetchMethod('POST', SIGN_IN_URL, {
    email,
    password,
    returnSecureToken: true,
  })
}
export default SignIn
