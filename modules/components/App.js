import React from 'react'
import { connect } from 'react-redux'
import { logout, loggedIn } from './actions'
import { Button, Icon } from 'react-materialize'
import Materialize from 'materialize'
import Title from 'react-title-component'
import { Link } from 'react-router'
import $ from 'jquery'
import { footer, body, main, topmarg } from '../styles.css'


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    if (sessionStorage.token && !this.props.auth)
      this.props.dispatch(loggedIn(sessionStorage.userId, sessionStorage.token))
  }

  componentDidMount() {
    window.$('.button-collapse').sideNav()
  }

  render() {
    return (
      <div>
        <div>
           <nav>
            <div className="nav-wrapper blue-grey darken 1 text-color grey-lighten 4">
              <a href="#!" className="brand-logo text-color grey-lighten 4 center">BarBook</a>
              <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li>
                          {this.props.auth ? (
                            <a href="/login"
                              onClick= { e => {
                                {
                                  e.preventDefault()
                                  this.props.dispatch(logout())
                                  this.props.history.push('/login')
                                }
                              }}
                            >
                              Sign Out
                            </a>
                          ) : (<a href="/login">Sign In</a>)} 
                </li>
              </ul>
              <ul className="side-nav blue-grey darken 1 text-color grey-lighten 4" id="mobile-demo">
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li>
                          {this.props.auth ? (
                            <a href="/login"
                              onClick= { e => {
                                {
                                  e.preventDefault()
                                  this.props.dispatch(logout())
                                  this.props.history.push('/login')
                                }
                              }}
                            >
                              Sign Out
                            </a>
                          ) : (<a href="/login">Sign In</a>)} 
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div>
          {this.props.children} 
        </div> 
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { auth: state.auth.isAuthenticated }
}

export default connect(mapStateToProps, null)(App)
