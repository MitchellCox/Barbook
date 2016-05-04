import '../modules/styles.css'
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { ServerRoute } from 'react-project'
import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NoMatch from './components/NoMatch'
import Sign_In from './components/Sign_In'
import Sign_Up from './components/Sign_Up'

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
    </ServerRoute>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
