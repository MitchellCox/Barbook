import React from 'react'
import Title from 'react-title-component'
import { founder } from '../styles.css'
import { founder_img } from '../styles.css'
import Mitchell from './images/Mitchell.jpg'
import Diane from './images/Diane.jpg'

export default React.createClass({
  render() {
    return (
      <div>
        <Title render={prev => `${prev} | About`}/>
        <br/>
        <h4 className="center">Discover your drink.</h4>
        <br/> 
        <br/> 
      	<body>
          <div className="row">
           <div className="col s12 m6">
              <div className="col s12 m6" >
                <div className={founder}>
                  <img src={Mitchell} className={founder_img} />
                  <h5>Mitchell Cox</h5>
                  <p>Front-End Developer & Fitness Enthusiast</p>
                </div>
              </div>  
              <div className="col s12 m6" >
                <div className={founder}>
                  <img src={Diane} className={founder_img}  />
                  <h5>Diane Tran</h5>
                  <p>Software Engineer & Aspiring Cafe Owner</p>
                </div>
              </div>
           </div>
           <div className="col s12 m6">
              <span className="flow-text">BarBook is creating a community of cocktail enthusiasts who want to learn about cocktails, connect with others, and share their creations.
              </span>
              <br/> 
              <br/> 
              <span className="flow-text">BarBook allows cocktail enthusiasts and novices alike to discover new cocktails using the ingredients in their home.
              </span> 
              <br/> 
              <br/> 
              <span className="flow-text">For more information, to ask questions, or to provide feedback, contact our team <a href="https://mitchellcox.wufoo.com/forms/z7plsbf0sf12r0">here</a>.
              </span> 
           </div>
          </div>        
      	</body>
      </div>
    )
  }
})
