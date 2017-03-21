import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { getTab } from '../containers/common'

const moment = require('moment')

class Topic extends Component {
  render () {
    const { topic } = this.props
    const author = topic.author
    const tab = getTab(topic)

    return (
      <div className='item'>
        <span className={`label-${tab && tab.name} po`}>{tab && tab.text}</span>
        <div className='mb10'>
          <Link to={`/user/${author.loginname}`} title={author.loginname}>
            <img src={author.avatar_url} alt='avatar' />
          </Link>
          <Link to={`/topic/${topic.id}`} className='ml10'>{topic.title}</Link>
        </div>
        <div className=''>
          { /* 最新回复：{topic.last_reply_at}&nbsp; */}
          <span className='mr10'>回复:{topic.reply_count}</span>
          <span>浏览:{topic.visit_count}</span>
          <span className='fr'>{moment(topic.create_at).startOf('hour').fromNow()}</span>
        </div>
      </div>
    )
  }
}

Topic.propTypes = {
  topic: PropTypes.object.isRequired
}

export default Topic
