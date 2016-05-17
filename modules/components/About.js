import React from 'react'
import Title from 'react-title-component'

export default React.createClass({
  render() {
    return (
      <div>
        <Title render={prev => `${prev} | About`}/>
        <h2>BarBook is the web's leading cocktail database.</h2>
      </div>
    )
  }
})
