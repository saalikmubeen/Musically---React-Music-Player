import React, { useState } from "react";
import data from './data';
import './styles/app.scss';
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false)
  return (
        <>
        <Library songs={ songs }/>
        <Song currentSong={currentSong} />
        <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={ setIsPlaying }/>      
        </>
        
    )
}

export default App;
