import React from 'react'
import Title from 'react-title-component'
import { Button, Icon } from 'react-materialize'

export default React.createClass({
  render() {
    return (
    	<div>
      	<Title render={prev => `${prev} | Bar Book`} />
    		<div className="center">
    			<div>
	    			<h3>Welcome to Your Bar Book</h3> 
	        	<h4>Your personal cocktail repository</h4>
        	</div>
      	</div>
        	<body>
		    			<div className="row">
		          	<div className="col s12 m6 center">
		          		<div className="card blue-grey darken 1"> 
		            		<div className="card-content text-color grey-lighten 4"> 
		                  <span className="card-title">Bar Book:</span>
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
									            <td>Vodka Tonic</td>
									            <td>Simple</td>
									            <td>XX/XX/XXXX</td>
									            <td>Great drink!</td> 
									          </tr>
									        </tbody>
								      	</table>
							      	</div>
						      	</div>
					      	</div>
				      	</div>
						</body>

			</div>
		)
	}
}) 
