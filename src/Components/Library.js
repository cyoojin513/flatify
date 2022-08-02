import React from 'react'
import LibraryCard from './LibraryCard'

function Library({songs, toggleFavoritedSong}) {
  return (
    <div>
        Library
        <div>
            Welcome, Static-User
            <div className='favorites'>
                Favorites go here:
                {songs.map(song => song.favorited ? <LibraryCard song={song} toggleFavoritedSong={toggleFavoritedSong}/>: null
                )}
            </div>
        </div>
    </div>
  )
}

export default Library