import React, { Component } from 'react';
import Navbar from '../../Navbar/NavBar';
import Footer from '../../Footer/index';
import './style.css';

export class User extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1>User Page</h1>
                <Footer url="user" />
            </div>
        )
    }
}

export default User

