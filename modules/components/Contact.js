import React from 'react'
import Title from 'react-title-component'

export default React.createClass({
  render() {
    return (
      <div>
        <Title render={prev => `${prev} | Contact`}/>
        <h2>Contact</h2>
      </div>
    )
  }
})
