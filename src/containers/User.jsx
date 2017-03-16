import React, { Component, PropTypes } from 'react'
import { getUser } from '../../apis/user'
import UserInfo from '../components/UserInfo'

class User extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount () {
    const { uname } = this.props.params
    getUser(uname).then((user) => {
      console.log(user)
      this.setState({user})
    })
  }

  render () {
    const { user } = this.state

    return (
      <div><UserInfo userDetails={user} /></div>
    )
  }
}

User.propTypes = {
  params: PropTypes.object.isRequired
}

export default User
