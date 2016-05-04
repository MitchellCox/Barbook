import React from 'react'
import Title from 'react-title-component'

export default React.createClass({
  render() {
    return (
      <div>
        <Title render={prev => `${prev} | About`}/>
        <h2>About</h2>
      </div>
    )
  }
})
