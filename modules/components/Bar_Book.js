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
	        	<table className="centered responsive-widths">
			        <thead>
			          <tr>
			              <th data-field="id">Cocktail</th>
			              <th data-field="difficulty">Level of Difficulty</th>
			              <th data-field="date">Date</th>
			              <th data-field="notes">Drink Notes</th> 
			          </tr>
			        </thead>

			        <tbody>
			          <tr>
			            <td>Alvin</td>
			            <td>Eclair</td>
			            <td>$0.87</td>
			          </tr>
			          <tr>
			            <td>Alan</td>
			            <td>Jellybean</td>
			            <td>$3.76</td>
			          </tr>
			          <tr>
			            <td>Jonathan</td>
			            <td>Lollipop</td>
			            <td>$7.00</td>
			          </tr>
			        </tbody>
		      	</table>
			</body>
    	</div>
		)
	}
}) 
