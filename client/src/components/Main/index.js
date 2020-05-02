import React, { Component } from "react";
import Navbar from "../Navbar/NavBar";
import Title from '../Title/index.js'
import Card from '../Card/index';
import OwlCarousel from 'react-owl-carousel';
import "./style.css";
import Footer from '../Footer/index';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import "../../../../.env";


export class Main extends Component {
  constructor() {
    super();
    this.state = {
      hiking: [],
      riding: [],
      climbing: [],
      skiing: [],
      lat: "",
      lon: ""
    }
  }

  componentDidMount() {
    this.ipRequest();
    this.apiCall();
  }

  componentDidUpdate(prevProps, prevState) {
    // this.apiCall();
    if (this.state.lat !== prevState.lat || this.state.lon !== prevState.lon) {
      this.apiCall();
    }
  }

  ipRequest() {
    const IP_KEY = process.env.REACT_APP_IP_KEY;
    fetch("http://api.ipstack.com/check?access_key=" + IP_KEY + "&format=1")
      .then(results => {
        return results.json();
      })
      .then(res => {
        console.log("IP results");
        console.log(res.latitude + " " + res.longitude)
        this.setState({ lat: res.latitude, lon: res.longitude })
        // this.apiCall();
        // console.log(this.state.lat);
      });
  }




  apiCall() {
    // console.log(this.state.lat + 'AI)UHJOIHASUJSPIHPIFJASPIOJD)A')
    const lat = this.state.lat ? this.state.lat : "40.0274";
    const lon = this.state.lon ? this.state.lon : "-105.2519";
    const KEY = process.env.REACT_APP_ACTIVITY_KEY;
    const MNT_KEY = process.env.REACT_APP_MOUNTAIN_KEY;

    fetch('https://www.hikingproject.com/data/get-trails?lat=' + lat + '&lon=' + lon + '&maxDistance=50&maxResults=16&key=' + KEY)
      .then(results => {
        return results.json();
      }).then(data => {
        var trailName = [];
        for (var i = 0; i < data.trails.length; i++) {
          trailName.push({
            name: data.trails[i].name,
            location: data.trails[i].location,
            star: data.trails[i].stars,
            url: data.trails[i].url,
            image: data.trails[i].imgMedium,
            id: i + 1,
            activity: "hiking"
          })
        }
        this.setState({ hiking: trailName })

      })

    fetch('https://www.mtbproject.com/data/get-trails?lat=' + lat + '&lon=' + lon + '&maxDistance=50&maxResults=16&key=' + KEY)
      .then(results => {
        return results.json();
      }).then(data => {
        var bikeTrail = [];
        for (var i = 0; i < data.trails.length; i++) {
          bikeTrail.push({
            name: data.trails[i].name,
            location: data.trails[i].location,
            star: data.trails[i].stars,
            url: data.trails[i].url,
            image: data.trails[i].imgMedium,
            id: i + 1,
            activity: "riding"
          })
        }
        this.setState({ riding: bikeTrail })

      })

    fetch('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=' + lat + '&lon=' + lon + '&maxDistance=50&minDiff=5.6&maxDiff=5.10&maxResults=16&key=' + MNT_KEY)
      .then(results => {
        return results.json();
      }).then(data => {
        console.log("STUFF@@!#$!@")
        console.log(data.routes)
        var climbRoute = [];
        for (var i = 0; i < data.routes.length; i++) {
          climbRoute.push({
            name: data.routes[i].name,
            location: data.routes[i].location[2] + ", " + data.routes[i].location[0],
            star: data.routes[i].stars,
            url: data.routes[i].url,
            image: data.routes[i].imgMedium,
            id: i + 1,
            activity: "climbing"
          })
        }
        this.setState({ climbing: climbRoute })

      })

    fetch('https://www.powderproject.com/data/get-trails?lat=' + lat + '&lon=' + lon + '&maxDistance=50&maxResults=16&key=' + KEY)
      .then(results => {
        return results.json();
      }).then(data => {
        var skiTrail = [];
        for (var i = 0; i < data.trails.length; i++) {
          skiTrail.push({
            name: data.trails[i].name,
            location: data.trails[i].location,
            star: data.trails[i].stars,
            url: data.trails[i].url,
            image: data.trails[i].imgMedium,
            id: i + 1,
            activity: "skiing"
          })
        }
        console.log("ski trails: ", skiTrail);
        this.setState({ skiing: skiTrail })

      })
  }

  render() {
    return (
      <div>

        {/* This is section One image */}
        <div className="pimg1">
          <h1 className="project text-center">RL Sims</h1>
        </div>

        {/* This is section One */}
        <section className="section">
          <div className="row" id="section">
            <Title>Hiking</Title>
            <OwlCarousel items={5}
              className='owl-theme'
              loop
              nav
              autoplay
              freeDrag
              autoplayHoverPause
              autoplayTimeout={3500}
              margin={2} >
              {this.state.hiking.map(hike => (
                <Card
                  saveCard={this.saveCard}
                  id={hike.id}
                  key={hike.id}
                  name={hike.name}
                  image={hike.image}
                  url={hike.url}
                  location={hike.location}
                  star={hike.star}
                />
              ))}
            </OwlCarousel>
          </div>
        </section>


        {/* This is section Two image */}
        <div className="pimg2">
          <div className="ptext">
          </div>
        </div>

        {/* This is section Two */}
        <section className="section">
          <div className="row" id="section">
            <Title>Mountain Biking</Title>
            <OwlCarousel items={5}
              className='owl-theme'
              loop
              nav
              autoplay
              freeDrag
              autoplayHoverPause
              autoplayTimeout={3500}
              margin={2} >
              {this.state.riding.map(ride => (
                <Card
                  saveCard={this.saveCard}
                  id={ride.id}
                  key={ride.id}
                  name={ride.name}
                  image={ride.image}
                  url={ride.url}
                  location={ride.location}
                  star={ride.star}
                />
              ))}
            </OwlCarousel>
          </div>
        </section>


        {/* This is section Three image */}
        <div className="pimg3">
          <div className="ptext">
          </div>
        </div>

        {/* This is section Three */}
        <section className="section">
          <div className="row" id="section">
            <Title>Climbing</Title>
            <OwlCarousel items={5}
              className='owl-theme'
              loop
              nav
              autoplay
              freeDrag
              autoplayHoverPause
              autoplayTimeout={3500}
              margin={2} >
              {this.state.climbing.map(climb => (
                <Card
                  saveCard={this.saveCard}
                  id={climb.id}
                  key={climb.id}
                  name={climb.name}
                  image={climb.image}
                  url={climb.url}
                  location={climb.location}
                  star={climb.star}
                />
              ))}
            </OwlCarousel>
          </div>
        </section>


        {/* This is section Four image */}
        <div className="pimg4">
          <div className="ptext">
          </div>
        </div>

        {/* This is section Four */}
        <section className="section">
          <div className="row" id="section">
            <Title>Powder</Title>
            <OwlCarousel items={5}
              className='owl-theme'
              loop
              nav
              autoplay
              freeDrag
              autoplayHoverPause
              autoplayTimeout={3500}
              margin={2} >
              {this.state.skiing.length ?
                this.state.skiing.map(ski => (
                  <Card
                    saveCard={this.saveCard}
                    id={ski.id}
                    key={ski.id}
                    name={ski.name}
                    image={ski.image}
                    url={ski.url}
                    location={ski.location}
                    star={ski.star}
                  />
                )): <h3>No results in your area.</h3>
              }
                 </OwlCarousel>  
          </div>
        </section>

        {/* This is the final image for parallax */}
        <div className="pimg5">
          <div className="ptext">

          </div>
        </div>

        {/* Footer */}
        <Footer url='home' />

      </div>
    );
  }
}

export default Main;

