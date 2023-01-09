import { FetchMethod } from './FetchMethod'
import jwt_decode from 'jwt-decode'

export const Delete = (ItemId) => {
 
  const TOKEN = localStorage.getItem('ID_TOKEN_KEY')
  const decoded = jwt_decode(TOKEN)
  const DELETE_USER_URL = `https://jobster-fd2b4-default-rtdb.europe-west1.firebasedatabase.app/:${decoded.user_id}/${ItemId}/.json?auth=${TOKEN}`
  return FetchMethod('DELETE', DELETE_USER_URL, {
  
  })
}
export default Delete
