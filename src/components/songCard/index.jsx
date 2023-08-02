import React, { useContext, useState } from 'react'
import styles from './styles.module.css'
// import Popup from '../mainComponents/popup'
// import '../mainComponents/popup/popup.css'
import PlayerContext from '../../PlayerContext'
import { IoIosAdd } from 'react-icons/io'
import AddToPlaylist from '../addToPlaylist'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

function SongCard(props) {

const {videoDetails,setVideoDetails} = useContext(PlayerContext)




  return (
    <div className={styles.songcard}>
   {/* <h4>Title:</h4> {props.title}
  <h4>Duration:</h4>  {props.duration} */}
<img className={styles.thumbnail} src={props.video.thumbnail.url} alt="" />
<div className={styles.title}>  Title: {props.video.title}</div>

  {/* <br /> */}
   ({props.video.duration_formatted})

<div className={styles.controls}>
<AiFillHeart className={styles.favorite} />
  <button  onClick={() => setVideoDetails(props.video)}
      >Play</button> <AddToPlaylist video = {props.video}/>
      
  </div>
  
    </div>
  )
}

export default SongCard