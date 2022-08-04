import React from 'react'
import HomeCard from './HomeCard'
import { ContentGrid } from './Styles/Grids.style'

function Home({songs, toggleFavoritedSong}) {

  const newReleases = [...songs].sort((a, b) =>Date.parse(b.releaseDate) - Date.parse(a.releaseDate))
  const firstFifteenNewReleases = newReleases.slice(0, 15)

  const popularReleases = [...songs].sort((a, b) => b.plays - a.plays)
  const firstFifteenPopular = popularReleases.slice(0, 15)

  let currentHours = new Date().getHours()

  const generateGreeting = () => {
    if (currentHours >= 5 && currentHours < 12) {
      return <h1>Good morning</h1>
    } else if (currentHours >= 12 && currentHours < 18) {
      return <h1>Good afternoon</h1>
    } else {return <h1>Good evening</h1>}
  }

  return (
    <div className="home">
      {generateGreeting()}
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