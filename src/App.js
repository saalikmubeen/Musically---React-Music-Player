import React, { useRef, useContext, useState } from "react";
import { AppContext } from './contexts/AppContext'; 
import './styles/app.scss';
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';
import NavBar from './components/NavBar';

function App() {
  const audioRef = useRef(null)
  const [time, setTime] = useState({ currentTime: 0, duration: 0 })
  const { currentSong } = useContext(AppContext);

  const handleTimeUpdate = (e) => {
        setTime({ currentTime: e.target.currentTime, duration: e.target.duration })
  }
  
  return (
        <>
        <NavBar/>
        <Library audioRef={ audioRef}/>
        <Song />
        <Player audioRef={audioRef} time={time} setTime={setTime} handleTimeUpdate={handleTimeUpdate} />
        <audio ref={audioRef} src={currentSong.audio} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleTimeUpdate}></audio>
        </>
        
    )
}

export default App;
