import React, { Component } from "react";
import API from "../utils/API";

class RandomDogImg extends Component {
  state = {
    currentImg: "",
    count: 0,
  };
  style={
      image:{
          height: "400px",
          maxWidth:"40%"
      }
  }
  componentDidMount() {
    this.randomDog();
  }
  randomDog() {
    const query = "breeds/image/random";
    API.search(query).then((res) =>
      this.setState({ currentImg: res.data.message })
    );
  }

  handleThumbsUpClick = () => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    console.log(randomNumber)
    if (randomNumber === 3) {
      this.setState({ count: this.state.count + 1 });
    }
    this.randomDog();
  };

  handleThumbsDownClick = () => {
    this.randomDog();
  };
  render() {
    return (
      <div className="text-center">
        {this.state.currentImg && <img src={this.state.currentImg} alt="Pup" />}
        {this.state.currentImg && (
          <div className="row">
            <div className="col">
              <button
                className="btn btn-success"
                onClick={this.handleThumbsUpClick}
              >
                Thumbs Up
              </button>
              <button
                className="btn btn-danger"
                onClick={this.handleThumbsDownClick}
              >
                Thumbs Down
              </button>
            </div>
          </div>
        )}
        {this.state.count > 0 && (
          <div className="row">
            <div className="col">
              You currently have {this.state.count} dog friends!
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default RandomDogImg;
