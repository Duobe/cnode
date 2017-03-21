import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

const moment = require('moment')

class Reply extends Component {
  render () {
    const {replies} = this.props
    return (
      <div>
        <div className='replies'>
          {
            replies && replies.map((item, index) => {
              return (
                <div className='reply' key={index}>
                  <img className='avatar' src={item.author.avatar_url} alt='avatar' />
                  <Link to={`/user/${item.author.loginname}`}>{item.author.loginname}</Link>
                  <span>{moment(item.create_at).startOf('hour').fromNow()}</span>
                  <span className='fr'>up:{item.ups.length}</span>
                  <div dangerouslySetInnerHTML={{__html: item.content}} />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

Reply.propTypes = {
  replies: PropTypes.array.isRequired
}

export default Reply
