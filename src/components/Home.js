import React from 'react'
import soundOff from '../assets/sound-off-icon.svg';
import soundOn from '../assets/sound-high-icon.svg';
import Slider from './Slider';
import subwaySound from '../assets/subwaySound.mp3';
import subway from '../assets/subway.jpg';
import '../style/Home.css';

function Home() {
  return (
    <div className="Home">
      <div className="top">
        <h1>ridethesubway</h1>
        <img src={soundOn} className='sound-icon'></img>
      </div>
      <img id="subway-img" src={subway}></img>
      <div className="volume-control">
        <h2>Adjust Sounds</h2>
          <Slider title="Subway Noise" sound={subwaySound}></Slider>
          <Slider title="Chatter" sound=''></Slider>
          <Slider title="Announcer" sound=''></Slider>
          <Slider title="Doors" sound=''></Slider>

      </div>
    </div>
  );
}

export default Home;
