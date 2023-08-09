import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { useContext } from 'react'
import PlayerContext from '../../../PlayerContext'
import Logout from '../../pages/logout'
import { Link } from 'react-router-dom'

function Header() {

let token = localStorage.getItem('Token')

useEffect(()=> {
token = localStorage.getItem('Token')
},)

  return (
    <div className={styles.header}>
      <div className={styles.nav_links}>
         {token ? <Logout/> : 
         <Link className={styles.linktext} to='/Login'><h5>Login</h5></Link>}
          {!token ?  <Link className={styles.linktext} to='/Register'><h5>Register</h5></Link> : <></>}
         </div>
         <div className={styles.header_title}>
      <h1>Music Player</h1>
      </div>
 
    
 
    
    
    </div>
  )
}

export default Header