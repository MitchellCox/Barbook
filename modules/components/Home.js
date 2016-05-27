import React from 'react'
import Title from 'react-title-component'
import { Button, Icon } from 'react-materialize'
import $ from 'jquery'
import { result1, result2, result3, resultParent } from '../styles.css'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

    getCocktails(e) {
    e.preventDefault()
    let ingredients = this.refs.ingredients.split(',')
    $.ajax({
      url: '/api/cocktail',
      type: 'GET',
      contentType: 'application/json',
      data: { ingredients }
    }).done(cocktails => { 
      this.setState ({ cocktails: cocktails
      }).fail( () => {
        this.props.history.push ('./components/NoMatch')
      }) 
    })
  }

  render() {

    return (
      <div>
        <Title render={prev => `${prev} | Home`}/>
        <h2>Welcome, Imbiber</h2>
        <p>A place where you can create drinks with the ingredients you have at home or anywhere. </p>
        <body>
          <form onSubmit={this.getCocktails}>
            <div className="input-field">
              <input required={true} ref="ingredients" id="search" type="search" className="material-icons" placeholder="What ingredients do you have? Separate ingredients with commas." />
              <a type="submit" className="waves-effect waves-light btn-flat white">Submit</a>
            </div>
          </form>
          <div id={resultParent} className="center row">
            <div id={result1}className="col s12 l3"> </div>
            <div id={result2}className="col s12 l3"> </div>
            <div id={result3}className="col s12 l3"> </div>
          </div>
        </body>
      </div>
    )
  }
}

