import React, { Component } from "react";
import Navbar from "../Navbar/NavBar";
import "./style.css"

export class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="welcome-img">
          <div className="welcome-text">
            <span className="border trans">Image 1 Text</span>
          </div>
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
