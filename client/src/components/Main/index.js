import React, { Component } from "react";
import Navbar from "../Navbar/NavBar";
import Title from '../Title/index.js'
import Card from '../Card/index' 
import "./style.css";
import Footer from '../Footer/index';
// import Card from "../Card/index";
// import Title from "../Title/index.js"



export class Main extends Component {

  constructor() {
    super();
    this.state = {
      hiking: [],
      riding: []
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
            id: i + 1
          })
        }
        this.setState({ hiking: trailName })
        console.log(data)
        console.log(data.trails[0].name)

      })
  }


  componentWillMount() {
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
            id: i + 1
          })
        }
        this.setState({ riding: bikeTrail })
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
          <h2>Section Three</h2>
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
          <h2>Section Four</h2>
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

