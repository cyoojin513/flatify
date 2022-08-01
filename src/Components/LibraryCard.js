import React from 'react'

function LibraryCard({song}) {



  return (
    <div className='songCard'>
      <img src={song.image} alt='Album cover image'/>
      <h3>{song.songName}</h3>
      <h4>{song.artist}</h4>
      <p>{song.plays}</p>
    </div>
  )
}

export default LibraryCards