import React from "react"
import $ from "jquery"
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Icon from 'material-ui/Icon'
import Typography from 'material-ui/Typography'
import {
  BlockQuote, Cite, Deck, Fill, Fit, Heading, Image,
  Layout, Link, ListItem, List, Quote, Slide, Text,
  Appear, SlideSet
} from "spectacle"
import Signup from "./Signup"
import Devices from "./Devices"
import TokenChart from "./TokenChart"
import Logo from "./Logo"
import Team from "./Team"
import preloader from "spectacle/lib/utils/preloader"
import { theme } from "../themes/coinium/index.js"
// Require CSS
require("spectacle/lib/themes/default/index.css")
require("../themes/coinium/index.css");

const images = {
  bg: require("../assets/bg_skyline.svg"),
  logo: require("../assets/logo.png")
}

preloader(images)

export default class Presentation extends React.Component {

  // componentDidMount() {
  //   window.onhashchange = (event) => {
  //     if (location.hash == "#/mobile") {
  //       this.mobileAnim = setInterval(this.rotateDevice.bind(this), 1500)
  //     } else {
  //       clearInterval(this.mobileAnim)
  //     }
  //   }
  // }

  renderHeading(text) {
    return (
      <Heading
        caps
        size={6}
        style={{ letterSpacing: "0.05em" }}>
        {text}
      </Heading>
    )
  }

  render() {
    const skylineBgStyle = {
      backgroundImage: `url(${images.bg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom center",
      backgroundSize: "105% auto"
    }

    const iconStyle = {
      marginRight: 8
    }

    const nonSlideStyle = {
      overflowY: 'auto',
    }

    return (
      <Deck
        // autoplay
        progress="bar"
        controls={true}
        theme={theme}
        transition={["slide"]}
        transitionDuration={500} >

        <Slide style={skylineBgStyle} id="home">
          <Logo motto={true} icon={true} />
          <Signup />
        </Slide>

        <Slide id="problem">
          <Heading fit caps textColor="secondary">
            You want cryptocurrency,
          </Heading>

          <hr />

          <Heading size={8} lineHeight={1.3} textColor="tertiary">
            but
            with <a href="https://www.icoalert.com/" target="_blank">over 100 new types</a> created
            every month,
            <br/>
            you don't know which will
          </Heading>

          <hr />

          <Heading caps fit textColor="secondary">
            last the longest
          </Heading>

          <TokenChart />

        </Slide>

        <Slide bgImage={images.bg} bgDarken={0.75} id="solution">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            The Coin of Coins
          </Heading>
          <Appear fid="1">
            <Heading size={1} fit caps textColor="primary">
              Buy one Coinium...
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} fit caps textColor="tertiary">
              Get a digital coin locker in return...
            </Heading>
          </Appear>
          <Appear fid="3">
            <Text textSize="1.5em" margin="20px 0px 0px" bold textColor="primary">
              Which our experts fill with the best cryptocurrencies over time
            </Text>
          </Appear>
        </Slide>

        {/*

        <Slide bgColor="white">
          <BlockQuote textColor="secondary">
            <Quote>A nice quote</Quote>
            <Cite>Vitalik Buterin</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="white">
            How it works
          </Heading>
          <List>
            <ListItem>Purchase one Coinium to buy a "locker"</ListItem>
            <Appear><ListItem>Lockers have a specific utility, like payments or digital storage</ListItem></Appear>
            <Appear><ListItem>Our advisory team vets cryptocurrencies to put in lockers</ListItem></Appear>
            <Appear><ListItem>Your lockers get filled with these tokens over time</ListItem></Appear>
            <Appear><ListItem>You can use them whenever you want!</ListItem></Appear>
          </List>
        </Slide> */}

        <Slide align="flex-start" bgColor="primary" id="team" style={nonSlideStyle}>
          <Heading caps fit>Selection Team</Heading>
          <Fill width="100%">
            <Team />
          </Fill>
        </Slide>

        <Slide align="flex-start" bgColor="primary" id="mobile">
          <Heading size={3} textColor="secondary">
            Everywhere you'll want it
          </Heading>
          <br />
          <Fill width="100%">
            <Devices />
          </Fill>
        </Slide>

        <Slide bgColor="primary" id="signup">
          <Logo motto={false} />
          <Signup />
          <Typography align="center" style={{marginTop: 10}}>
            <Button raised disabled color="primary">
              <Icon color="contrast" style={iconStyle}>insert_drive_file</Icon>
              Whitepaper
            </Button>
            <Button raised disabled color="accent">
              <Icon color="contrast" style={iconStyle}>insert_drive_file</Icon>
              S1 Strategy
            </Button>
          </Typography>
        </Slide>
      </Deck>
    )
  }
}
