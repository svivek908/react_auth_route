import React, { Component } from 'react'
import {Switch, Route, BrowserRouter as Router, Redirect, Link} from 'react-router-dom';
import Auth from './cmp/Auth';
import Home from './cmp/Home';
import Protected from './cmp/Protected';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
      <Link to="/home">Home</Link>
      <Link to="/">Login</Link>
        
         <Switch>
           <Route exact path="/" component={Auth}/>
           
           <Protected cmp={Home}/>
         </Switch>
         </Router>
      </div>
    )
  }
}
