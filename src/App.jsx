import React from 'react';
import routes from './routes/routes'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
      <Switch>
{routes.map((route, index) =>(
  <RouteWithSubRoutes key={index}{...route} />
))}
      </Switch>
    </Router>
    
  );
}

function RouteWithSubRoutes(route){
  return (
  <Route 
  path={route.path}
  exact={route.exact}
  render={props => <route.component routes={route.routes}{...props}/>}
  />
  );
}


export default App;
