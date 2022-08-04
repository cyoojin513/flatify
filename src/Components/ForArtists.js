import React, {useState} from 'react'
import { FormSubmit, FormInput } from './Styles/Input.style'
import { FormGrid } from './Styles/Grids.style'

function ForArtists({updateSongsWithUserUpload}) {
  
  const [formData, setFormData] = useState({
    artist: "",
    songName: "",
    album: "",
    genre: "",
    image: "",
    releaseDate: "",
    favorited: false
  })

  function handleChange(event){
    setFormData({...formData,
    [event.target.name]: event.target.value})
  }

  function handleSubmit(event){
    event.preventDefault()
    fetch("http://localhost:3000/songs", {
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
    .then(r=>r.json())
    .then( () => updateSongsWithUserUpload(formData))
    setFormData({
      artist: "",
      songName: "",
      album: "",
      genre: "",
      image: "",
      releaseDate: "",
      favorited: false
    })
    event.target.reset()
  }

  return (
    <div>
        <h1>Flatify For Artists</h1>
        <div>
          <h3>Artist Music Upload</h3>
          
          <form className='upload-tool' onSubmit={handleSubmit}>
            <FormGrid>
              <label htmlFor="artist">
                  <h2>Artist Name:</h2>
                  <FormInput onChange={handleChange} name="artist" placeholder="Name of Artist"></FormInput>
              </label>
              <label htmlFor="songName">
                  <h2>Song Name:</h2>
                  <FormInput onChange={handleChange} name="songName" placeholder="Name of Song"></FormInput>
              </label>
              <label htmlFor="album">
                  <h2>Album Name:</h2>
                  <FormInput onChange={handleChange} name="album" placeholder="Name of Album"></FormInput>
              </label>
              <label htmlFor="genre">
                  <h2>Genre:</h2>
                  <FormInput onChange={handleChange} name="genre" placeholder="Genre"></FormInput>
              </label>
              <label htmlFor="image">
                  <h2>Album Cover:</h2>
                  <FormInput onChange={handleChange} name="image" placeholder="URL of image"></FormInput>
              </label>
              <label htmlFor="releaseDate">
                  <h2>Date Released:</h2>
                  <FormInput onChange={handleChange} name="releaseDate" placeholder="YYYY-MM-DD"></FormInput>
              </label>
            </FormGrid>
              <label>
                <h2></h2>
                <FormSubmit type="submit" value="▶"></FormSubmit>
              </label>
          </form>
        </div>
    </div>
  )
}

export default ForArtists