import React from 'react'
import HomeCard from './HomeCard'

function Home({songs, toggleFavoritedSong}) {

  const newReleases = [...songs].sort((a, b) =>Date.parse(b.releaseDate) - Date.parse(a.releaseDate))

  const popularReleases = [...songs].sort((a, b) => b.plays - a.plays)

  return (
    <div className="home">
        Home
        <div className='newReleases'>
            New Releases
            {newReleases.map(song => <HomeCard key={song.id} song={song} toggleFavoritedSong={toggleFavoritedSong}/> )}
        </div>
        <div className='popularReleases'>
            Popular Releases
            {popularReleases.map(song => <HomeCard key={song.id} song={song} toggleFavoritedSong={toggleFavoritedSong}/>)}
        </div>
    </div>
  )
}

export default Home