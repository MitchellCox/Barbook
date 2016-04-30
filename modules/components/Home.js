import React from 'react'
import Title from 'react-title-component'

export default React.createClass({
  render() {
    return (
      <div>
        <Title render={prev => `${prev} | Home`}/>
        <p>Drink</p>
      </div>
    )
  }
})

