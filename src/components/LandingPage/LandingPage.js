import React, { Component } from 'react';
import BackgroundImage from '../../assets/background.png';
import './LandingPage.css';

var selectionStyle = {
   backgroundImage: `url(${BackgroundImage})`,
   backgroundSize: 'contain',
   maxWidth: '100vw',
   height: 'auto',
}

class LandingPage extends Component {
   render() {
      return (
         <div className='background' >
            <p>A simple way to remember life's special moments.</p>
            <img src={BackgroundImage} style={selectionStyle} alt="" className='img' />
         </div>
      );
   }
}

export default LandingPage;