import React, { PropTypes } from 'react'
import Title from 'react-title-component'
import { Button, Icon } from 'react-materialize'
import $ from 'jquery'
import { resultCard, resultParent } from '../styles.css'
import ReactPaginate from 'react-paginate'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ingredients: [], visible: [], pageNum: 0, paginated: [], cocktails: [] }
  }

  componentDidMount() {
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
   
    let sortedVisible = visible.sort( (a, b) => (b.matches / b.cocktail.ingredients.length) - (a.matches / a.cocktail.ingredients.length) )

    this.setState({ paginated: sortedVisible.slice(0,6), pageNum: Math.ceil((visible.length) / 6), visible: sortedVisible })
  }

  handlePageClick(data) {
    let start = data.selected === 0 ? 0 : (data.selected  * 6)
    let end = (start + 6) > this.state.visible.length ? this.state.visible.length : (start + 6)
    let paginated = this.state.visible.slice(start, end)
    this.setState({ paginated: paginated })
  }

  render() {
   let paginated = this.state.paginated.map( res => {
      return(<li key={res.cocktail._id}><image src={res.cocktail.image} />{res.cocktail.name}</li>)
    })


    return (
      <div>
        <Title render={prev => `${prev} | Home`}/>
        <h2>Welcome, Imbiber</h2>
        <p>A place where you can create drinks with the ingredients you have at home or anywhere. </p>
        <body>
          <form onSubmit={(e) => this.getCocktails(e)}>
            <div className="input-field">
              <input required={true} ref="ingredients" id="search" type="search" className="material-icons blue-grey-text" placeholder="What ingredients do you have? Separate ingredients with commas." />
              <button type="submit" className="waves-effect waves-light btn blue-grey-text">Submit</button>
            </div>
          </form>
          <div id={resultParent} className="center row">
            <ul>
              {paginated}
            </ul>
            {/*<div className={`${resultCard} col s12 l3`}>{this.props.visible.map(image)}, {this.props.map(name)}</div>
            <div className={`${resultCard} col s12 l3`}>{this.props.visible.map(image)}, {this.props.map(name)}</div>
            <div className={`${resultCard} col s12 l3`}>{this.props.visible.map(image)}, {this.props.map(name)}</div>*/}
          </div>
          <ReactPaginate 
             previousLabel={"previous"}
             nextLabel={"next"}
             breakLabel={<a href="">...</a>}
             pageNum={this.state.pageNum}
             marginPagesDisplayed={2}
             pageRangeDisplayed={5}
             clickCallback={this.handlePageClick.bind(this)}
             containerClassName={"pagination"}
             subContainerClassName={"pages pagination"}
             activeClassName={"active"} />
        </body>
      </div>
    )
  }
}

