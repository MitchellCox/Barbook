import React from 'react'
import Title from 'react-title-component'

export default React.createClass({
  render() {
    return (
      <div>
        <Title render={prev => `${prev} | Sign_In`}/>
        <h2>Sign In</h2>
      </div>
    )
  }
})

