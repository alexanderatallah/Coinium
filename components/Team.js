import CryptoJS from 'crypto-js'
import React, {Component} from "react"
import Protected from "./Protected"
import {
  BlockQuote, Cite, Deck, Fill, Fit, Heading, Image,
  Layout, Link, ListItem, List, Quote, Slide, Text,
  Appear, SlideSet
} from "spectacle"
import Input from 'material-ui/Input'
import Typography from 'material-ui/Typography'
import InputLabel from 'material-ui/Input/InputLabel'
import FormControl from 'material-ui/Form/FormControl'
import FormHelperText from 'material-ui/Form/FormHelperText'

const ENCRYPTED_TEAM = '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'

export default class Team extends Component {
  constructor(props) {
    super(props)
    this.state = {
      members: [],
      password: '',
      formFocused: false
    }
  }

  handleChange(e) {
    this.setState({
      password: e.target.value,
      formFocused: false
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    const encryptedHMAC = ENCRYPTED_TEAM.substring(0, 64),
          encryptedHTML = ENCRYPTED_TEAM.substring(64),
          decryptedHMAC = CryptoJS.HmacSHA256(encryptedHTML, CryptoJS.SHA256(this.state.password)).toString()

    if (decryptedHMAC !== encryptedHMAC) {
      alert('Bad password!');
      return;
    }

    const plainText = CryptoJS.AES.decrypt(encryptedHTML, this.state.password).toString(CryptoJS.enc.Utf8)

    this.setState({
      members: JSON.parse(plainText)
    })
  }

  renderBio(entry, i) {
    const bioStyle = {
      margin: 10,
      textAlign: "left"
    }

    return (
      <Typography key={i} style={bioStyle}>
        <strong>{entry.name}:</strong> {entry.desc}
      </Typography>
    )
  }

  renderForm() {
    const inputStyle = {
      fontSize: 20,
      width: 250, //262
      margin: "30px 0"
    }
    const helperStyle = {
      opacity: this.state.formFocused ? 0.8 : 0
    }

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <FormControl style={inputStyle}>
          <InputLabel htmlFor="password-helper">
            Enter the password
          </InputLabel>
          <Input id="password-helper"
            fullWidth
            value={this.state.password}
            onChange={this.handleChange.bind(this)}
            onFocus={() => this.setState({formFocused: true})}
            onBlur={() => this.setState({formFocused: false})} />
          <FormHelperText style={helperStyle}>
            Unlock this page with the password
          </FormHelperText> 
        </FormControl>

        <Typography type="caption">
          Email Noah Kindler or Alex Atallah for the password.
        </Typography>
      </form>
    )
  }

  render() {
    return (
      <div className="Team">
        {this.state.members.length
          ? this.state.members.map(this.renderBio.bind(this))
          : this.renderForm()}
      </div>
    )
  }
}