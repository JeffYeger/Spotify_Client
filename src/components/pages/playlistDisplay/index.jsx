import React, { useState } from 'react'
import styles from './styles.module.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SongCard from '../../songCard'
function PlaylistDisplay(props) {
    const [showSongs, setShowSongs] = useState([])
   
const params = useParams()

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
                console.log (showSongs)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])


    return (
        
      
        <div className={styles.titletext}>   <h2 className={styles.basictext}>Now Playing: {params.name} Playlist</h2> 
        <div className={styles.video_container} style={{ color: 'white' }}>
            
        {showSongs.map ((song)=> {
            return <SongCard key = {song.id} video = {song} />
        })}
        </div>
        </div>
    )
}

export default PlaylistDisplay