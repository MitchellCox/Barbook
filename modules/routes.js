import '../modules/styles.css'
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { ServerRoute } from 'react-project'
import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NoMatch from './components/NoMatch'
import Login from './components/Login'
import { signUp, signIn } from './api/auth'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { push } from 'react-router-redux'
import Search from './components/Search'

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth,
  predicate: auth => auth.isAuthenticated,
  redirectAction: push,
  wrapperDisplayName: 'UserIsAuthenticated'
})

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
      <Route path="login" component={Login}/>
      <Route path="search" component={Search}/>
    </Route>
    <ServerRoute path="/api">
      <ServerRoute path="signup" post={signUp}/>
      <ServerRoute path="signin" post={signIn}/>
    </ServerRoute>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
