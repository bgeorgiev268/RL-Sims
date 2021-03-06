import React, { Component } from 'react';
import "./style.css";
import { Link } from 'react-router-dom'
import axios from 'axios'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
    this.state = {
      username: '',
      redirectTo: null
    }
  }

  logout() {
    // event.preventDefault()
    console.log('logging out')
    axios.post('/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null,
          redirectTo: "/"
        })
      }
    }).catch(error => {
      console.log('Logout error')
    })
  }


  render() {
    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ')
    console.log("User: " + this.props.username);

    return (
      <div>

        <nav className="navbar-fixed" id="nav-container">
          <div className="col-4" >
            <div><img src="https://i.imgur.com/eKhxhl8.png" className="logo" alt="site logo" /></div>
            {loggedIn ? (
              <div className="align">
              <section className="navbar-section">
                <Link to="/" className="btn btn-link text-secondary">
                    <span className="text-secondary spanElement">Home</span>
                  </Link>
                <Link to="/favorites" className="btn btn-link">
                    <span className="text-secondary spanElement"><span className="spanElement2">{this.props.username}'s</span> Favorites</span>
                  </Link>
                <Link to="/" className="btn btn-link text-secondary" onClick={this.logout}>
                  <span className="text-secondary spanElement">logout</span></Link>
                  

              </section>
              </div>
            ) : (
                <section className="navbar-section">
                  <Link to="/" className="btn btn-link text-secondary">
                    <span className="text-secondary spanElement">Home</span>
                  </Link>
                  <Link to="/login" className="btn btn-link text-secondary">
                    <span className="text-secondary spanElement">Login</span>
                  </Link>
                  <Link to="/signup" className="btn btn-link">
                    <span className="text-secondary spanElement">Sign Up</span>
                  </Link>
                </section>

                
              )}
          </div>
         
        </nav>
      </div>

    );

  }
}

export default Navbar
