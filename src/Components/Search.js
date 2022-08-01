import React, { useState } from 'react'
import SearchCard from './SearchCard'

function Search({songs}) {
  const [data, setData] = useState("")

  const handleChange = (e) => {
    setData(e.target.value)
  }

  const searchedData = songs.filter((song) => 
    song.songName.toLowerCase().includes(data.toLowerCase()) ||
    song.artist.toLowerCase().includes(data.toLowerCase()) ||
    song.genre.toLowerCase().includes(data.toLowerCase())
    )

  return (
    <div>
        Search
        <input onChange={handleChange}></input>
        {searchedData.map(song => <SearchCard key={song.id} song={song}/>)}
    </div>
  )
}

export default Search