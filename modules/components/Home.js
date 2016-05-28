import React from 'react'
import Title from 'react-title-component'
import { Button, Icon } from 'react-materialize'
import $ from 'jquery'

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
        <body>
          <form onSubmit={this.getCocktails}>
            <div className="input-field">
              <input required={true} ref="ingredients" id="search" type="search" className="material-icons blue-grey-text" placeholder="What ingredients do you have? Separate ingredients with commas." />
              <a type="submit" className="waves-effect waves-light btn-flat white blue-grey-text">Submit</a>
            </div>
          </form>
          <div>
          </div>
        </body>
      </div>
    )
  }
}

