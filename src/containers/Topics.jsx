import React, { Component } from 'react'
import { Link } from 'react-router'

import { getTopics } from '../../apis/topic'
import { default as Topic } from '../components/Topic'
import { PAGE, PAGE_SIZE, DEFAULT_TAB } from '../constants/constants'
import { TABS } from '../constants/tabTypes'

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
    this.handleTabClick()
    const { page, tab, limit } = this.state
    getTopics(page, tab, limit).then((list) => {
      this.setState({list})
    })
  }

  handleTabClick (tab, index, e) {
    const { page, limit } = this.state

    getTopics(page, tab, limit).then((list) => {
      this.setState({list})
    })
  }

  getClassName (index) {
    return index === this.state.currentIndex ? 'active' : 'normal'
  }

  render () {
    const { list } = this.state
    return (
      <div className='wrap'>
        <ul className='wrap-header'>
          {
            TABS.map((item, index) => {
              return (
                index < 4 ? (<li key={index} onClick={(e) => { this.setState({currentIndex: index}); this.handleTabClick(item.name, index, e) }} className={this.getClassName(index)}>{item.text}</li>) : ''
              )
            })
          }
        </ul>
        {
          list.map((item, index) => {
            return <Topic key={index} topic={item} />
          })
        }
      </div>
    )
  }
}

Topics.defaultProps = {
  currentIndex: 0
}

export default Topics
