import React from 'react'
import { IndexLink } from 'react-router'
import { connect } from 'react-redux'
import { logout, loggedIn } from './actions'
import $ from 'jquery'

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
          <nav className="main-nav">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">BarBook</a>
              <ul className="right">
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
        
        {this.props.children} 

        <div className="footer">
          <footer className="page-footer">
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
