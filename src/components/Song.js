import React from 'react';


function Song({ currentSong }) {
    return (
        <div className="song-container">
            <img src={currentSong.cover} alt={ currentSong.name }/>
            <h1>{ currentSong.name }</h1>
            <h3>{ currentSong.artist }</h3>
        </div>
    )
}

export default Song;