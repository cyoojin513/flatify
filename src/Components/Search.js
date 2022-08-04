import React, { useState } from 'react'
import SearchCard from './SearchCard'
import { ContentGrid } from './Styles/Grids.style'
import SearchHeader from './Styles/Search.style'
import SearchInput from './Styles/Input.style'
import { RiSearchLine } from 'react-icons/ri'


function Search({songs, toggleFavoritedSong}) {
  const [data, setData] = useState("")

  const handleChange = (e) => {
    setData(e.target.value)
  }

  const searchedData = songs.filter((song) => 
    song.songName.toLowerCase().includes(data.toLowerCase()) ||
    song.artist.toLowerCase().includes(data.toLowerCase()) ||
    song.genre.toLowerCase().includes(data.toLowerCase()) ||
    song.album.toLowerCase().includes(data.toLowerCase())
    )

  return (
    <>
      <SearchHeader>
          <div className='holder'>
            <RiSearchLine color="black"/>
            <SearchInput 
              placeholder="Artists, songs, genre, or albums" 
              onChange={handleChange}
            />
          </div>
          <h2>Search...</h2>
      </SearchHeader>
      <ContentGrid>
        {searchedData.map(song => <SearchCard key={song.id} song={song} toggleFavoritedSong={toggleFavoritedSong}/>)}
      </ContentGrid>
    </>
  )
}

export default Search