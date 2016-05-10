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
       <h2>Sign Up</h2>
       <form onSubmit={this.signUp}>
         <input ref="newEmail" placeholder="email" />
         <input ref="newPass" placeholder="password"/>
         <br />
         <button type="submit">sign up</button>
      </form>
      <h2>Sign In</h2>
      <form onSubmit={this.signIn}>
        <label><input ref="email" placeholder="email" /></label>
        <label><input ref="pass" placeholder="password" /></label>
        <br />
        <button type="submit">login</button>
         {this.state.error && (
           <p>Bad login information</p>
         )}
      </form>
    </div>
   )
  }
}

export default connect()(Login)

