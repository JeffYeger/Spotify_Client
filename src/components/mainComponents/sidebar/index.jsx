import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import VideoPlayer from '../player'
// import {AiOutlineHome} from "react-icons/Ai"

function Sidebar() {
  return (<>

    <div className={styles.sidebar}>

      <h2>Menu</h2>
   
        <Link className={styles.linktext} to='/'>Home</Link>
        <Link className={styles.linktext} to='/favorites'>Favorites</Link>
        <Link className={styles.linktext} to='/playlists'>Playlists</Link>
        <Link className={styles.linktext} to='/login'>Login</Link>
        <Link className={styles.linktext} to='/register'>Register</Link>
  
    
      <div className={styles.player}> <VideoPlayer /> </div>

    </div>



  </>
  )

}

export default Sidebar