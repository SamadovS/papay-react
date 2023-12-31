// @ts-nocheck
import React, { useState, Component } from "react";

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }
  changeColor = () => {
    this.setState({ color: "blue", model: "Tesla" });
  };

  componentDidMount(): void {
    console.log("ran componentDidMount");
    // runs after first render = RETRIEVE DATA FROM BACKEND SERVER
  }

  componentWillUnmount(): void {
    console.log("ran componentWillUnmount");
    // runs after component unmount
  }

  componentDidUpdate(): void {
    console.log("ran componentDidUpdate");
    // runs after first render
  }

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} - {this.state.model} - form{" "}
          {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor}>
          Change color & type
        </button>
      </div>
    );
  }
}

export default Car;
