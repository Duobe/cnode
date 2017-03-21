import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import { getTab } from '../containers/common'
import Reply from './Reply'
const moment = require('moment')

class TopicDetail extends Component {
  render () {
    const { details } = this.props
    const author = details.author
    const tab = getTab(details)
    return (
      <div className='pd20'>
        <header>
          <h1>{details.title}</h1>
          <div className='info'>
            <span className={`label-${tab && tab.name}`}>{tab && tab.text}</span>
            <Link className='ml10 mr10' to={`/user/${author && author.loginname}`}>{author && author.loginname}</Link>
            <span className='mr10'>发表于：{moment(details.create_at).format('YYYY-MM-DD HH:MM')}</span>
            <span className='mr10'>阅读：{details.visit_count}</span>
            <span className='mr10'>回复：{details.reply_count}</span>
            {/* <span className='fr label-ask'>{!details.is_collect ? '收藏' : '取消收藏'}</span> */}
          </div>
        </header>
        <article className='mt20 bgw article-content' dangerouslySetInnerHTML={{__html: details.content}} />
        <div className='reply-count'>回复数：共{details.reply_count}条</div>
        {
          details.replies && (() => {
            return <Reply replies={details.replies} />
          })()
        }
      </div>
    )
  }
}

TopicDetail.propTypes = {
  details: PropTypes.object.isRequired
}

export default TopicDetail
