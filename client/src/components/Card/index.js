import React, {Component} from "react";
import "./style.css";
import axios from "axios";

class Card extends Component {

  constructor(props) {
    super(props);
    this.addFav = this.addFav.bind(this);
  };

  addFav(event) {
    event.preventDefault();

    axios.post("/user/favorites", {
      user: this.props.username,
      name: this.props.name,
      location: this.props.location,
      star: this.props.star,
      url: this.props.url,
      image: this.props.image
    }).then(res => console.log("success!"))
    .catch(error => {
      console.log('login error: ')
      console.log(error);

    })

    // db.create()
    console.log({ Favorites: {
      user: this.props.username,
      name: this.props.name,
      location: this.props.location,
      star: this.props.star,
      url: this.props.url
    }});
  };



  render() {
    const { name, image, location, star, url } = this.props;

    return (

      <div className="card hoverable z-depth-4 center-align">
        <div className="card-image">
          <img src={image} alt={name} />
          <button className="btn-floating btn-small waves-effect waves-light blue" id="btn"><i onClick={this.addFav} className="material-icons right">add</i></button>
        </div>
        <div className="card-content">
          <a rel="noopener noreferrer" href={url} target="_blank" className="card-title">{name}</a>
          <p>{location}</p>
          <p>Star Rating: {star}</p>
        </div>
      </div>

    );
  }
}

export default Card;