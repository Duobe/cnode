import React, { Component } from 'react'
import { Link } from 'react-router'

import { postTopic } from '../../apis/topic'
import { TABS } from '../constants/tabTypes'

class CreateTopic extends Component {
  componentDidMount () {
    postTopic('', 'testtesttesttest', 'ask', 'test test').then((data) => {
      console.log(data)
      return data
    })
  }

  postTopic () {

  }

  render () {
    return (
      <div>
        <botton onClick={() => { this.postTopic() }}>post</botton>
      </div>
    )
  }
}

export default CreateTopic
