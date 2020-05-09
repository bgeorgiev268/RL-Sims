import React, { Component } from 'react';
import Footer from '../Footer/index';
import './style.css';
import Title from "../Title/index"
import axios from 'axios';
import Card from '../Card/index';
import OwlCarousel from 'react-owl-carousel2';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    items: 1,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3500,
    loop: true,
    margin: 0,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        800: {
            items: 1,
            nav: true
        },
        1000: {
            items: 1,
            nav: true
        },
        1200: {
            items: 1,
            nav: true
        },
        1600: {
            items: 1,
            nav: true
        }
    }
};

export class Favorites extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fav: [],
            username: this.props.username
        }
        this.loadFavs = this.loadFavs.bind(this);
    };
    componentDidMount() {
        this.loadFavs();
    }



    loadFavs() {
        axios.get("/user/favorites").then(res => {
            const userFav = [];
            console.log( this.props.username);
            console.log("UserDB: " + res.data[0].user);
            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].user === this.props.username) {
                    userFav.push({
                        name: res.data[i].name,
                        location: res.data[i].location,
                        star: res.data[i].star,
                        url: res.data[i].url,
                        image: res.data[i].image
                    })
                }
            }
            console.log(res, "129089--dh-jasd-u-1uie-uas-id-i 1")
            this.setState({ fav: userFav });
        })
    }

    render() {
        return (
            <div className="pimg7">
                    <div className="row" id="section">
                        <Title>Favorites</Title>
                        <OwlCarousel ref="car" options={options}>
                            {this.state.fav.map(fav => (
                                <Card
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
                        </OwlCarousel>
                    </div>
                
                <Footer url="favorite" />
            </div>
        )
    }
}

export default Favorites


