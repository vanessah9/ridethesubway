import React from 'react'
import ReactPlayer from 'react-player'
import '../style/Home.css';

function Slider(props) {
  return (
    <div className="Slider">
      <h2 className="sliderTitle">{props.title}</h2>
      <ReactPlayer className="sliderAudio" 
      url={props.sound}
      width='100%'
      height='100%'
      ></ReactPlayer>
    </div>
  );
}

export default Slider;
