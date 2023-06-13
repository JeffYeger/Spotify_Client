import React from 'react'
import styles from './styles.module.css'
import {Routes,Route} from 'react-router-dom'
import Favorites from '../../pages/favorites'
import Playlists from '../../pages/playlist'
import Home from '../../pages/home'
import Login from '../../pages/login'

function Body() {
  return (
    <div className={styles.body}>
    <Routes>

    <Route path = '/' element = {<Home/>}/>
    <Route path = '/favorites' element = {<Favorites/>}/>
    <Route path = '/login' element = {<Login/>}/>
    <Route path = '/playlists' element = {<Playlists/>}/>
    </Routes>

    
    </div>
  )
}

export default Body