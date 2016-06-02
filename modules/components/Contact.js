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
            <form id="form1" name="form1" class="wufoo topLabel page" accept-charset="UTF-8" autocomplete="off" enctype="multipart/form-data" method="post" novalidate
      action="https://mitchellcox.wufoo.com/forms/z7plsbf0sf12r0/#public">              
              <div className="row">
                <div className="input-field col s6">
                  <input id="first_name Field1" type="text" className="validate blue-grey-text field text fn"/>
                  <label for="first_name Field1">First Name</label>
                </div>
                <div className="input-field col s6">
                  <input id="last_name Field2" type="text" className="validate blue-grey-text field text ln"/>
                  <label for="last_name Field2">Last Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="email foli3" type="email" className="validate blue-grey-text desc"/>
                  <label id="title3" for="email Field3">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="feedback title5" type="text" className="validate blue-grey-text desc"/>
                  <label for="feedback Field5">Feedback</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="saveForm" name="saveForm" className="btn submit" type="submit" value="Submit"/>                
                </div> 
              </div>
              <li className="hide">
                <label for="comment">Do Not Fill This Out</label>
                <textarea name="comment" id="comment" rows="1" cols="1"></textarea>
                <input type="hidden" id="idstamp" name="idstamp" value="RFTT7AMbPiWSMBSXqN5A2EnDF75ZIgkWUmdMftp1QrE=" />
              </li>
            </form>
          </div>
        </div> 
    )
  }
})


