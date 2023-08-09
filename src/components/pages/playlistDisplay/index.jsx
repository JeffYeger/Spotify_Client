import React, { useState } from 'react'
import styles from './styles.module.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import SongCard from '../../songCard'
import {AiOutlineDelete} from 'react-icons/ai'
function PlaylistDisplay(props) {
    const [showSongs, setShowSongs] = useState([])
    const [search,setSearch] = useState("")
   const [constList,setConstList] = useState([])

const params = useParams()

const navigate = useNavigate()

    const options = {
        method: 'GET',
        url: `https://spotify-server-e41z.onrender.com/playlist/showplaylistsongs/${params.name}`,
        params: {
        },
        headers: {
            'authorization': "Bearer " + localStorage.getItem('Token')

        }
    }

    useEffect(() => {
        axios.request(options)
            .then((res) => {
                
                setShowSongs (res.data[0].songs)
                setConstList(res.data[0].songs)
                console.log (showSongs)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const handleChange = (e)=>{
        setSearch(e.target.value.toLowerCase())
      }
    
      const handleSearch = (e) => {
        e.preventDefault()
        if (search.length === 0){
          setShowSongs(constList)}
        else if (search.length > 0) {
          const filteredPlaylist = showSongs.filter((song) => {
           
            if (song.title.toLowerCase().includes(search)) {
              return song
            }
          })
      
          setShowSongs(filteredPlaylist);
         
          
        }
      }

      const handleDelete = (e) => {
          e.preventDefault()

        

          const optionsDelete = {
            method: 'PUT',
            url: `https://spotify-server-e41z.onrender.com/playlist/deletePlaylist/${params.name}`,
            params: {
            },
            headers: {
                'authorization': "Bearer " + localStorage.getItem('Token')
    
            }
         
        }

        axios.request(optionsDelete)
            .then((res) => {
                console.log (res.data)
                navigate('/playlists')
            })
            .catch((error) => {
                console.log(error.message)
                console.log (params.name)
            })
       

      }


    return (
        
      <div className={styles.container}>
        <AiOutlineDelete onClick={handleDelete} className={styles.delete}  />
        <form>
      <input style={{borderRadius:"10px"}} onChange={handleChange} type="search" placeholder="Search your favorites" />
      <button className={styles.searchbutton} onClick={handleSearch}>Search</button>
    </form>
        <div className={styles.titletext}>   <h2 className={styles.basictext}>Now Playing: {params.name} Playlist</h2> 
        <div className={styles.video_container} style={{ color: 'white' }}>
            
        {showSongs.map ((song)=> {
            return <SongCard key = {song.id} video = {song} />
        })}
        </div>
        </div>
        </div>
    )
}

export default PlaylistDisplay