import React from 'react'
import { IndexLink, Link } from 'react-router'
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
        </div>

        <body>
          <div class="valign-wrapper">
            {this.props.children} 
          </div> 
        </body>

        <div className="footer">
          <footer className="page-footer">
            <div className="container">
              <div className="row">
                <div className="col l6 s12">
                  <h5 className="white-text">Footer Content</h5>
                  <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                </div>
              </div>
            </div>
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
