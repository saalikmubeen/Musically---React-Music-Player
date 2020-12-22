import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

function LibrarySong({ song, audioRef }) {
    const { setSongs, songs, setCurrentSong, isPlaying } = useContext(AppContext);

    const handleClick = async () => {
        const updatedSongs = songs.map((individualSong) => {
            if (song.id === individualSong.id) {
                return {...individualSong, active: true}
            } else {
                return {...individualSong, active: false}
            }
        })

        await setSongs(updatedSongs)
        await setCurrentSong(song)
        if (isPlaying) audioRef.current.play();
    }

    return (
        <div className={`library-song ${song.active && "active-song"}`} onClick={handleClick}>
            <img src={song.cover} alt={ song.name }/>
            <div className="library-song--info">
                <h4>{ song.name }</h4>
                <h5>{ song.artist }</h5>
            </div>
        </div>
    )
}

export default LibrarySong;