import React from 'react'
import Title from 'react-title-component'
import { Button, Icon } from 'react-materialize'
import $ from 'jquery'
import { connect } from 'react-redux'

export default class Bar_Book extends React.Component {
	constructor(props) {
		super(props)
		this.addCocktail = this.addCocktail.bind(this)
		this.state = { cocktails: [] }
	}

	componentWillMount() {
    const id = this.props.auth.id
    $.ajax({
      url: '/api/cocktail',
      type: 'GET',
      dataType: 'JSON',
      contentType: 'application/json',
      data: { id: id }
    }).done( cocktail => {
      this.setState({ cocktail: cocktail })
    })
  }

  addCocktail(e, id) {
    e.preventDefault()
    $.ajax({
      url: '/api/cocktail',
      type: 'POST',
      dataType: 'JSON',
      contentType: 'application/json',
      data: JSON.stringify({ text: this.refs.text.value, id: id })
    }).done( cocktail => {
      this.setState({ cocktails: [ ...this.state.cocktails, cocktail ] })
    })
    this.refs.text.value = ''
 	}

  render() {
    const token = this.props.auth.token
    const id = this.props.auth.id
    let cocktails = this.state.cocktails.map( cocktail => {
      return <li key={cocktail._id}>{cocktail.text}</li>
  	})

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
                <span className="card-title centered">Bar Book:</span>
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
						          <ul>
						          	{cocktails}
						          </ul>
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
} 

const mapStateToProps = (state) => {
	return {
		auth: { token: state.token, id: state.id }
	}
}
export default connect(mapStateToProps)(Bar_Book)
