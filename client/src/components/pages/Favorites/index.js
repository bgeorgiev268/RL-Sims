import React, { Component } from 'react';
import Navbar from '../../Navbar/NavBar';
import Footer from '../../Footer/index';
import './style.css';
import axios from 'axios';
import Card from '../../Card/index';
import OwlCarousel from 'react-owl-carousel2';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export class Favorites extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fav: []
        }
    };
    componentDidMount() {
        this.loadFavs();
    }

    loadFavs() {
        axios.get("/favorites").then(res => {
            const userFav = [];
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
            this.setState({ fav: userFav });
        })
    }

    render() {
        return (
            <div className="pimg7">
                <Navbar />
                <h1>Favorites Page</h1>
                <section className="section">
                    <div className="row" id="section">
                        <Title>Hiking</Title>
                        <OwlCarousel ref="car" options={options}>
                            {this.state.fav.map(fav => (
                                <Card
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
                </section>
                <Footer url="favorite" />
            </div>
        )
    }
}

export default Favorites


