import React from "react";
import "./style.css";

function Card(props) {
const {name, image, location, star, url} = props;
    return (
    
<div className="col s3">
  <div className="card hoverable z-depth-2 center-align">
    <div className="card-image">
      <img src={image} alt={name} />
       <button className="btn-small waves-effect waves-light blue">save</button>
    </div>
    <div className="card-content">
    <a rel="noopener noreferrer" href={url} target="_blank" className="card-title">{name}</a> 
      <p>{location}</p>
      <p>Rating: {star}</p>
    </div>
  </div>
</div>

  );
}


export default Card;