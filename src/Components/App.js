import React, {useEffect, useState} from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from './Home';
import Library from './Library';
import Search from './Search';
import NavBar from './NavBar';
import ForArtists from './ForArtists';
import PageWrapper, {MainContentWrapper} from './Styles/Grids.style';
import GlobalStyles from '../GlobalStyles';

function App() {
  const [songs, setSongs] = useState([])

  useEffect(()=> {
    fetch(`http://localhost:3000/songs`)
      .then(r => r.json())
      .then(jsonSongs => setSongs(jsonSongs))
  }, [])

  function toggleFavoritedSong(songId, favoriteStatus) {
    fetch(`http://localhost:3000/songs/${songId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        favorited: favoriteStatus
      })
    })
      .then(r => r.json())
      .then(newSong => setSongs(songs.map(song => {
        if(song.id === newSong.id) {
          return newSong
        } else {
          return song
        }
      })))
  }

  function updateSongsWithUserUpload(songObj){
    setSongs((songs) => [...songs, songObj])
  }

  return (
    <PageWrapper>
    <GlobalStyles/>
      <NavBar/>
      <MainContentWrapper>
      <Switch>
        <Route path ="/library">
          <Library 
            songs={songs} 
            toggleFavoritedSong={toggleFavoritedSong}
          />
        </Route>
        <Route path ="/search">
          <Search 
            songs={songs} 
            toggleFavoritedSong={toggleFavoritedSong}
          />
        </Route>
        <Route path ="/for-artists">
          <ForArtists 
            updateSongsWithUserUpload={updateSongsWithUserUpload}
          />
        </Route>
        <Route exact path ="/">
          <Home 
            songs={songs} 
            toggleFavoritedSong={toggleFavoritedSong}
          />
        </Route>
      </Switch>
      </MainContentWrapper>
    </PageWrapper>
  );
}

export default App;

