import React, { Component } from "react";
import Navbar from "../Navbar/NavBar";
import Title from '../Title/index.js'
import Card from '../Card/index'
import "./style.css";
import Footer from '../Footer/index';



export class Main extends Component {
  constructor() {
    super();
    this.state = {
      hiking: [],
      riding: [],
      climbing: [],
      skiing: []
    }
  }

  componentDidMount() {
    fetch('https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&maxResults=4&key=200734128-f28df197b25c568ae8f8d080e196f6f4')
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
        console.log(data)
        console.log(data.trails[0].name)

      })

    fetch('https://www.mtbproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&maxResults=4&key=200734128-f28df197b25c568ae8f8d080e196f6f4')
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
        console.log(data)
        console.log(data.trails[0].name)

      })

      fetch('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=40.03&lon=-105.25&maxDistance=10&minDiff=5.6&maxDiff=5.10&maxResults=4&key=200734128-d1406dd362d69ba4d097a47e42427bd8')
      .then(results => {
        return results.json();
      }).then(data => {
        var climbRoute = [];
        for (var i = 0; i < data.routes.length; i++) {
          climbRoute.push({
            name: data.routes[i].name,
            location: data.routes[i].location,
            star: data.routes[i].stars,
            url: data.routes[i].url,
            image: data.routes[i].imgMedium,
            id: i + 1,
            activity: "climbing"
          })
        }
        this.setState({ climbing: climbRoute })
        console.log(data)
        console.log(data.routes[0].name)

      })

      fetch('https://www.powderproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=200&maxResults=4&key=200734128-f28df197b25c568ae8f8d080e196f6f4')
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
        this.setState({ skiing: skiTrail })
        console.log(data)
        console.log(data.trails[0].name)

      })


  }

  render() {
    return (
      <div>
        <Navbar />

        {/* This is section One */}
        <div className="pimg1">
          <h1 className="project text-center">RL Sims</h1>
        </div>

        <section className="section">
          <div className="row" id="section">
            <Title>Hiking</Title>
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
          </div>
        </section>


        {/* This is section Two */}
        <div className="pimg2">
          <div className="ptext">
            <span className="border trans">
              Image 2 Text
  </span>
          </div>
        </div>

        <section className="section">
          <div className="row" id="section">
            <Title>Mountain Biking</Title>
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
          </div>
        </section>


        {/* This is section Three */}
        <div className="pimg3">
          <div className="ptext">
            <span className="border trans">
              Image 3 Text
  </span>
          </div>
        </div>

        <section className="section">
          <div className="row" id="section">
            <Title>Climbing</Title>
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
          </div>
        </section>


        {/* This is section Four */}
        <div className="pimg4">
          <div className="ptext">
            <span className="border trans">
              Image 4 Text
  </span>
          </div>
        </div>

        <section className="section">
          <div className="row" id="section">
            <Title>Powder</Title>
            {this.state.skiing.map(ski => (
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
            ))}
          </div>
        </section>

        {/* This is the final image for parallax */}
        <div className="pimg5">
          <div className="ptext">
            <span className="border trans">
              Image 5 Text
  </span>
          </div>
        </div>

        {/* Footer */}
        <Footer />

      </div>
    );
  }
}

export default Main;

