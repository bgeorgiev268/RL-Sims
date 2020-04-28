import React, { Component } from 'react';
import Navbar from '../../Navbar/NavBar';
import Footer from '../../Footer/index';
import './style.css';

export class Favorites extends Component {
    render() {
        return (
            <div className="pimg7">
                <Navbar />
                <h1>Favorites Page</h1>
                <Footer />
            </div>
        )
    }
}

export default Favorites
