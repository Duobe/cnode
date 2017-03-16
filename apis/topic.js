import http from './http'

export const getTopics = (page, tab, limit) => {
  return http.get(`/topics?page=${page}&&tab=${tab}&&limit=${limit}`).then((res) => {
    console.dir(res.data.data)
    return res.data.data
  })
}

export const getTopicDetails = (tid) => {
  return http.get(`/topic/${tid}`).then((res) => {
    return res.data.data
  })
}
