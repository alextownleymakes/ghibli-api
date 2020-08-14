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



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );


export default App;
