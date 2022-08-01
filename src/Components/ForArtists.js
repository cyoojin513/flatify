import React, {useState} from 'react'

function ForArtists() {
  // pickup here
  const [formData, setFormData] = useState({
    artist: "",
    songName: "",
  })



  return (
    <div>
        ForArtists
        <form className='upload-tool'>
            <label htmlFor="artist">Artist Name:
                <input name="artist"></input>
            </label>
            <label htmlFor="songName">Song Name:
                <input name="songName"></input>
            </label>
            <label htmlFor="album">Album Name:
                <input name="album"></input>
            </label>
            <label htmlFor="image">Album Cover:
                <input name="image"></input>
            </label>
            <label htmlFor="releaseDate">Date Released:
                <input name="releaseDate"></input>
            </label>
        </form>
    </div>
  )
}

export default ForArtists