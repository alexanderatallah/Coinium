import React from "react"
import Presentation from "./Presentation"
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import { colors } from "../themes/coinium"
require("../themes/coinium/index.css")

const FOOTER_WIDTH = 60
const MODES = {
  PRESENTATION: 0,
  HELP: 1
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: MODES.PRESENTATION
    };
  }

  goToSlide(slideName) {
    this.setState({mode: MODES.PRESENTATION}, () => {
      location.hash = `/${slideName}`
    })
  }

  renderHelp() {
    const style = {
      height: '100%',
      backgroundColor: colors.primary
    }
    const creditsStyle = {
      opacity: 0.8
    }

    return (
      <Grid container direction="column" justify="center" align="center" style={style}>
        <Typography type="caption" style={creditsStyle}>
          Copyright 2017 Coinium, Inc
          <hr />
          Contact us: <a href="mailto:support@coinium.com">support@coinium.com</a>
          <hr />
          {"Some icons based on the work of "}
          <a href="http://www.freepik.com" title="Freepik">Freepik</a>
          {" from "}
          <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          {" are licensed by "}
          <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
        </Typography>
      </Grid>
    )
  }

  renderCurrentPage() {
    switch (this.state.mode) {
      case MODES.PRESENTATION:
        return <Presentation />
      case MODES.HELP:
        return this.renderHelp()
      default:
        return (
          <Typography>Please reload</Typography>
        )
    }
  }

  render() {
    const mainStyle = {
      position: 'fixed',
      top: 0,
      right: FOOTER_WIDTH,
      bottom: 0,
      left: 0,
      boxShadow: '2px 0px 4px rgba(0,0,0,0.4)',
      zIndex: 2,
      overflow: 'hidden'
    }

    const navStyle = {
      background: colors.secondary,
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 'auto',
      width: FOOTER_WIDTH,
      zIndex: 1
    }

    const onHelpClick = () => {
      const mode = this.state.mode == MODES.HELP
        ? MODES.PRESENTATION
        : MODES.HELP
      this.setState({mode})
    }

    return (
      <Grid container className="App">
        <Grid item style={mainStyle}>
          {this.renderCurrentPage()}
        </Grid>

        <Grid item container direction="column"
              justify="space-between" align="center" spacing={0}
              style={navStyle}>
          <Grid>
            <IconButton onClick={this.goToSlide.bind(this, "home")}>
              <Icon color="contrast">home</Icon>
            </IconButton>
            <IconButton onClick={this.goToSlide.bind(this, "problem")}>
              <Icon color="contrast">info_outline</Icon>
            </IconButton>
            <IconButton onClick={this.goToSlide.bind(this, "team")}>
              <Icon color="contrast">people</Icon>
            </IconButton>
            <IconButton onClick={this.goToSlide.bind(this, "mobile")}>
              <Icon color="contrast">phone_iphone</Icon>
            </IconButton>
            <IconButton onClick={this.goToSlide.bind(this, "signup")}>
              <Icon color="contrast">insert_drive_file</Icon>
            </IconButton>
          </Grid>

          <Grid>
            <IconButton onClick={onHelpClick}>
              <Icon color="contrast">help_outline</Icon>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}