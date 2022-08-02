import React from 'react'

function HomeCard({song, toggleFavoritedSong}) {



  return (
    <div className='songCard'>
      <img src={song.image} alt='Album cover'/>
      <h3>{song.songName}</h3>
      <h4>{song.artist}</h4>
      <h4>{song.album}</h4>
      <p>{song.plays}</p>
      <button className='favorite' onClick={() => toggleFavoritedSong(song.id, !song.favorited)}>{song.favorited ? "Full Heart": "Empty Heart"}</button>
    </div>
  )
}

export default HomeCard