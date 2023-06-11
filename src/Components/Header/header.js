import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Home from '../Home/home'
import Homecard from '../Home2/homecard'
import Offering from '../Offering/Offering'

import Comingsoon from '../Comingsoon/comingsoon'


export class Headers extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <Home/>
        <Comingsoon/>
        {/* <Homecard/> */}
        <br/>

      {/* <Offering/> */}

      </div>
    )
  }
}

export default Headers;