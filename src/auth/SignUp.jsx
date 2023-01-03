import { FetchMethod } from './fetchMethod'
const SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
  import.meta.env.VITE_KEY_ID
}`

export const SignUp = (email, password) => {
  return FetchMethod('POST', SIGN_UP_URL, {
    email,
    password,
    returnSecureToken: true,
  })
}
export default SignUp
