import React, { useContext } from 'react';
import LibrarySong from './LibrarySong';
import { AppContext } from '../contexts/AppContext';


const Library = ({ audioRef }) => {
    const { songs, isVisible } = useContext(AppContext);
    return (
        <div className={`library ${isVisible && "show-library"}`}>
            <h1>Library</h1>
            <div className="library-songs">
                {songs.map((song) => <LibrarySong song={song} key={song.id} audioRef={ audioRef }/>)}
            </div>
        </div>
    )
}


export default Library;