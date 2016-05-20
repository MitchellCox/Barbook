import React from 'react'
import { IndexLink, Link } from 'react-router'
import { connect } from 'react-redux'
import { logout, loggedIn } from './actions'

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
          <nav>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">Drinks</a>
              <ul className="right">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
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
              </ul>
            </div>
          </nav>
          <div>
            {this.props.children}
          </div>
        </div>
        <nav>
          <div className="nav-wrapper">
            <form>
              <div className="input-field">
                <input id="search" type="search" required />
                <label for="search"><i class="material-icons" placeholder="What ingredients do you have?"></i></label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
        {this.props.children}
      <nav>
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" type="search" required />
              <label for="search"><i class="material-icons">list ingredients</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { auth: state.auth.isAuthenticated }
}

export default connect(mapStateToProps, null)(App)
