import React from 'react'
import styles from './styles.module.css'
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h3>Menu</h3> 
        <Link className={styles.linktext} to='/'>Home</Link>
        <Link className={styles.linktext} to='/favorites'>Favorites</Link>
        <Link className={styles.linktext} to='/playlists'>Playlists</Link>
        <Link className={styles.linktext} to='/login'>Login</Link>
    
    
    </div>
  )
}

export default Sidebar