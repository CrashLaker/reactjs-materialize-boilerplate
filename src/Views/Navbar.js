import React from 'react'

import routes from '../routes'

const navbar = (props) => {

  const onNavSelect = path => {
    console.log('onnavselect', path)
    props.history.push(`${path}`)
  }

  const navItems = routes.map(d => {
    return (
      <li key={d.title}>
        <a href="#!" onClick={() => onNavSelect(d.path)}>{d.title}</a>
      </li>
    )
  }).reverse()

  return (
    <nav className="indigo">
      <div className="nav-wrapper container">
        <a href="#" className="brand-logo center">
          Cloud<i className="material-icons">cloud</i>
        </a>
        <a href="#modal-login" className="right">
          <i className="material-icons">login</i>
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          {navItems}
        </ul>
      </div>
    </nav>
  )
}



export default navbar