import { useState } from 'react'
import './App.css'
import Layout from './layout'
import PlayerContext from './PlayerContext'

function App() {
  const [videoDetails, setVideoDetails] = useState("")
  const [saveSong,setSaveSong] = useState ()
  const [user,setUser] = useState ()
  const [favorites,setFavorites] = useState ([])
  const [playlists,setPlaylists] = useState ([])
  
  return (
    <PlayerContext.Provider value={{playlists,setPlaylists, videoDetails, setVideoDetails, saveSong,setSaveSong,user,setUser,favorites,setFavorites }}>
      <div>
        <Layout/>
      </div>
    </PlayerContext.Provider>
  )
}

export default App
