import React from 'react'
import Title from 'react-title-component'

export default React.createClass({
  render() {
    return (
      <div>
        <Title render={prev => `${prev} | Sign Up`}/>
        <h2>Sign Up</h2>
      </div>
    )
  }
})
