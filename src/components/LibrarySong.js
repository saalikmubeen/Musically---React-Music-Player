import React from 'react';


function LibrarySong({ song }) {
    return (
        <div className={`library-song ${song.active && "active-song"}`}>
            <img src={song.cover} alt={ song.name }/>
            <div className="library-song--info">
                <h4>{ song.name }</h4>
                <h5>{ song.artist }</h5>
            </div>
        </div>
    )
}

export default LibrarySong;