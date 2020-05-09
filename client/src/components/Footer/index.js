import React from 'react';
import './style.css';

function Footer(props) {
  
        return (

            <footer className={`footer-${props.url}`}>
                <span className="spanElement johnCena">
                    &#169; Copyright Team Liquid Productions
                  </span>
            </footer>
        )
    }


export default Footer
