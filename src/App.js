import React, { useRef, useContext, useState } from "react";
import { AppContext } from './contexts/AppContext'; 
import './styles/App.scss';
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';
import NavBar from './components/NavBar';

function App() {
      const audioRef = useRef(null)
      const [time, setTime] = useState({ currentTime: 0, duration: 0, finishedPercentage: 0 })
      const { currentSong, songs, isPlaying, setCurrentSong, isVisible } = useContext(AppContext);

      const handleTimeUpdate = (e) => {
            const percent = Math.round((e.target.currentTime / e.target.duration) * 100)
            setTime({ currentTime: e.target.currentTime, duration: e.target.duration, finishedPercentage: percent })
      }
      
      const skipSong = async () => {
            const currentIndex = songs.findIndex((song) => song.id === currentSong.id);

            if (songs.length === currentIndex + 1) {
                  await setCurrentSong(songs[0])
            } else {
                  await setCurrentSong(songs[currentIndex + 1])
            }
            
            if (isPlaying) audioRef.current.play()
      }

      return (
            <div className={`App ${isVisible && "app-push"}`}>
            <NavBar/>
            <Library audioRef={ audioRef}/>
            <Song />
            <Player audioRef={audioRef} time={time} setTime={setTime} handleTimeUpdate={handleTimeUpdate} />
            <audio ref={audioRef} src={currentSong.audio} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleTimeUpdate} onEnded={skipSong}></audio>
            </div>
      
      )
}

export default App;
