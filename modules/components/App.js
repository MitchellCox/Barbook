import React from 'react'
import { IndexLink } from 'react-router'
import { connect } from 'react-redux'
import { logout, loggedIn } from './actions'
import $ from 'jquery'
import { Button, Icon } from 'react-materialize'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    if (sessionStorage.token && !this.props.auth)
      this.props.dispatch(loggedIn(sessionStorage.userId, sessionStorage.token))
  }

  render() {
    return (
      <div>
        <div>
          <nav className="navbar-fixed">
            <div className="nav-wrapper blue-grey darken 1 text-color grey-lighten 4">
              <a href="/" className="brand-logo text-color grey-lighten 4">BarBook</a>
              <ul className="right hide-on-med-and-down">
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li>
                  {this.props.auth ? (
                    <a href="#"
                      onClick= { e => {
                        {
                          e.preventDefault()
                          this.props.dispatch(logout())
                          this.props.history.push('/login')
                        }
                      }}
                    >
                      Log out
                    </a>
                  ) : (<a href="/login">Sign in</a>)} 
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div>
          {this.props.children} 
        </div> 
        <div className="footer">
          <footer className="page-footer blue-grey darken 1">
            <div className="footer-copyright">
              <div className="container">
                © 2016 BarBook
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { auth: state.auth.isAuthenticated }
}

export default connect(mapStateToProps, null)(App)
