import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import Skyscanner from './Skyscanner'
import Alphavantage from './Alphavantage'
import Darksky from './Darksky'
import Xposed from './Xposed'
import Home from './Home';

const App = () => {
  // let isShown = false;
  console.log('I am rendering');

  return (
    <div className="App">
      <Navbar bg="dark" variant='dark' expand='md'>
        <Navbar.Brand>Hugh-G-Rection</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/skyscanner">Skyscanner</Nav.Link>
            <Nav.Link href="/alphavantage">Alpha Vantage</Nav.Link>
            <Nav.Link href="/darksky">Dark Sky</Nav.Link>
            <Nav.Link href="/xposed">Xposed</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/skyscanner' component={Skyscanner} />
        <Route path='/alphavantage' component={Alphavantage} />
        <Route path='/darksky' component={Darksky} />
        <Route path='/xposed' component={Xposed} />
      </Switch>
    </div>
  );
}

export default App;
