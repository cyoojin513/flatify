import React from 'react'
import Card from './Shared/Card'

function HomeCard({song, toggleFavoritedSong}) {

  return (
    <Card>
      <div>
        <img src={song.image} alt='Album cover'/>
        <h3>{song.songName}</h3>
        <h4>{song.artist}</h4>
        <h4>{song.album}</h4>
        <p>{song.plays}</p>
        <button className='favorite' onClick={() => toggleFavoritedSong(song.id, !song.favorited)}>{song.favorited ? "Full Heart": "Empty Heart"}</button>
      </div>
    </Card>
  )
}

export default HomeCard