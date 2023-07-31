
import { useContext, useEffect, useState } from 'react'
import PlayerContext from '../../../PlayerContext'
import axios from 'axios'
import styles from './styles.module.css'
import SongCard from '../../songCard'

function Favorites() {
const {favorites,setFavorites}= useContext(PlayerContext)
const [username, setUsername] = useState([])
const [search,setSearch]= useState([])
const [constFav,setConstFav] = useState([])

const options = {
  method: 'GET',
  url: 'https://spotify-server-e41z.onrender.com/favorites/getfavorites',
  params: {
  },
  headers: {
    'authorization': "Bearer "+ localStorage.getItem('Token')

  }
}

useEffect(()=> {
axios.request (options)
  .then ((res)=> {
    console.log (res)
 
//  setUsername(res.data[1].user.name)
  const endResult = res.data.map(({songs})=> songs[0])
  setConstFav(endResult)
  setFavorites(endResult)})
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
      setFavorites(constFav)}
    else if (search.length > 0) {
      const filteredFavorites = favorites.filter((song) => {
       
        if (song.title.toLowerCase().includes(search)) {
          return song
        }
      })
  
      setFavorites(filteredFavorites);
     
      
    }
  }

  return <div className={styles.home}>

<div className={styles.search}>
     <form>
      <input style={{borderRadius:"30px"}} onChange={handleChange} type="search" placeholder="Search your favorites" />
      <button className={styles.searchbutton} onClick={handleSubmit}>Search</button>
    </form>
    </div>
    
    <div className={styles.titletext}>   <h2 className={styles.basictext}>Now Playing:{username}'s Favorite Songs</h2> </div>
 
      
  
<div className={styles.video_container}>


  {favorites.map((video,index)=>{
    return <SongCard key = {index} video = {video}/>
  })}
</div>
</div>
}
export default Favorites