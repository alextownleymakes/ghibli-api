import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Films from './components/Films'
import People from './components/People'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


class App extends Component {
  
  render () {
    return (
      <React.Fragment>
        <Navigation />
      </React.Fragment>
    )
  }
} 

export default App;
