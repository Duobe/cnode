import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import * as types from '../constants/constants'

/*
** 1、请求（REQ_DATA）过程中可以设置显示请求的view加载动画
2、获取数据
3、错误异常
**
*/

function exampleReducer (state = {data: []}, action = null) {
  switch (action.type) {
    case types.RECV_ERROR:
      return Object.assign({}, state, { data: action.data })
    case types.RECV_DATA:
      return Object.assign({}, state, { data: action.data })
    case types.REQ_DATA:
      return Object.assign({}, state, { error: false })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  routing,
  example: exampleReducer
})

export default rootReducer
