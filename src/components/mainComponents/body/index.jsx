import React from 'react'
import styles from './styles.module.css'
import {Routes,Route} from 'react-router-dom'
import Favorites from '../../pages/favorites'
import Playlists from '../../pages/playlist'
import Home from '../../pages/home'
import Login from '../../pages/login'
import Register from '../../pages/register'
import VideoPlayer from '../player'
import PlaylistCard from '../../PlaylistCard'
import PlaylistDisplay from '../../pages/playlistDisplay'

function Body() {
  return (
    <div className={styles.body}>
    <Routes>

    <Route path = '/' element = {<Home/>}/>
    <Route path = '/favorites' element = {localStorage.getItem('Token') ? <Favorites/>  : <Login/>}/>
    <Route path = '/login' element = {<Login/>}/>
   <Route path = '/register' element =  {<Register/>}/>
    <Route path = '/playlists' element = {localStorage.getItem('Token') ? <Playlists/> : <Login/>}/>
    <Route path = '/playlists/:name' element = {<PlaylistDisplay/>}/>
    {/* <Route path = '/playlists' element = {<PlaylistCard/>}/> */}
    </Routes>

  

    
    </div>
  )
}

export default Body