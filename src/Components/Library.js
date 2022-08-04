import React from 'react'
import LibraryCard from './LibraryCard'
import { ContentGrid } from './Styles/Grids.style'
import LibraryHeader from './Styles/Library.style'

function Library({songs, toggleFavoritedSong}) {
  return (
    <div>
      <LibraryHeader>
        <h2>Welcome, Static-User</h2>
      </LibraryHeader>
      <ContentGrid>
          {songs.map(song => song.favorited ? <LibraryCard song={song} toggleFavoritedSong={toggleFavoritedSong}/>: null
          )}
      </ContentGrid>
    </div>
  )
}

export default Library