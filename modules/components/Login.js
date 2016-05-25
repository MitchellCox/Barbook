import React from 'react'
import Title from 'react-title-component'
import { login, signUp } from './actions'
import { connect } from 'react-redux'

class Login extends React.Component {
	constructor(props) {
  super(props)
  this.signUp = this.signUp.bind(this)
  this.signIn = this.signIn.bind(this)
  const redirectLocation = '/drink'
  this.state = { error: false, redirectRoute: redirectLocation }
}

	signUp(event) {
  event.preventDefault()

  const email = this.refs.newEmail.value
  const pass = this.refs.newPass.value
  this.props.dispatch(signUp(email, pass, this.props.redirectRoute, this.props.history))
	}

	signIn(event) {
  event.preventDefault()

  const email = this.refs.email.value
  const pass = this.refs.pass.value
  this.props.dispatch(login(email, pass, this.props.redirectRoute, this.props.history))
	}
  
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken 1"> 
              <div className="card-content white-text"> 
                <span className="card-title">Sign Up</span>
                  <div className="row">
                    <form onSubmit={this.signUp}>
                      <div className="row">
                        <div className="input-field col-s12"> 
                          <input id="email" type="email" className="validate" ref="newEmail"/>
                          <label for="email" placeholder="Email">Email</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col-s12"> 
                          <input id="password" type="password" className="validate" ref="newPass"/>
                          <label for="password" placeholder="Password">Password</label>
                        </div>
                      </div>
                      <div>
                        <div className="input-field col s12">
                          <input className="btn" type="submit" />
                        </div> 
                      </div>        
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className="row">
            <div className="col s12 m6">
              <div className="card blue-grey darken 1"> 
                <div className="card-content white-text"> 
                  <span className="card-title">Sign In</span>
                    <form onSubmit={this.signIn}>
                      <div className="row">
                        <div className="input-field col-s12"> 
                          <input id="email" type="email" className="validate" ref="email"/>
                          <label for="email" placeholder="Email">Email</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col-s12"> 
                          <input id="password" type="password" className="validate" ref="pass"/>
                          <label for="password" placeholder="Password">Password</label>
                        </div>
                      </div>
                      <div>
                        <div className="input-field col s12">
                          <input className="btn" type="submit"/>
                        </div> 
                      </div>        
                    </form>
                  </div> 
                </div>
              </div>
            </div>
          {this.state.error && (
            <p>Bad login information</p>
          )}
      </div>  
   )
  }
}

export default connect()(Login)

