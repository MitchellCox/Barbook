import React from 'react'
import Title from 'react-title-component'

export default React.createClass({
  render() {
    return (
    	<div>
        	<Title render={prev => `${prev} | Bar Book`} />
    		<h1>Welcome to Your Bar Book</h1> 
        	<h3>Your personal cocktail repository</h3>
        	<body>
        		<h4>Bar Book:</h4> 
	        	<table>
				  <tr>
				    <th>Drink</th>
				    <th>Date</th> 
				    <th>Rating</th>
				  </tr>
				  <tr>
				    <td>Test Name</td>
				    <td>Test Date</td> 
				    <td>Test Rating</td>
				    <td>Test Description</td> 
				  </tr>
				</table>
			</body>
    	</div>
		)
	}
}) 
