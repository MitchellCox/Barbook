import React from 'react'

class Search extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return(
			<nav>
				<div className="nav-wrapper">
					<form>
						<div className="input-field">
							<input id="search" type="search" required />
							<label for="search"><i class="material-icons">list ingredients</i></label>
							<i className="material-icons">close</i>
						</div>
					</form>
				</div>
			</nav>
		)
	}
}

export default Search
