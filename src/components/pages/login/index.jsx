import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [loginData, setLoginData] = useState({});
 const navigate = useNavigate()

  const handleInput = ((e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  });

const handleSubmit = async (e) => {
  e.preventDefault()
  await axios.post('http://localhost:1001/user/login',loginData)
  .then((res)=> navigate('/'))
  .catch((err)=> console.log (err))
}

  return (
    <div>
      <h3 style= {{color:'white'}}>Login</h3>

      <form onSubmit={handleSubmit}>
        <input onChange={handleInput} name="email" type="text" placeholder="Email" />
        <input onChange={handleInput} name="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
