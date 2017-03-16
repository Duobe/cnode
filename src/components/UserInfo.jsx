import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { getTab } from '../containers/common'

class UserInfo extends Component {
  render () {
    const { userDetails } = this.props
    const recentReplies = userDetails.recent_replies
    const recentTopics = userDetails.topics

    console.dir(recentReplies)

    return (
      <div className='pd10'>
        <img src={userDetails.avatar_url} alt='avatar' />
        <div>{userDetails.create_at}</div>
        <div>{userDetails.githubUsername}</div>
        <div>{userDetails.loginname}</div>
        <div>{userDetails.score}分</div>
        <div>
          最近参与的话题（最近回复）
          {
           (() => {
             return Object.keys(recentReplies)
           })
          }
        </div>
      </div>
    )
  }
}

UserInfo.propTypes = {
  userDetails: PropTypes.object.isRequired
}

export default UserInfo
