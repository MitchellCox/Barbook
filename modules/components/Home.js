import React from 'react'
import Title from 'react-title-component'

export default React.createClass({
  render() {
    return (
      <div>
        <Title render={prev => `${prev} | Home`}/>
        <body>
          <div className="parallax-container">
            <div className="parallax"><img src="../../static/images/wood-textures.jpg" /> </div>
          </div>

          <div className="section white">
            <div className="row container">
              <form>
                <div className="input-field">
                  <input id="search" type="search" required />
                  <label for="search"><i className="material-icons" placeholder="What ingredients do you have?"></i></label>
                  <i className="material-icons">close</i>
                </div>
              </form>
            </div>
          </div>

          <div className="parallax-container">
            <div className="parallax"><img src="../../static/images/wood-textures.jpg" /> </div>
          </div>
          
        </body>
      </div>
    )
  }
})

