import React, { Component } from "react"
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import { colors } from '../themes/coinium'

class Logo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  render() {
    const iconStyle = {
      width: this.props.largeIcon ? '40%': '20%',
      marginTop: this.props.largeIcon ? 0 : -150
    }

    const logoStyle = {
      fontSize: 94,
      color: colors.quarternary,
      fontFamily: "Open Sans Condensed",
      fontWeight: 700,
      position: 'relative',
      zIndex: 1,
      textShadow: '0px 3px 0px white, 0px -1px 0px rgba(0, 0, 0, 0.9)',

      // Bubble effect:
      // color: 'white',
      // textShadow: "0 1px 0 #cccccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbbbbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaaaaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15)"
    }

    const mottoStyle = {
      fontFamily: "Open Sans Condensed",
      fontSize: 24,
      fontWeight: 700,
      // textTransform: 'uppercase'
    }

    let style = this.props.style || {}
    style.position = 'relative'

    return (
      <div className="Logo" style={style}>
        {this.props.icon || this.props.largeIcon
          ? <Grid container align="center" justify="center">
              <img style={iconStyle} src={require("../assets/logo3.png")} />
            </Grid>
          : null
        }

        {this.props.name
          ? <Typography type="display3" style={logoStyle}>
              coinium
            </Typography>
          : null }

        {this.props.motto
          ? <Typography type="headline" gutterBottom style={mottoStyle}>
              Diversified Cryptocurrencies
            </Typography>
          : null
        }
      </div>
    );
  }
}

Logo.defaultProps = {
  icon: true,
  largeIcon: false,
  name: true,
  motto: true
}

export default Logo
