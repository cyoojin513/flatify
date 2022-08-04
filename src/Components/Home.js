import React from 'react'
import HomeCard from './HomeCard'
import { ContentGrid } from './Styles/Grids.style'
import Scrollbox from './Styles/Scrollbox.style'

function Home({songs, toggleFavoritedSong}) {
  const newReleases = [...songs].sort((a, b) =>Date.parse(b.releaseDate) - Date.parse(a.releaseDate))

  const popularReleases = [...songs].sort((a, b) => b.plays - a.plays)

  let currentHours = new Date().getHours()
  const generateGreeting = () => {
    if (currentHours >= 5 && currentHours < 12) {
      return <h1>Good morning</h1>
    } else if (currentHours >= 12 && currentHours < 18) {
      return <h1>Good afternoon</h1>
    } else {return <h1>Good evening</h1>}
  }

  return (
    <div>
      {generateGreeting()}
      <h2 className='home-h2'>New Releases</h2>
      <Scrollbox>
        <ContentGrid>
            {newReleases.map(song => <HomeCard key={song.id} song={song} toggleFavoritedSong={toggleFavoritedSong}/> )}
        </ContentGrid>
      </Scrollbox>
      <h2 className='home-h2'>Popular Releases</h2>
      <Scrollbox>
        <ContentGrid>
            {popularReleases.map(song => <HomeCard 
              key={song.id} 
              song={song} 
              toggleFavoritedSong={toggleFavoritedSong}
            />)}
        </ContentGrid>
      </Scrollbox>
    </div>
  )
}

export default Home