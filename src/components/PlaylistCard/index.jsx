import React from 'react'
import { useContext } from 'react'
import { TbHandClick } from 'react-icons/tb'
import PlayerContext from '../../PlayerContext'
import styles from './style.module.css'
import { useNavigate } from 'react-router-dom'


function PlaylistCard(props) {
const navigate = useNavigate()
    const {playlists} = useContext(PlayerContext)

  const handleClick = () => {
navigate(`/playlists/${props.data.name}`)
  }

  return (
    <div onClick={handleClick} className={styles.playlistCard} style={{color:'white'}}>
        <h4>{props.data.name}</h4>
        <img src={props.thumbnail} className={styles.thumbnail} alt="" />
        {/* number of songs */}

        
    
    </div>
  )
}

export default PlaylistCard