import React from 'react'
import styles from './styles.module.css'
import { useContext } from 'react'
import PlayerContext from '../../../PlayerContext'

function Header() {
  const {user} = useContext(PlayerContext)
  return (
    <div className={styles.header}>
      <h1>Music Player</h1>
    {/* {console.log ("!!!!!" + user.name + "!!!!!")} */}
 
    
    
    </div>
  )
}

export default Header