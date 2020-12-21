import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

function LibrarySong({ song, audioRef }) {
    const { setSongs, songs, setCurrentSong, setIsPlaying } = useContext(AppContext);
    const handleClick = () => {
        const updatedSongs = songs.map((individualSong) => {
            if (song.id === individualSong.id) {
                return {...individualSong, active: true}
            } else {
                return {...individualSong, active: false}
            }
        })

        setSongs(updatedSongs)
        setCurrentSong(song)
        audioRef.current.play().then((audio) => audioRef.current.play())
        setIsPlaying(true)
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