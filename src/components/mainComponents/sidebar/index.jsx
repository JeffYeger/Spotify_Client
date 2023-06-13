import React from 'react'
import styles from './styles.module.css'
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
       Menu
        <Link to='/'><button>Home</button></Link>
        <Link to='/favorites'><button>Favorites</button></Link>
        <Link to='/playlists'><button>Playlists</button></Link>
        <Link to='/login'><button>Login</button></Link>
    
    
    </div>
  )
}

export default Sidebar