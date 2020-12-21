import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';


function Song() {
    const { currentSong, isPlaying } = useContext(AppContext)
    return (
        <div className="song-container">
            <img src={currentSong.cover} alt={currentSong.name} className={`${isPlaying && "animate-cover"}`}/>
            <h1>{ currentSong.name }</h1>
            <h3>{ currentSong.artist }</h3>
        </div>
    )
}

export default Song;