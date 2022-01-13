import React from 'react'
import soundOff from '../assets/sound-off-icon.svg';
import soundOn from '../assets/sound-high-icon.svg';
import MySlider from './Slider';
import subwaySound from '../assets/subwaySound.mp3';
import announcerSound from '../assets/announcer.mp3';
import music from '../assets/music.mp3';
import subway from '../assets/subway.jpg';
import '../style/Home.css';

// https://www.youtube.com/watch?v=r1_Ep-vp24I

function Home() {
  return (
    <div className="Home">
      <div className="top">
        <h1>ridethesubway</h1>
        <div></div>
        <img src={soundOn} className='sound-icon'></img>
      </div>
      <img id="subway-img" src={subway}></img>
      <div className="volume-control">
        <h2>Adjust Sounds</h2>
          <div>
            <MySlider 
              title="Subway Noise" 
              sound={subwaySound}
              id="subwaySound"
              ></MySlider>
          </div>
          <div>
            <MySlider title="Chatter" sound=''></MySlider>
          </div>
          <div>
            <MySlider 
              title="Announcer" 
              sound={announcerSound}
              id="announcerSound">
            </MySlider>
          </div>
          <div>
            <MySlider 
              title="Music" 
              sound={music}
              id="music">
            </MySlider>
          </div>

      </div>
    </div>
  );
}

export default Home;
