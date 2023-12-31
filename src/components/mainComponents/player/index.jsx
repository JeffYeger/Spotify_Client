import React, { useContext, useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './styles.module.css';
import PlayerContext from '../../../PlayerContext';
import { FaPlay, FaPause } from "react-icons/fa"
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import axios from 'axios'

const VideoPlayer = () => {
  const { videoDetails } = useContext(PlayerContext);
  const playerRef = useRef(null);
  const [playerReady, setPlayerReady] = useState(false);
  const [favorite, setFavorite] = useState(false)

  useEffect(() => {
    if (playerReady && videoDetails.id) {
      playerRef.current?.seekTo(0); // Seek to the beginning of the video
      playerRef.current?.getInternalPlayer().playVideo();
    }
  }, [playerReady, videoDetails.id]);

  const handlePlay = () => {
    if (playerReady) {
      playerRef.current?.getInternalPlayer().playVideo();
    }
  };

  const handlePause = () => {
    if (playerReady) {
      playerRef.current?.getInternalPlayer().pauseVideo();
    }
  };

  const handleVolumeChange = (e) => {
    const volume = parseFloat(e.target.value);
    if (playerReady) {
      playerRef.current?.getInternalPlayer().setVolume(volume * 100);
    }
  };

  const handleFastForward = () => {
    if (playerReady) {
      const currentTime = playerRef.current?.getCurrentTime();
      const duration = playerRef.current?.getDuration();
      const newTime = currentTime + 10;
      if (newTime <= duration) {
        playerRef.current?.seekTo(newTime);
      } else {
        playerRef.current?.seekTo(duration);
      }
    }
  };

  const handleRewind = () => {
    if (playerReady) {
      const currentTime = playerRef.current?.getCurrentTime();
      const newTime = currentTime - 10;
      if (newTime >= 0) {
        playerRef.current?.seekTo(newTime);
      } else {
        playerRef.current?.seekTo(0);
      }
    }
  };

  const handleFavorite = () => {
    setFavorite(!favorite)
    const data = {
      "thumbnail": videoDetails.thumbnail,
      "title": videoDetails.title,
      "duration_formatted": videoDetails.duration_formatted,
      "id": videoDetails.id,
      "url": videoDetails.url
    }
    console.log (data)
    axios.post('https://spotify-server-e41z.onrender.com/song/addfavorite',data,{headers: {authorization: "Bearer " + localStorage.getItem('Token')}},
 )
      .then((res) => console.log("!!!!" , res, "!!!!"))
      .catch((err) => console.log(err.message))
  }
  const handlePlayerReady = () => {
    setPlayerReady(true);
  };

  return (
    <div className={styles.player_container}>
      <div className={styles.window}>
      <ReactPlayer
        ref={playerRef}
        url={`https://www.youtube.com/embed/${videoDetails.id}`}
        playing={playerReady} // Start playing when the player is ready
        onReady={handlePlayerReady} // Set playerReady state to true when the player is ready
        volume={1}
        width="100%"
        height="100%"
      />
</div>
      <div className={styles.controls}>
        <TbPlayerTrackPrevFilled onClick={handleRewind} />
        <FaPlay onClick={handlePlay} />
        <FaPause onClick={handlePause} />

        <TbPlayerTrackNextFilled onClick={handleFastForward} />
        <input
          type="range"
          min={0}
          max={1}
          step={0.1}
          defaultValue={.3}
          onChange={handleVolumeChange}
        />
        <div onClick={handleFavorite}>
          {favorite == false ? <AiOutlineHeart /> : <AiFillHeart />}
        </div>


      </div>
    </div>
  );
};

export default VideoPlayer;
