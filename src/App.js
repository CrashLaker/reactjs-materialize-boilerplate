import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import routes from './routes'

const app = (props) => {
  let routesView = routes.map(elem => {
    return <Route 
                key={elem.path}
                path={elem.path} 
                {...elem.props} 
                component={elem.component}></Route>
  })

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
    <div id="app">
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
      <div className="container" style={{'height': '30px'}}>
        <Switch>
          {routesView}
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(app);
