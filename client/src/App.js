import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Main from "./components/Main";
import User from './components/pages/User/index';
import Favorites from './components/pages/Favorites/index';
// import Signup from "./components/SignUp"
// import LoginForm from './components/Login';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Main} />
          <Route path="/User" component={User} />
          <Route path="/Favorites" component={Favorites} />
        </div>
      </Router>
    );
  }
}
export default App;
