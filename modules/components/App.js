import React from 'react'
import { IndexLink, Link } from 'react-router'
import Title from 'react-title-component'

export default React.createClass({
  render() {
    return (
      <div>
        <Title render="Drink"/>
        <h1>Drinks.</h1>
        <ul>
          <li><IndexLink to="/">Home</IndexLink></li>
          <li><Link to="/dragon">About!</Link></li>
          <li><Link to="/not-dragon">Contact</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

