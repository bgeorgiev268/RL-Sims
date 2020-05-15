import React, { Component } from "react";
import Title from '../Title/index.js'
import Card from '../Card/index';
import OwlCarousel from 'react-owl-carousel2';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./style.css";
import Footer from '../Footer/index';



// import "../../../../.env";

const options = {
  items: 5,
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
      items: 2,
      nav: true
    },
    1000: {
      items: 3,
      nav: true
    },
    1200: {
      items: 4,
      nav: true
    },
    1600: {
      items: 5,
      nav: true
    }
  }
};

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hiking: [],
      riding: [],
      climbing: [],
      skiing: [],
      lat: "",
      lon: "",
      username: this.props.username
    }
    this.getLocation = this.getLocation.bind(this)
  };

  componentDidMount() {
    this.apiCall();

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.lat !== prevState.lat || this.state.lon !== prevState.lon) {
      this.apiCall();
    }
  }



  getLocation() {
    
    navigator.geolocation.getCurrentPosition( position => {
      this.setState({ 
        lat: position.coords.latitude, 
        lon: position.coords.longitude 
      });
      // console.log("Latitude: " + position.coords.latitude + "\nLongitude: " + position.coords.longitude)
    });
    
    // console.log("LOCATION")

  }






  apiCall() {
    // console.log(this.state.lat + 'AI)UHJOIHASUJSPIHPIFJASPIOJD)A')
    const lat = this.state.lat ? this.state.lat : "39.5501";
    const lon = this.state.lon ? this.state.lon : "-105.7821";
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
        // console.log("STUFF@@!#$!@")
        // console.log(data.routes)
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

    fetch('https://www.powderproject.com/data/get-trails?lat=' + lat + '&lon=' + lon + '&maxDistance=200&maxResults=16&key=' + KEY)
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
        // console.log("ski trails: ", skiTrail);
        this.setState({ skiing: skiTrail })

      })
  }

  render() {
    return (
      <div>

        {/* This is section One image */}
        <div className="pimg1">

          {this.state.lat ? "" : <button onClick={this.getLocation} className="koalas">Your Location</button>}

        </div>

        {/* This is section One */}
        <section className="section">
          <div className="row" id="section">
            <Title>Hiking</Title>
            <OwlCarousel ref="car" options={options}>
              {this.state.hiking.map(hike => (
                <Card
                  username={this.props.username}
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
            <OwlCarousel ref="car" options={options}>
              {this.state.riding.map(ride => (
                <Card
                  username={this.props.username}
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
            <OwlCarousel ref="car" options={options}>
              {this.state.climbing.map(climb => (
                <Card
                  username={this.props.username}
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

            {this.state.skiing.length ?
              <OwlCarousel ref="car" options={options}>
                {this.state.skiing.map(ski => (
                  <Card
                    username={this.props.username}
                    id={ski.id}
                    key={ski.id}
                    name={ski.name}
                    image={ski.image}
                    url={ski.url}
                    location={ski.location}
                    star={ski.star}
                  />
                ))};
                </OwlCarousel>
              : <h3>No results in your area.</h3>
            }

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

