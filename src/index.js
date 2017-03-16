import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { AppContainer } from 'react-hot-loader'

import App from './containers/App'
import store from './store'
import Root from './routes'

import './assets/styles/base.styl'

const render = (App) => {
  ReactDOM.render(
    <AppContainer>
      <Root store={store} history={browserHistory} />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./containers/App', () => render(App))
}
