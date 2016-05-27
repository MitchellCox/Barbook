import React from 'react'
import Title from 'react-title-component'
import { founder } from '../styles.css'

export default React.createClass({
  render() {
    return (
      <div>
        <Title render={prev => `${prev} | About`}/>
        <h2>About</h2>
      	<body>
          <div className="row">
           <div className="col s7 push-s5">
              <span className="flow-text">BarBook is creating a community of cocktail enthusiasts who want to learn about cocktails, connect with others, and share their creations.
              </span>
           </div>
           <div className="col s5 pull-s7">
              <div className={founder}></div>
              <div className={founder}></div>
           </div>
          </div>        
      	</body>
      </div>
    )
  }
})
