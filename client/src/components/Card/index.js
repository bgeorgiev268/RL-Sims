import React from "react";
import "./style.css";

function Card(props) {
const {name, image, location, star, url} = props;
    return (
    // <div classNameName="card">
    //   <div classNameName="img-container">
    //     <img alt={name} src={image} />
    //   </div>
    //   <div classNameName="content">
    //     <ul>
    //       <li>
    //         <strong></strong> {name}
    //       </li>
    //       <li>
    //         <strong>Location:</strong> {location}
    //       </li>
    //       <li>
    //         <strong>Rating:</strong> {star}
    //       </li>
    //       <li>
    //         <strong>Url:</strong><a rel="noopener noreferrer" href={url} target="_blank">Link</a>
    //       </li>
    //     </ul>
    //   </div>
    //      </div>
<a rel="noopener noreferrer" href={url} target="_blank">
<div className="col s2">
  <div className="card">
    <div className="card-image">
      <img src={image} alt={name} />
       <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">favorite bord</i></a>
    </div>
    <div className="card-content">
    <span className="card-title">{name}</span> 
      <p>{location}</p>
      <p>Rating: {star}</p>
    </div>
  </div>
</div>

</a>
  );
}


export default Card;