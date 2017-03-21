import http from './http'

/**
Topic
 */
export const getTopics = (page, tab, limit) => {
  return http.get(`/topics?page=${page}&&tab=${tab}&&limit=${limit}`).then((res) => {
    return res.data.data
  })
}

export const getTopicDetails = (tid) => {
  return http.get(`/topic/${tid}`).then((res) => {
    return res.data.data
  })
}

export const postTopic = (accesstoken, title, tab, content) => {
  return http.post(`/topics`, {
    accesstoken,
    title,
    tab,
    content
  }).then((res) => {
    return res.data.data
  })
}

/**
Topic collect
 */

export const getTopicCollect = (uname) => {
  return http.get(`/topic_collect/${uname}`).then((res) => {
    return res.data.data
  })
}
