import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Redirect, IndexRoute } from 'react-router'

import store from './store'
import App from './containers/App'
import Topics from './containers/Topics'
import CreateTopic from './containers/CreateTopic'
import TopicDetails from './containers/TopicDetails'
import User from './containers/User'

const routes = (
  <Route path='/cnode' component={App}>
    <IndexRoute component={Topics} />
    <Route path='/cnode/createTopic' component={CreateTopic} />
    <Route path='/cnode/topic/:tid' component={TopicDetails} />
    <Route path='/cnode/user/:uname' component={User} />
    <Redirect from='*' to='/cnode' />
  </Route>
)

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
