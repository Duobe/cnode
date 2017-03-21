import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'

class App extends Component {
  render () {
    const { children } = this.props
    return (
      <div>
        {children}
        <div className='put'></div>
        {/*<div className='footer'>
          <Link to=''>消息</Link>
          <Link to=''>话题</Link>
          <Link to=''>我的</Link>
          <Link to=''>我的</Link>
        </div>*/}
      </div>
    )
  }
}

App.defaultProps = {

}

App.propTypes = {
  children: PropTypes.element.isRequired
}

export default App
