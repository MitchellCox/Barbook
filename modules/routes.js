import '../modules/styles.css'
import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import { ServerRoute } from 'react-project'
import hello from './api/hello'
import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NoMatch from './components/NoMatch'

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
      <Route path="sign-in" component={Sign_In}/>
      <Route path="sign-up" component={Sign_Up}/> 
    </Route>
    <ServerRoute path="/api">
      <ServerRoute path=":hello" get={hello}/>
    </ServerRoute>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
