import { useState } from 'react'
import './App.css'
import Layout from './layout'
import PlayerContext from './PlayerContext'

function App() {
  const [count, setCount] = useState(0)
  const [videoId, setVideoId] = useState("")

  return (
    <PlayerContext.Provider value={{ count, setCount, videoId, setVideoId }}>
      <div>
        <Layout/>
      </div>
    </PlayerContext.Provider>
  )
}

export default App
