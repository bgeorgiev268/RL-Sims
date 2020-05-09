import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Main from "./components/Main";
// import User from './components/pages/User/index';
// import Favorites from './components/pages/Favorites/index';
import Signup from "./components/SignUp/sign-up"
import LoginForm from './components/Login/login-form';
import Navbar from './components/Navbar/NavBar'


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ' + response.data.user.username)
        const user = response.data.user.username;
        this.setState({
          loggedIn: true,
          username: user
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
        <Navbar username={this.state.username} updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn }
        {/* Routes to different components */}
          <Route exact path="/" render={() => (
            <Main username={this.state.username} />
          )} />
          <Route path="/login" render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup
              signup={this.signup}
            />}
        />
          {/* <Route path="/favorites" component={Favorites} /> */}
        </div>
      </Router>
    );
  }
}
export default App;
