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
import Logo from "./Logo"
import preloader from "spectacle/lib/utils/preloader"
import { theme } from "../themes/coinium/index.js"
// Require CSS
require("spectacle/lib/themes/default/index.css")
require("../themes/coinium/index.css");

const images = {
  bg: require("../assets/bg_skyline.svg"),
  logo: require("../assets/logo.png"),
  logoAlexa: require("../assets/logo-alexa.svg"),
  logoImdb: require("../assets/logo-IMDb.svg"),
  logoFormidable: require("../assets/logo-formidable.svg"),
  logoMicrosoft: require("../assets/logo-microsoft.svg"),
  logoZillow: require("../assets/logo-zillow.svg"),
  logoGalvanize: require("../assets/logo-galvanize.svg"),
  logoAppSheet: require("../assets/logo-appsheet.svg"),
  logoGoDaddy: require("../assets/logo-godaddy.svg"),
  logoNpm: require("../assets/logo-npm.svg"),
  logoSitepen: require("../assets/logo-sitepen.svg"),
  logoIndeed: require("../assets/logo-indeed.png"),
  logoOpenDoor: require("../assets/logo-opendoor.svg"),
  logoSheCodesNow: require("../assets/logo-shecodesnow.png"),
  logoSendGrid: require("../assets/logo-sendgrid.svg"),
  logoTwitter: require("../assets/logo-twitter.svg"),
  logoUnbounce: require("../assets/logo-unbounce.png")
}

preloader(images)

export default class Presentation extends React.Component {

  componentDidMount() {
    window.onhashchange = (event) => {
      if (location.hash == "#/mobile") {
        this.mobileAnim = setInterval(this.rotateDevice.bind(this), 1500)
      } else {
        clearInterval(this.mobileAnim)
      }
    }
  }

  rotateDevice() {
    const $el = $(this.phoneEl)
    if ($el.hasClass('mac')) {
      $el.removeClass('mac').addClass('ipad')
    } else if ($el.hasClass('ipad')) {
      $el.removeClass('ipad').addClass('iphone')
    } else if ($el.hasClass('iphone')) {
      $el.removeClass('iphone').addClass('mac')
    }
  }

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
        
        <Slide align="flex-start" bgColor="primary" id="mobile">
          <Heading size={3} textColor="secondary">
            Everywhere you'll want it
          </Heading>
          <br />
          <Fill width="100%">
            <div className='pca-hold pca-anim mac' ref={(e) => this.phoneEl = e}>
              <div className='pca-anim pca-main' style={{position: 'relative'}}>
                <Logo largeIcon={true} motto={false} name={false}
                  style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)'}} />
                <div className='pca-anim pca-inner'>
                </div>
              </div>
              <div className='pca-anim pca-sub'>
              <div className='pca-anim pca-top'></div>
              <div className='pca-anim pca-mid'>
              <div className='pca-anim pca-part'></div>
              </div>
              <div className='pca-anim pca-bot'></div>
              </div>
            </div>
          </Fill>
        </Slide>

        <Slide bgColor="primary" id="team">
          <Heading caps fit>Selection Team</Heading>
          <Layout>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                First person
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Second person
              </Heading>
            </Fill>
          </Layout>
        </Slide>  

        <Slide bgColor="primary" id="signup">
          <Logo motto={false} />
          <Grid>
            <Typography>
              Upcoming Token Sales
            </Typography>
          </Grid>
          <Signup />
          <Typography align="center" style={{marginTop: 10}}>
            <Button raised color="primary">
              <Icon color="contrast" style={iconStyle}>insert_drive_file</Icon>
              Whitepaper
            </Button>
            <Button raised color="accent">
              <Icon color="contrast" style={iconStyle}>insert_drive_file</Icon>
              S1 Strategy
            </Button>
          </Typography>
        </Slide>
      </Deck>
    )
  }
}
