import React, { useContext, useState } from 'react'
import styles from './styles.module.css'
// import Popup from '../mainComponents/popup'
// import '../mainComponents/popup/popup.css'
import PlayerContext from '../../PlayerContext'
import { IoIosAdd } from 'react-icons/io'
import AddToPlaylist from '../addToPlaylist'
import { AiOutlineHeart, AiFillHeart, AiOutlineDelete } from "react-icons/ai"
import axios from 'axios'



function SongCard(props) {


  const [favorite, setFavorite] = useState(false)

const {videoDetails,setVideoDetails} = useContext(PlayerContext)

const handleFavorite = () => {
  setFavorite(!favorite)
  const data = {
    "thumbnail": props.video.thumbnail,
    "title": props.video.title,
    "duration_formatted": props.video.duration_formatted,
    "id": props.video.id,
    "url": props.video.url
  }
  console.log (data)
  axios.post('https://spotify-server-e41z.onrender.com/song/addfavorite',data,{headers: {authorization: "Bearer " + localStorage.getItem('Token')}},
)
    .then((res) => console.log("!!!!" , res, "!!!!"))
    .catch((err) => console.log(err.message))
}


const handleDelete = () => {


const optionsDelete = {
  method: 'PUT',
  url: `https://spotify-server-e41z.onrender.com/favorites/removefavorite`,
  // url: `http://localhost:1001/favorites/removefavorite`,
  params: {
  },
  headers: {
      'authorization': "Bearer " + localStorage.getItem('Token')

  },
  data: { 
    songId: props.video._id
  }

}
axios.request(optionsDelete)
  .then((res) => {
      console.log (res.data)
      navigate('/playlists')
  })
  .catch((error) => {
      console.log(error.message)
     
  })


}



  return (
    <div className={styles.songcard}>
   {/* <h4>Title:</h4> {props.title}
  <h4>Duration:</h4>  {props.duration} */}
<img className={styles.thumbnail} src={props.video.thumbnail.url} alt="" />
<div className={styles.title}>  Title: {props.video.title}</div>

  {/* <br /> */}
   ({props.video.duration_formatted})
<div className={styles.delete_song}>
  {props.delete && <AiOutlineDelete onClick={handleDelete} className={styles.delete_button} />}
  </div>
<div className={styles.controls}>
<div onClick={handleFavorite}>
          {favorite == false ? <AiOutlineHeart className={styles.favorite} /> : <AiFillHeart className={styles.favorite} />}
        </div>

  <button  onClick={() => setVideoDetails(props.video)}
      >Play</button> <AddToPlaylist video = {props.video}/>
      
  </div>
  
    </div>
  )
}

export default SongCard