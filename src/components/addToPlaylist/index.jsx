import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { IoIosAddCircleOutline } from 'react-icons/io';
import axios from 'axios';
import { useContext } from 'react';
import PlayerContext from '../../PlayerContext';


function AddToPlaylist(props) {
    const { playlists, setPlaylists } = useContext(PlayerContext);

    const [loading, setLoading] = useState(true)
    const [isVisible, setIsVisible] = useState(false);
    const [playName, setPlayName] = useState('');
    


//This pulls the playlist names from Mongo
    const playlistOptions = {
        method: 'GET',
        url: 'https://spotify-server-e41z.onrender.com/playlist/getplaylist',
        params: {
        },
        headers: {
            'authorization': "Bearer " + localStorage.getItem('Token')

        }
    }

    useEffect(() => {
        axios.request(playlistOptions)
            .then((res) => {
                const endResult = res.data
                setPlaylists(endResult)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => setLoading(false))
    }, [])

//This is to add the song to the playlist
    const details = {
        name: playName,
        thumbnail: props.video.thumbnail,
        title: props.video.title,
        duration_formatted: props.video.duration_formatted,
        id: props.video.id,
        url: props.video.url,
    };

    
    const toggleDropdown = () => {
        setIsVisible((prev) => !prev);
    };

    const handleSelect =  (option) => {
        setPlayName(option);
        setIsVisible(false);
    };

    //This sends the selected playlist name along with the song to Mongo
    const options = {
        method: 'POST',
        url: 'https://spotify-server-e41z.onrender.com/playlist/addtoplaylist',
        params: {},
        headers: {
            'authorization': "Bearer " + localStorage.getItem('Token'),
        },
        data: details,
    };

    const handleClick = async (e) => {
       
        axios
            .request(options)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };



    return (
        <div>
            <IoIosAddCircleOutline onClick={toggleDropdown} />
            {isVisible && (
                <div className={styles.dropdown_menu}>
                    {loading && "Loading, Please Wait"}
                    <ul> <h5>Choose a Playlist to Add to</h5> 
                        {!loading && playlists.map((playlist,index) => {
                        return <li key={index} onClick={() => {
                                handleSelect(playlist.name),
                                handleClick()
                            }}>{playlist.name}</li>
                       
                    })}<input type="text" placeholder='New Playlist Name'/> </ul>
                </div>
            )}
        </div>
    );
}

export default AddToPlaylist;
