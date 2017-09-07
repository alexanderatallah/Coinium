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
import Logo from "./Logo"
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

    const bioStyle = {
      margin: 10,
      textAlign: "left"
    }

    const nonSlideStyle = {
      overflowY: 'auto',
      alignItems: 'flex-start'
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

        <Slide bgImage={images.bg} bgDarken={0.75} id="info">
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

        <Slide bgColor="primary" id="team" style={nonSlideStyle}>
          <Heading caps fit>Selection Team</Heading>
          <Layout>
            <Fill>
              <Typography style={bioStyle}>
                <strong>Vinny Lingham:</strong> Founder/CEO of Civic.  Civic had one of the largest and most successful offerings.  Vinny is also a frequent speaker on blockchain technologies and industry trends.  He was previously the founder of Gyft (acq by FirstData) and Yola.  Vinny is based in silicon valley.
              </Typography>
            </Fill>
            <Fill>
              <Typography style={bioStyle}>
                <strong>Noah Kindler:</strong> Noah was VP Technology/Operations at Avira, the world’s second largest consumer security company with 300m+ users.  Noah has a BS in Computer Science from Stanford University, an MBA (with distinction) from Harvard Business School and was a consultant at McKinsey & Company.  Noah has founded companies accepted into YCombinator and StartX.  Noah is based in Silicon Valley.
              </Typography>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Typography style={bioStyle}>
                <strong>George Li:</strong> George is the Founder/CEO of WeTrust.io, a successful identity token company.  He was previously the founder of StitchFix and has a Masters degree from Stanford.  He has founded a company previously accepted by StartX
              </Typography>
            </Fill>
            <Fill>
              <Typography style={bioStyle}>
                <strong>Nigel Eccles:</strong> Nigel is the founder/CEO of FanDuel, a unicorn start-up that has raised over $400m.  Previously, Nigel was founder/CEO of a Hubdub, a prediction market and worked at McKinsey & Company and BetFair.
              </Typography>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Typography style={bioStyle}>
                <strong>Katina Stefanova:</strong> Founder/CEO of Marto Capital, a hedge fund with over $300m under management.  Previously, she was on the management committee of Bridgewater Associates, the world’s largest hedge fund with over $150B under management.  She has an MBA from Harvard Business School.
              </Typography>
            </Fill>
            <Fill>
              <Typography style={bioStyle}>
                <strong>Sid Singh:</strong> COO at StartX, the Stanford-affiliated accelerator for entrepreneurs.  Previously, he led development of innovative fintech products at Citi as a VP.  He has a masters degree from Stanford Business School.
              </Typography>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Typography style={bioStyle}>
                <strong>Lawrence Chan:</strong> Managing Director at Accenture.  Formerly a partner at McKinsey & Company.
              </Typography>
            </Fill>
            <Fill>
            </Fill>
          </Layout>
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
