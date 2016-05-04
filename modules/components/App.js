import React from 'react'
import { IndexLink, Link } from 'react-router'
import Title from 'react-title-component'

export default React.createClass({
  render() {
    return (
      <nav>
        <div>
          <Link to="/" className="brand-logo">Drinks</Link>
          <ul>
            <li><IndexLink to="/">Home</IndexLink></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          {this.props.children}
        </div>
      </nav>
    )
  }
})

