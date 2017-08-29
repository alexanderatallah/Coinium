import React, { Component } from "react";
import { Heading } from "spectacle";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    const buttonStyle = {
      padding: 20,
      background: "black",
      minWidth: 300,
      marginTop: 20,
      textTransform: "uppercase",
      border: "none",
      color: "white",
      outline: "none",
      fontWeight: "bold",
      fontSize: "1em"
    };
    return (
      <div>
        <Heading fit size={5} textColor="black">
          The button has been clicked {this.state.count} times
        </Heading>
          <button style={buttonStyle} type="button" onClick={this.handleClick.bind(this)}>Click Me</button>
      </div>
    );
  }
}
