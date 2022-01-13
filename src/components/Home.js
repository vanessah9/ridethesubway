import React, { useState } from 'react';
import soundOff from '../assets/sound-off-icon.svg';
import soundOn from '../assets/sound-high-icon.svg';
import info from '../assets/info.svg';
import MySlider from './Slider';
import subwaySound from '../assets/subway.m4a';
import announcerSound from '../assets/announcer.mp3';
import music from '../assets/music.mp3';
import subway from '../assets/subway.jpg';
import '../style/Home.css';

// https://www.youtube.com/watch?v=r1_Ep-vp24I
// https://www.youtube.com/watch?v=CsvqBYrlNF4

function Home() {
  const [show, setShow] = useState(false);

  return (
    <div className="Home">
      <div className="top">
        <div className='leftTop'>
          <h1>ridethesubway</h1>
          <img src={info} className='info-icon' onClick={() => setShow(!show)}></img>

        </div>
        <img src={soundOn} className='sound-icon'></img>
      </div>
      {show && <pre className='info-text'>
            created/designed by vanessa hoang<br></br>
            inspired by <a href='http://www.soundsofhome.ca/' target="_blank">soundsofhome</a></pre>}
      
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
