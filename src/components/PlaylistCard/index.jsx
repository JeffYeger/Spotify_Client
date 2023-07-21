import React from 'react'
import { useContext } from 'react'
import PlayerContext from '../../PlayerContext'
import styles from './style.module.css'


function PlaylistCard(props) {

    const {playlists} = useContext(PlayerContext)



  return (
    <div className={styles.playlistCard} style={{color:'white'}}>
        <h4>{props.data.name}</h4>
        <img src={props.thumbnail} className={styles.thumbnail} alt="" />
        {/* number of songs */}

        
    
    </div>
  )
}

export default PlaylistCard