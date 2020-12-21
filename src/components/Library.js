import React from 'react';
import LibrarySong from './LibrarySong';


const Library = ({ songs }) => {
    return (
        <div className="library">
            <h1>Library</h1>
            <div className="library-songs">
                {songs.map((song) => <LibrarySong song={song} key={ song.id }/>)}
            </div>
        </div>
    )
}


export default Library;