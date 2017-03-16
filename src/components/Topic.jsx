import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { getTab } from '../containers/common'

class Topic extends Component {
  render () {
    const { topic } = this.props
    const author = topic.author
    const tab = getTab(topic)

    return (
      <div className='item'>
        <Link to={`/user/${author.loginname}`} title={author.loginname}>
          <img src={author.avatar_url} alt='avatar' />
        </Link>
        <span className={`label-${tab && tab.name}`}>{tab && tab.text}</span>
        <Link to={`/topic/${topic.id}`}>{topic.title}</Link>
        <div>
          创建时间：{topic.create_at} &nbsp;
          最新回复：{topic.last_reply_at}&nbsp;
          回复数量：{topic.reply_count}&nbsp;
          查看：{topic.visit_count}
        </div>
      </div>
    )
  }
}

Topic.propTypes = {
  topic: PropTypes.object.isRequired
}

export default Topic
