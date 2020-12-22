import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

function LibrarySong({ song, audioRef }) {
    const { setCurrentSong, isPlaying } = useContext(AppContext);

    const handleClick = async () => {
        
        await setCurrentSong(song)
        if (isPlaying) audioRef.current.play();
    }

    return (
        <div className={`library-song ${song.active && "active-song"}`} onClick={handleClick}>
            <img src={song.cover} alt={ song.name }/>
            <div className="library-song--info">
                <h3>{ song.name }</h3>
                <h4>{ song.artist }</h4>
            </div>
        </div>
    )
}

export default LibrarySong;