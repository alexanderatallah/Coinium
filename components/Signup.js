import React, { Component } from "react";
import { Heading } from "spectacle";
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import InputLabel from 'material-ui/Input/InputLabel';
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';

const SIGNUP_URL = "http://eepurl.com/c2nfCH"

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

  handleSubscribeClick(e) {
    window.location = SIGNUP_URL
  }

  render() {
    const inputStyle = {
      fontSize: 20,
      width: 250 //262
    }

    const buttonStyle = {
      fontSize: 15,
      lineHeight: "1.2em",
      width: 262
    }

    const helperStyle = {
      opacity: this.state.emailFocused ? 0.8 : 0
    }

    return (
      <div>
        <Button raised color="primary" style={buttonStyle}
          onClick={this.handleSubscribeClick.bind(this)}>
          Sign up for the token sale
        </Button>
        {/* <FormControl style={inputStyle}>
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
        </FormControl> */}
      </div>
    );
  }
}
