import React, { Component } from 'react'
import "./style.css"

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo center">Logo</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="#!">Stuff</a></li>
          <li><a href="#!">Stuff</a></li>
          <li><a href="#!">More Stuff</a></li>
        </ul>
      </div>
    </nav>
  </div>
        )
    }
}

export default Navbar