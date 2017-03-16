import React, { Component } from 'react'
import { getTopics } from '../../apis/topic'
import { default as Topic } from '../components/Topic'
import {PAGE, PAGE_SIZE, DEFAULT_TAB} from '../constants/constants'

class Topics extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: PAGE,
      limit: PAGE_SIZE,
      tab: DEFAULT_TAB,
      list: []
    }
  }

  componentDidMount () {
    const { page, tab, limit } = this.state
    getTopics(page, tab, limit).then((list) => {
      this.setState({list})
    })
  }

  render () {
    const { list } = this.state
    return (
      <div>
        {
          list.map((item, index) => {
            return <Topic key={index} topic={item} />
          })
        }
      </div>
    )
  }
}

export default Topics
