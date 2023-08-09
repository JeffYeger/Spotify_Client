
import { useContext, useEffect, useState } from 'react'
import PlayerContext from '../../../PlayerContext'
import axios from 'axios'
import styles from './styles.module.css'
import PlaylistCard from '../../PlaylistCard'

function Playlist() {
const {playlists,setPlaylists}= useContext(PlayerContext)
// const [username, setUsername] = useState([])
const [search,setSearch]= useState([])
const [constPlay,setConstPlay] = useState([])

const options = {
  method: 'GET',
  url: 'https://spotify-server-e41z.onrender.com/playlist/getplaylist',
  params: {
  },
  headers: {
    'authorization': "Bearer "+ localStorage.getItem('Token')

  }
}

useEffect(()=> {
axios.request (options)
  .then ((res)=> {
 
//  setUsername(res.data[0].user.name)
  const endResult = res.data
  setConstPlay(endResult)
  setPlaylists(endResult)

})

  .catch ((error)=> {
   console.log (error)
  })
},[])


  const handleChange = (e)=>{
    setSearch(e.target.value.toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (search.length === 0){
      setPlaylists(constPlay)}
    else if (search.length > 0) {
      const filteredPlaylist = playlists.filter((list) => {
       
        if (list.name.toLowerCase().includes(search)) {
          return list
        }
      })
  
      setPlaylists(filteredPlaylist);
     
      
    }
  }


  return <div className={styles.home}>

<div className={styles.search}>
     <form>
      <input style={{borderRadius:"10px"}} onChange={handleChange} type="search" placeholder="Search your favorites" />
      <button className={styles.searchbutton} onClick={handleSubmit}>Search</button>
    </form>
    </div>
    
    <div className={styles.titletext}>   <h2 className={styles.basictext}>Playlists</h2> </div>
 
      
  
<div className={styles.video_container}>


  {playlists.map((playlist,index)=>{
    return  <PlaylistCard  key = {index} data = {playlist} />
  })}
</div>
</div>
}
export default Playlist