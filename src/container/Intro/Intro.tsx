import {BsPlayFill, BsPauseFill} from 'react-icons/bs';
import { meal } from '../../constants';
import { useRef, useState } from 'react';

import './Intro.css'; 

const Intro = () => {
  const [playVideo, setPlayVideo]= useState(false);
  const vidRef = useRef<HTMLVideoElement>(null);

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current?.pause();
    } else {
      vidRef.current?.play();
    }
  }

  return(
  <div className='app__video'>
    <video src={meal}
           ref={vidRef}
           loop
           controls={false}
           muted/>
    <div className="app__video-overlay flex__center">
      <div className="app__video-overlay_circle flex__center"
        onClick={handleVideo}>
            {playVideo ? 
              <BsPauseFill fontSize={30} color='#fff' /> :
              <BsPlayFill fontSize={30} color='#fff' />}
        </div>
    </div>
  </div>
)};

export default Intro;
