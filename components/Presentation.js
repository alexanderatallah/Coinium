import React from "react"
import $ from "jquery"
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'
import {
  BlockQuote, Cite, Deck, Fill, Fit, Heading, Image,
  Layout, Link, ListItem, List, Quote, Slide, Text,
  Appear, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table
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
  // renderWifi() {
  //   return (
  //     <Slide id="wifi" bgColor="white">
  //       <Heading size={2}>WiFi</Heading>
  //       <Layout>
  //         <Fill>
  //           <Text>Network</Text>
  //           <Text>Foundry</Text>
  //         </Fill>
  //         <Fill>
  //           <Text>Password</Text>
  //           <Text>foundry98103</Text>
  //         </Fill>
  //       </Layout>
  //       <Text style={{ marginBottom: 0 }}>
  //         <Link href="https://twitter.com/seattlejs">
  //           <Image
  //             height="1.5em"
  //             src={images.logoTwitter}
  //             style={{ verticalAlign: "middle" }}
  //           />
  //           @SeattleJS
  //         </Link>
  //       </Text>
  //       <Text style={{ marginTop: 0, marginBottom: "3em" }}>
  //         <Link href="https://twitter.com/hashtag/SeattleJSConf?src=hash">
  //           <Image
  //             height="1.5em"
  //             src={images.logoTwitter}
  //             style={{ verticalAlign: "middle" }}
  //           />
  //           #SeattleJSConf
  //         </Link>
  //       </Text>
  //     </Slide>
  //   )
  // }

  render() {
    const skylineBg = {
      backgroundImage: `url(${images.bg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom center",
      backgroundSize: "105% auto"
    }

    const sponsor = {
      display: "block",
      marginBottom: "1.5em"
    }

    return (
      <Deck
        // autoplay
        progress="bar"
        controls={true}
        theme={theme}
        transition={["slide"]}
        transitionDuration={500}
      >
        <Slide style={skylineBg} id="home">
          <Logo motto={true} icon={false} />
          <Signup />
        </Slide>

        <Slide bgImage={images.bg} bgDarken={0.75} id="info">
          <Heading size={1} fit textColor="primary">
            Buy tokens
          </Heading>
          <Appear fid="1">
            <Heading size={1} fit textColor="tertiary">
              of the same utility
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} fit textColor="primary">
              and write a bit more here...
            </Heading>
          </Appear>
        </Slide>

        <Slide bgColor="black">
          <BlockQuote>
            <Quote>A nice quote</Quote>
            <Cite>Vitalik Buterin</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgColor="secondary" textColor="primary">
          <List>
            <ListItem>Feature 1</ListItem>
            <Appear><ListItem>Feature 2</ListItem></Appear>
            <Appear><ListItem>Feature 3</ListItem></Appear>
            <Appear><ListItem>Feature 4</ListItem></Appear>
            <Appear><ListItem>And...</ListItem></Appear>
          </List>
        </Slide>
        
        <Slide align="flex-start" bgColor="primary" id="mobile">
          <Heading size={3} textColor="secondary">
            Everywhere you'd want it
          </Heading>
          <br />
          <Fill width="100%">
            <div className='pca-hold mac' ref={(e) => this.phoneEl = e}>
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
          <Signup />
          <Button raised color="primary">
            <Icon color="contrast">insert_drive_file</Icon>
            Whitepaper
          </Button>
          <Button raised color="accent">
            <Icon color="contrast">insert_drive_file</Icon>
            S1 Strategy
          </Button>
        </Slide>
        {/* <Slide bgColor="primary">
          <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
            Upcoming Token Baskets
          </Heading>
          <Layout>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem/>
                  <TableHeaderItem>2011</TableHeaderItem>
                  <TableHeaderItem>2013</TableHeaderItem>
                  <TableHeaderItem>2015</TableHeaderItem>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableItem>None</TableItem>
                  <TableItem>61.8%</TableItem>
                  <TableItem>39.6%</TableItem>
                  <TableItem>35.0%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Pineapple</TableItem>
                  <TableItem>28.3%</TableItem>
                  <TableItem>54.5%</TableItem>
                  <TableItem>61.5%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Pepperoni</TableItem>
                  <TableItem/>
                  <TableItem>50.2%</TableItem>
                  <TableItem>77.2%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Olives</TableItem>
                  <TableItem/>
                  <TableItem>24.9%</TableItem>
                  <TableItem>55.9%</TableItem>
                </TableRow>
              </TableBody>
            </Table>
          </Layout>
        </Slide> */}
      </Deck>
    )
  }
}
