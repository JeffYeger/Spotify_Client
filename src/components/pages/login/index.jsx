import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import PlayerContext from "../../../PlayerContext";
import styles from './styles.module.css'

function Login() {
  const {user,setUser} = useContext (PlayerContext)
  const [loginData, setLoginData] = useState({});
 const navigate = useNavigate()

  const handleInput = ((e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://spotify-server-e41z.onrender.com/user/login', loginData)
      .then((res) => {
        localStorage.setItem('Token', res.data.token);
        setUser(res.data.user);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  

  return (
    <div>

      <div className={styles.login_form}>
      <h2 style= {{color:'white'}}>Login</h2>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input onChange={handleInput} name="email" type="text" placeholder="Email" />
        <label>Password</label>
        <input onChange={handleInput} name="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      </div>
    </div>
  );
}

export default Login;
