import React, { Component } from "react";
import Hello from './NavBar';

export class Parallax extends Component {


    render() {
        return (
            <div>
                <Hello />

                <div className="pimg2">
                    <div className="ptext">
                        <span className="border trans">
                            Image 1 Text
            </span>
                    </div>
                </div>

                <section className="section section-dark">
                    <h2>Section One</h2>

                </section>

                <div className="pimg3">
                    <div className="ptext">
                        <span className="border trans">
                            Image 2 Text
            </span>
                    </div>
                </div>

                <section className="section section-dark">
                    <h2>Section Two</h2>

                </section>

                <div className="pimg2">
                    <div className="ptext">
                        <span className="border trans">
                            Image 3 Text
            </span>
                    </div>
                </div>

                <section className="section section-dark">
                    <h2>Section Three</h2>

                </section>

                <div className="pimg3">
                    <div className="ptext">
                        <span className="border trans">
                            Image 4 Text
            </span>
                    </div>
                </div>

                <section className="section section-dark">
                    <h2>Section Four</h2>
                </section>

                <div className="pimg2">
                    <div className="ptext">
                        <span className="border trans">
                            Image 5 Text
            </span>
                    </div>
                </div>

            </div>
        )
    }
}

export default Parallax;