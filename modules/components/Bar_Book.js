import React from 'react'
import Title from 'react-title-component'

export default React.createClass({
  render() {
    return (
    	<div>
        	<Title render={prev => `${prev} | Bar Book`} />
        	<h1>Welcome to Your Bar Book.</h1> 
        	<h3>Your personal cocktail repository.</h3>
    	</div>
		)
	}
}) 
