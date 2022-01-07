import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from '../Components/Navbar';
import Footer from '../Components/Footer';
import {Container} from 'react-bootstrap';

export default function Layout(props) {
    const {routes} = props;
    return (
      <div>
       <NavBar/>
       <Container>
        <LoadRoutes routes={routes}/>   
       </Container>
       <Footer/> 
      </div>
    )
  }
  
  
  function LoadRoutes({ routes }) {
    return ( 
    <Switch> {
            routes.map((route, index) => (
                 <Route key = { index }
                 path = { route.path }
                 exact = { route.exact }
                 component = { route.component }
                />
            ))
        } 
        </Switch>
    );
  
  }