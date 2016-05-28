import React from 'react'
import Title from 'react-title-component'

export default React.createClass({
  render() {
    return (
      <div>
        <Title render={prev => `${prev} | Contact`}/>
        <h2>Contact</h2>
        <p>Drop us a line, tell us about your latest drink, or share a piece of valuable feedback.</p>
          
          <div className="row">
            <form className="col s12 contact_form" action="MAILTO:mitchell.allan.cox@gmail.com" method="POST" enctype="text/plain" name="BarBook_Feedback">
              <div className="row">
                <div className="input-field col s6">
                  <input id="first_name" type="text" className="validate blue-grey-text"/>
                  <label for="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                  <input id="last_name" type="text" className="validate blue-grey-text"/>
                  <label for="last_name">Last Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate blue-grey-text"/>
                  <label for="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="feedback" type="text" className="validate blue-grey-text"/>
                  <label for="feedback">Feedback</label>
                </div>
              </div>
              <div>
                <div className="input-field col s12">
                  <input className="btn" type="submit" />
                </div> 
              </div>
            </form>
          </div>

        </div> 
    )
  }
})


