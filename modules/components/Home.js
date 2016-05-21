import React from 'react'
import Title from 'react-title-component'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  getCocktails(e) {
    e.preventDefault()
    let ingredients = this.refs.handle
    $.ajax({
      url: '/api/cailtails',
      type: 'GET',
      contentType: 'application/json',
      data: {}
    }).done(cocktails => {
      this.setState({
      }).fail( ()) //call to 404 page in NoMatch
    })
  }

  render() {
    return (
      <div>
        <Title render={prev => `${prev} | Home`}/>
      	<h2>Welcome Imbiber</h2>
        <body>
          <div className="parallax-container">
            <div className="parallax"><img src="../../static/images/wood-textures.jpg" /> </div>
          </div>

          <div className="section white">
            <div className="row container">
              <form onSubmit={this.getCocktails}>
                <div className="input-field">
                  <input required={true} ref="ingredients" id="search" type="search" className="material-icons" placeholder="What ingredients do you have?" />
                  <a type="submit" className="waves-effect waves-light btn-flat">Submit
                    <i className="material-icons right">send</i>
                  </a>
                </div>
              </form>
            </div>
          </div>

          <div className="parallax-container">
            <div className="parallax"><img src="../../static/images/wood-textures.jpg" /> 
              <div 
            </div>
          </div>
 
        </body>
      </div>
    )
  }
}

