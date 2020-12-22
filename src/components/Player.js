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

    async function skipForward() {
        const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        
        if (songs.length === currentIndex + 1) {
                await setCurrentSong(songs[0])
        } else {
                await setCurrentSong(songs[currentIndex + 1])
        }
            
        if (isPlaying) audioRef.current.play()
        
    }


    async function skipBackward() {
        const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        
        if (currentIndex === 0) {
                await setCurrentSong(songs[songs.length - 1])
        } else {
                await setCurrentSong(songs[currentIndex - 1])
        }
            
        if (isPlaying) audioRef.current.play()
        
    }

    return (
        <div className="player-container">

            <div className="song-control">
                <p>{getTime(time.currentTime)}</p>

                <div className="track" style={{ background: `linear-gradient(to right , ${currentSong.color[0]}, ${currentSong.color[1]})` }}>
                    <input type="range" min={0} max={time.duration || 0} value={time.currentTime} onChange={handleSliderChange} />
                    <div className="animate-track" style={{transform: `translateX(${time.finishedPercentage}%)`}}></div>
                </div>

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