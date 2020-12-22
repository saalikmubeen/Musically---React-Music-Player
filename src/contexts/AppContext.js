import React, { createContext, useState, useEffect } from 'react';
import data from '../data';


const AppContext = createContext();

const AppProvider = (props) => {
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVisible, setIsVisible] = useState(false)

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
        <AppContext.Provider value={{ songs, setSongs, currentSong, setCurrentSong, isPlaying, setIsPlaying, isVisible, setIsVisible }}>
            {props.children}
        </AppContext.Provider>
    )
}


export { AppContext, AppProvider };