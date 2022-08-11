import NavBar from './Components/NavBar/Navbar.';
import SearchBar from './Components/SearchBar/SearchBar';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/ML/');
    setSongs(response.data)
  }

  return (
    <div className='webpage'>
      <NavBar/>
      <SearchBar findSong={setSongs} />
      <DisplayMusic displaySong={songs} />
    </div>
  );
}

export default App;


