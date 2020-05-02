import React from "react";
import "./style.css";

function Card(props) {
const {name, image, location, star, url} = props;
    return (
 
  <div className="card hoverable z-depth-4 center-align">
    <div className="card-image">
      <img src={image} alt={name} />
       <button className="btn-floating btn-small waves-effect waves-light blue" id="btn"><i className="material-icons right">add</i></button>
    </div>
    <div className="card-content">
    <a rel="noopener noreferrer" href={url} target="_blank" className="card-title">{name}</a> 
      <p>{location}</p>
      <p>Star Rating: {star}</p>
    </div>
  </div>

  );
}


export default Card;