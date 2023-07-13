import { useState } from 'react'
import './App.css'
import Layout from './layout'
import PlayerContext from './PlayerContext'

function App() {
  const [count, setCount] = useState(0)
  const [videoDetails, setVideoDetails] = useState("")
  const [saveSong,setSaveSong] = useState ()
  const [user,setUser] = useState ()
  console.log (user)

  return (
    <PlayerContext.Provider value={{ count, setCount, videoDetails, setVideoDetails, saveSong,setSaveSong,user,setUser }}>
      <div>
        <Layout/>
      </div>
    </PlayerContext.Provider>
  )
}

export default App
