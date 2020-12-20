import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


function Player() {
    return (
        <div className="player-container">

            <div className="song-control">
                <p>start time</p>
                <input type="range" />
                <p>End time</p>
            </div>
            
            <div className="player-control">
                <FontAwesomeIcon icon={faAngleLeft} size="2x" />
                <FontAwesomeIcon icon={faPlay} size="2x" />
                <FontAwesomeIcon icon={ faAngleRight } size="2x"/>
            </div>
         </div>
    )
}


export default Player;