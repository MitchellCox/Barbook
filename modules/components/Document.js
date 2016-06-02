import React from 'react'
import favicon from '../../static/images/favicon.ico'
import styles from '../styles.css'
import $ from 'jquery'

const { arrayOf, string, node, object } = React.PropTypes
const shims = `
 (String.prototype.trim && Function.prototype.bind) || document.write('<script src="/es5-shim.js"><\\/script>');
 window.Promise || document.write('<script src="/Promise.js"><\\/script>');
 window.fetch || document.write('<script src="/fetch.js"><\\/script>');
 window.$ || document.write('<script src="/jquery.min.js"><\\/script>')
 window.materialize || document.write('<script src="/materialize.min.js"><\\/script>')
`
const Document = React.createClass({
  propTypes: {
    styles: arrayOf(node),
    scripts: arrayOf(node),
    content: string,
    title: string,
    initialState: object
  },
  render() {
    const { styles, scripts, content, title } = this.props
    return (
      <html>
        <head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="shortcut icon" href={favicon}/>
          <link rel="stylesheet" href="/materialize.min.css" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <title>{title}</title>          
          {styles}
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
          <script dangerouslySetInnerHTML={{ __html: shims }}/>
          {scripts}
        </body>
      </html>
    )
  }
})
export default Document
