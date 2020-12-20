import React, { useState } from "react";
import data from './data';
import './styles/app.scss';
import Song from './components/Song';
import Player from './components/Player';

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[2]);
  const [isPlaying, setIsPlaying] = useState(false)
  return (
        <>
        <Song currentSong={currentSong} />
        <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={ setIsPlaying }/>      
        </>
        
    )
}

export default App;
