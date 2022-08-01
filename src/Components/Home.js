import React from 'react'
import HomeCard from './HomeCard'

function Home({songs}) {

  const newReleases = [...songs].sort((a, b) =>Date.parse(b.releaseDate) - Date.parse(a.releaseDate))

  const popularReleases = [...songs].sort((a, b) => b.plays - a.plays)

  console.log(newReleases)

  return (
    <div className="home">
        Home
        <div className='newReleases'>
            New Releases
            {newReleases.map(release => <HomeCard key={release.id} release={release} /> )}
        </div>
        <div className='popularReleases'>
            Popular Releases
            {popularReleases.map(release => <HomeCard key={release.id} release={release} />)}
        </div>
    </div>
  )
}

export default Home