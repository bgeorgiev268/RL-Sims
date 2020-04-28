import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo center">Logo</Link>
        <ul className="right hide-on-med-and-down">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/User">User</Link></li>
          <li><Link to="/Favorites">Favorites</Link></li>
        </ul>
      </div>
    </nav>
  </div>
        )
    }
}

export default Navbar