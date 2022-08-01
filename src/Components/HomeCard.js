import React from 'react'

function HomeCard({release}) {

  return (
    <div className='songCard'>
      <img src={release.image} alt='Album cover'/>
      <h3>{release.songName}</h3>
      <h4>{release.artist}</h4>
      <p>{release.plays}</p>
    </div>
  )
}

export default HomeCard