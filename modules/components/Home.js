import React from 'react'
import Title from 'react-title-component'

export default React.createClass({

	compnentWillMount
  render() {
    return (
      <div>
        <Title render={prev => `${prev} | Home`}/>
      </div>
      <div>
      	<h2>Welcome Imbiber</h2>
      </div>
    )
  }
})

