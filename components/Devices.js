import React, { Component } from "react"
import Logo from "./Logo"
require("./Devices.css")

const DEVICES = {
  IPHONE: 'iphone',
  IPAD: 'ipad',
  MAC: 'mac'
}

class Devices extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentDevice: props.device
    };
  }

  componentDidMount() {
    this.mobileAnim = setInterval(this.rotateDevice.bind(this), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.mobileAnim)
  }

  rotateDevice() {
    const rotation = [
      DEVICES.IPHONE, DEVICES.IPAD, DEVICES.MAC, DEVICES.IPHONE
    ]
    const idx = rotation.indexOf(this.state.currentDevice)
    this.setState({
      currentDevice: rotation[idx + 1]
    })
  }

  render() {

    return (
      <div className="Devices">
        <div className={'pca-hold pca-anim ' + this.state.currentDevice}>
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
      </div>
    );
  }
}

Devices.defaultProps = {
  device: DEVICES.IPHONE
}

export default Devices
