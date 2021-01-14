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

  return (
    <div id="app">
      <div className="container" style={{'height': '30px'}}>
        <Switch>
          {routesView}
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(app);
