import React from 'react'
import Title from 'react-title-component'
import { Button, Icon } from 'react-materialize'
import $ from 'jquery'
import { result1, result2, result3, resultParent } from '../styles.css'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ingredients: [], visible: [] }
  }

  componentWillMount() {
    $.ajax({
      url: '/api/cocktail',
      type: 'GET',
      contentType: 'application/json'
    }).done(cocktails => { 
      this.setState ({ cocktails: cocktails })
    })
  }

    getCocktails(e) {
    e.preventDefault()
    let ingredients = this.refs.ingredients.value.split(',')
    let visible = []
    this.state.cocktails.map( cocktail => {
      let match = 0
      for (let ingredient of [ ... new Set(ingredients) ] ) {
        let reg = new RegExp(ingredient.trim(), 'i')
        if (reg.test(cocktail.ingredients.join(',')))
          match += 1
      }

      if (match >= 2)
        visible.push({ cocktail: cocktail, matches: match })
    })

    this.setState({ visible: visible.sort( (a, b) => (b.matches / b.cocktail.ingredients.length) - (a.matches / a.cocktail.ingredients.length) ) })
    // $.ajax({
    //   url: '/api/cocktail',
    //   type: 'GET',
    //   contentType: 'application/json',
    //   data: { ingredients }
    // }).done(cocktails => { 
    //   debugger
    //   this.setState ({ cocktails: cocktails
    //   }).fail( () => {
    //     this.props.history.push ('./components/NoMatch')
    //   }) 
    // })
  }

  render() {
   let visible = this.state.visible.map( res => {
      return(<li key={res.cocktail._id}>{res.cocktail.name}</li>)
    })

    return (
     
      <div>
        <Title render={prev => `${prev} | Home`}/>
        <h2>Welcome, Imbiber</h2>
        <p>A place where you can create drinks with the ingredients you have at home or anywhere. </p>
        <body>
          <form onSubmit={(e) => this.getCocktails(e)}>
            <div className="input-field">
              <input required={true} ref="ingredients" id="search" type="search" className="material-icons" placeholder="What ingredients do you have? Separate ingredients with commas." />
              <button type="submit" className="waves-effect waves-light btn">Submit</button>
            </div>
          </form>
          <div id={resultParent} className="center row">
            <ul>
             {visible}
            </ul>
            <div id={result1}className="col s12 l3"> </div>
            <div id={result2}className="col s12 l3"> </div>
            <div id={result3}className="col s12 l3"> </div>
          </div>
        </body>
      </div>
    )
  }
}

