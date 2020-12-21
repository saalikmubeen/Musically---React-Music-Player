import React, { createContext, useState } from 'react';
import data from '../data';


const AppContext = createContext();

const AppProvider = (props) => {
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVisible, setIsVisible] = useState(false)
    return (
        <AppContext.Provider value={{ songs, setSongs, currentSong, setCurrentSong, isPlaying, setIsPlaying, isVisible, setIsVisible }}>
            {props.children}
        </AppContext.Provider>
    )
}


export { AppContext, AppProvider };