import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../contexts/AppContext';


function Player({ audioRef, time, setTime, handleTimeUpdate }) {
    const { isPlaying, setIsPlaying } = useContext(AppContext);

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


    return (
        <div className="player-container">

            <div className="song-control">
                <p>{ getTime(time.currentTime) }</p>
                <input type="range" min={0} max={time.duration} value={time.currentTime} onChange={ handleSliderChange }/>
                <p>{ getTime(time.duration) }</p>
            </div>
            
            <div className="player-control">
                <FontAwesomeIcon icon={faAngleLeft} size="2x" />
                <FontAwesomeIcon icon={ isPlaying ? faPause : faPlay } size="2x" onClick={ handlePlayBtnClick }/>
                <FontAwesomeIcon icon={ faAngleRight } size="2x"/>
            </div>

        </div>
    )
}


export default Player;