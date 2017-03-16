import http from './http'

export const getUser = (uname) => {
  return http.get(`/user/${uname}`).then((res) => {
    return res.data.data
  })
}
