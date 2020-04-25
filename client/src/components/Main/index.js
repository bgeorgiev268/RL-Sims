import React, { Component } from "react";
import Navbar from "../Navbar/NavBar";
import "./style.css"
import Card from "../Card/index";
import Title from "../Title/index.js"

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

        <div className="welcome-img">
          <div className="welcome-text">
            <span className="border trans">Image 1 Text</span>
          </div>
        </div>

        <div>
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

        <section className="section section-dark">
          <h2>Section One</h2>
          <div className="pimg3">
            <div className="ptext">
              <span className="border trans">Image 2 Text</span>
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <h2>Section Two</h2>
          <div className="pimg3">
            <div className="ptext">
              <span className="border trans">Image 3 Text</span>
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <h2>Section Three</h2>
          <div className="pimg3">
            <div className="ptext">
              <span className="border trans">Image 4 Text</span>
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <h2>Section Four</h2>
          <div className="pimg2">
            <div className="ptext">
              <span className="border trans">Image 5 Text</span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
