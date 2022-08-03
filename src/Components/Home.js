import React from 'react'
import HomeCard from './HomeCard'
import { ContentGrid } from './Styles/Grids.style'

function Home({songs, toggleFavoritedSong}) {

  const newReleases = [...songs].sort((a, b) =>Date.parse(b.releaseDate) - Date.parse(a.releaseDate))
  const firstFifteenNewReleases = newReleases.slice(0, 15)

  const popularReleases = [...songs].sort((a, b) => b.plays - a.plays)
  const firstFifteenPopular = popularReleases.slice(0, 15)

  return (
    <div className="home">
      <h1>Welcome!</h1>
      <h2 className='home-h2'>New Releases</h2>
      <ContentGrid>
          {firstFifteenNewReleases.map(song => <HomeCard key={song.id} song={song} toggleFavoritedSong={toggleFavoritedSong}/> )}
      </ContentGrid>
      <h2 className='home-h2'>Popular Releases</h2>
      <ContentGrid>
          {firstFifteenPopular.map(song => <HomeCard key={song.id} song={song} toggleFavoritedSong={toggleFavoritedSong}/>)}
      </ContentGrid>
    </div>
  )
}

export default Home