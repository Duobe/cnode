import * as types from '../constants/constants'
import axios from 'axios'

function requestData () {
  return {type: types.REQ_DATA}
}

function receiveData (json) {
  return {
    type: types.RECV_DATA,
    data: json
  }
}

function receiveError (json) {
  return {
    type: types.RECV_ERROR,
    data: json
  }
}

const fetchData = (url) => {
  return function (dispatch) {
    dispatch(requestData())
    return axios({
      url: url + '/topics',
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    }).then((response) => {
      dispatch(receiveData(response.data.data))
    }).catch((err) => {
      console.log(err)
      // dispatch(receiveError(response.data))
    })
  }
}

export {fetchData}
