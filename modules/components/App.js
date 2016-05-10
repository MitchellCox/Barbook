import React from 'react'
import { IndexLink, Link } from 'react-router'
import { logout, loggedIn } from './actions'
import { connect } from 'react-redux'

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
      <nav>
        <div>
          <Link to="/" className="brand-logo">Drinks</Link>
          <ul>
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
              ) : (<Link to="/login">Sign in</Link>)}
            </li>
            <li><IndexLink to="/">Home</IndexLink></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
            {this.props.children}
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth.isAuthenticated }
}

export default connect(mapStateToProps, null)(App)
