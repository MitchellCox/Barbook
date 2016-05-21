import React from 'react'
import Title from 'react-title-component'

export default React.createClass({
  render() {
    return (
      <div>
        <Title render={prev => `${prev} | Contact`}/>
        <h2>Contact</h2>
        <p>Drop us a line, tell us about your latest drink, or share a piece of valuable feedback.</p>
        <div class="row">
    		<form class="col s12">
      			<div class="row">
    				<div class="input-field col s12">
      					<textarea id="textarea1" class="materialize-textarea"></textarea>
          				<label for="textarea1">Tell us something interesting.</label>
    				</div>
      			</div>
    		</form>
  		</div>
      </div>
    )
  }
})


