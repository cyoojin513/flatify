import React from 'react'
import Card from './Styles/Cards.style'
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';

function LibraryCard({song, toggleFavoritedSong}) {



  return (
    <Card>
      <img src={song.image} alt='Album cover'/>
      <div id="container">
        <h3>{song.album}</h3>
        <h4>{song.songName}</h4>
        <h4>{song.artist}</h4>
        <h4 className='favorite' onClick={() => 
        toggleFavoritedSong(song.id, !song.favorited)}>
          {song.favorited ? <HiHeart cursor="pointer" color='#1dd761'/> : <HiOutlineHeart cursor="pointer"/>}
      </h4>
      </div>
    </Card>
  )
}

export default LibraryCard