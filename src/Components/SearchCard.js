import React from 'react'

function SearchCard({song}) {



  return (
    <div className='songCard'>
      <img src={song.image} alt='Album cover'/>
      <h3>{song.songName}</h3>
      <h4>{song.artist}</h4>
      <h4>{song.album}</h4>
      <p>{song.plays}</p>
    </div>
  )
}

export default SearchCard