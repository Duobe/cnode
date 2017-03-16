import React, { Component, PropTypes } from 'react'
class App extends Component {
  render () {
    const { children } = this.props
    return (
      <div>
        {children}
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
