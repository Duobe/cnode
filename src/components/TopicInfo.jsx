import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { getTab } from '../containers/common'

class TopicDetail extends Component {
  render () {
    const { details } = this.props
    const tab = getTab(details)

    return (
      <div className='pd10 article'>
        <header>
          <h1>{details.title}</h1>
          <div className='info'>
            <span className={`label-${tab && tab.name}`}>{tab && tab.text}</span>
            <span>发表时间：{details.create_at}</span>
            <span className='fr label-ask'>{!details.is_collect ? '收藏' : '取消收藏'}</span>
          </div>
        </header>
        <article className='mt20 article-content' dangerouslySetInnerHTML={{__html: details.content}} />
      </div>
    )
  }
}

TopicDetail.propTypes = {
  details: PropTypes.object.isRequired
}

export default TopicDetail
