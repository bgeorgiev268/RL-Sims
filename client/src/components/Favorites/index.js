import React, { Component } from 'react';
import Footer from '../Footer/index';
import './style.css';
import Title from "../Title/index"
import axios from 'axios';
import Card from '../Card/index';
// import { Redirect } from 'react-router-dom';



export class Favorites extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fav: [],
            username: this.props.username,
            favPage: true
        }
        this.loadFavs = this.loadFavs.bind(this);
    };
    componentDidMount() {
        this.loadFavs();
    }



    loadFavs() {
        axios.get("/user/" + this.props.username + "/favorites").then(res => {
            const userFav = [];
            console.log(res.data);
            // console.log( this.props.username);
            // console.log("UserDB: " + res.data[0].user);
            for (let i = 0; i < res.data.length; i++) {
                // if (res.data[i].user === this.props.username) {
                userFav.push({
                    name: res.data[i].name,
                    location: res.data[i].location,
                    star: res.data[i].star,
                    url: res.data[i].url,
                    image: res.data[i].image,
                    id: res.data[i]._id
                })
                // }
            }
            // console.log(res, "129089--dh-jasd-u-1uie-uas-id-i 1")
            this.setState({ fav: userFav });
        })
    }

    render() {
        return (
            <div className="pimg7">
                <div className="row" id="section">
                    <div id="djangoUnchained"> <Title>Favorites</Title></div>
                    <div className="row">
                        {this.state.fav.map(fav => (
                            <Card classname={"col m3"}
                                loadFavs={this.loadFavs}
                                remove= {true}
                                username={this.props.username}
                                id={fav.id}
                                key={fav.id}
                                name={fav.name}
                                image={fav.image}
                                url={fav.url}
                                location={fav.location}
                                star={fav.star}
                            />
                        ))}
                    </div>
                </div>

                <Footer url="favorite" />
            </div>
        )
    }

}

export default Favorites


