import { FetchMethod } from './FetchMethod'

export const MakeAuthorizedRequest = (method, url) => {
  const token = localStorage.getItem('ID_TOKEN_KEY')
  const containsQuestionMark = url.indexOf('?') !== -1
  const urlWithToken = `${url}${containsQuestionMark ? '&' : '?'}auth=${token}`
  return FetchMethod(method, urlWithToken)
}
export default MakeAuthorizedRequest
