import React, {useState} from 'react'

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
        ForArtists
        <form className='upload-tool' onSubmit={handleSubmit}>
            <label htmlFor="artist">Artist Name:
                <input onChange={handleChange} name="artist" placeholder="Name of Artist"></input>
            </label>
            <label htmlFor="songName">Song Name:
                <input onChange={handleChange} name="songName" placeholder="Name of Song"></input>
            </label>
            <label htmlFor="album">Album Name:
                <input onChange={handleChange} name="album" placeholder="Name of Album"></input>
            </label>
            <label htmlFor="genre">Genre:
                <input onChange={handleChange} name="genre" placeholder="Genre"></input>
            </label>
            <label htmlFor="image">Album Cover:
                <input onChange={handleChange} name="image" placeholder="URL of image"></input>
            </label>
            <label htmlFor="releaseDate">Date Released:
                <input onChange={handleChange} name="releaseDate" placeholder="YYYY-MM-DD"></input>
            </label>
            <input type="submit"></input>
        </form>
    </div>
  )
}

export default ForArtists