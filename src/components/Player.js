import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../contexts/AppContext';


function Player({ audioRef, time, setTime }) {
    const { isPlaying, setIsPlaying, songs, setSongs, currentSong, setCurrentSong } = useContext(AppContext);

    const handlePlayBtnClick = () => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying)
    }

    const handleSliderChange = (e) => {
        setTime({ ...time, currentTime: e.target.value })
        audioRef.current.currentTime = e.target.value
    }

    function getTime(time) {
        if(!isNaN(time)) {
            return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        }
    }

    function skipForward() {
        const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        
        if (songs.length === currentIndex + 1) {
                setCurrentSong(songs[0])
        } else {
                setCurrentSong(songs[currentIndex + 1])
        }
            
        if (isPlaying) {
            audioRef.current.play().then(() => audioRef.current.play())
        }
        
    }


    function skipBackward() {
        const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        
        if (currentIndex === 0) {
                setCurrentSong(songs[songs.length - 1])
        } else {
                setCurrentSong(songs[currentIndex - 1])
        }
            
        if (isPlaying) {
            audioRef.current.play().then(() => audioRef.current.play())
        }
        
    }

    useEffect(() => {
        const updatedSongs = songs.map((song) => {
            if (song.id === currentSong.id) {
                return { ...song, active: true }
            } else {
                return { ...song, active: false }
            }
        });
        setSongs(updatedSongs)
    }, [currentSong])

    return (
        <div className="player-container">

            <div className="song-control">
                <p>{ getTime(time.currentTime) }</p>
                <input type="range" min={0} max={time.duration || 0} value={time.currentTime} onChange={ handleSliderChange }/>
                <p>{ getTime(time.duration) }</p>
            </div>
            
            <div className="player-control">
                <FontAwesomeIcon icon={faAngleLeft} size="2x"  onClick={skipBackward}/>
                <FontAwesomeIcon icon={ isPlaying ? faPause : faPlay } size="2x" onClick={ handlePlayBtnClick }/>
                <FontAwesomeIcon icon={ faAngleRight } size="2x" onClick={skipForward}/>
            </div>

        </div>
    )
}


export default Player;