import React, { Component } from "react";
import Navbar from "../Navbar/NavBar";
import "./style.css"
// import Card from "../Card/index";
// import Title from "../Title/index.js"



export class Main extends Component {

  constructor() {
    super();
    this.state = {
      hiking: []
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

  render() {
    return (
      <div>
        <Navbar />

        {/* This is section One */}
        <div className="pimg1">
          <h1 className="text-center">RL Sims</h1>
        </div>

        <section className="section section-dark">
          <h2>Section One</h2>
        </section>


        {/* This is section Two */}
        <div className="pimg2">
          <div className="ptext">
            <span className="border trans">
              Image 2 Text
  </span>
          </div>
        </div>

        <section className="section section-dark">
          <h2>Section Two</h2>
        </section>


        {/* This is section Three */}
        <div className="pimg3">
          <div className="ptext">
            <span className="border trans">
              Image 3 Text
  </span>
          </div>
        </div>

        <section className="section section-dark">
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

        <section className="section section-dark">
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

      </div>
    );
  }
}

export default Main;

