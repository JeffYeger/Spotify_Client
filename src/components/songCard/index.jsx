import React, { useContext, useState } from 'react'
import styles from './styles.module.css'
// import Popup from '../mainComponents/popup'
// import '../mainComponents/popup/popup.css'
import PlayerContext from '../../PlayerContext'
import { IoIosAdd } from 'react-icons/io'
import AddToPlaylist from '../addToPlaylist'

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


  <button style={{backgroundColor:'rgb(95, 95, 95)', color:"white"}} onClick={() => setVideoDetails(props.video)}
      >Play</button>
      <AddToPlaylist video = {props.video}/>
  
  
    </div>
  )
}

export default SongCard