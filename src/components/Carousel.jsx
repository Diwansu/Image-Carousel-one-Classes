import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
    };
  }

  handleBackClick = () => {
    this.setState((prevState) => ({
      id: (prevState.id - 1 + images.length) % images.length,
    }));
  };

  handleForwardClick = () => {
    this.setState((prevState) => ({
      id: (prevState.id + 1) % images.length,
    }));
  };

  render() {
    const currImage = images[this.state.id];

    return (
      <div className="container">
        <div className="carousel">
          <div className="carousel-title">{currImage.title}</div>
          <div className="carousel-subtitle">{currImage.subtitle}</div>
          <img className="carousel-img" src={currImage.img} alt="" />
        </div>
        <div className="arrow arrow-back" onClick={this.handleBackClick}>
          <ArrowBackIosIcon sx={{ color: "white" }} />
        </div>
        <div className="arrow arrow-forward" onClick={this.handleForwardClick}>
          <ArrowForwardIosIcon sx={{ color: "white" }} />
        </div>
      </div>
    );
  }
}

export default Carousel;
