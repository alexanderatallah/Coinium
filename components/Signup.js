import React, { Component } from "react";
import { Heading } from "spectacle";
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }
  handleChange(e) {
    this.setState({
      email: e.target.value,
      emailFocused: false
    });
  }
  render() {
    const inputStyle = {
      fontSize: 20,
      width: 232
    }

    const helperStyle = {
      opacity: this.state.emailFocused ? 0.8 : 0
    }

    return (
      <div>
        {/* <Input
          type="text"
          placeholder="  Claim your username"
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          style={inputStyle} /> */}
        <FormControl style={inputStyle}>
          <InputLabel htmlFor="email-helper">
            Sign up for the token sale
          </InputLabel>
          <Input id="email-helper"
            fullWidth
            value={this.state.email}
            onChange={this.handleChange.bind(this)}
            onFocus={() => this.setState({emailFocused: true})}
            onBlur={() => this.setState({emailFocused: false})} />
          <FormHelperText style={helperStyle}>
            Enter your email
          </FormHelperText>
        </FormControl>
      </div>
    );
  }
}
