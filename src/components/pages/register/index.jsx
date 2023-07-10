import React, {useState } from 'react'
import styles from './style.module.css'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'

function Register() {

    const [data,setData] = useState({})
    const navigate = useNavigate()

    function handleInput(e) {
        e.preventDefault()
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
      }

   async function handleSubmit (e){
       e.preventDefault()
    axios.post('http://localhost:1001/user/register',data)
     .then((res)=>navigate('/login'))
     .catch ((err)=> console.log (err))
     alert ("successful registration")
    
    }

  
  return (
    <div>

        <h3>Register</h3>

<form onSubmit={handleSubmit}>
    <label>Username:</label>
    <input onChange={handleInput}  name='name' placeholder='Username' type="text" />
    <label>Email:</label>
    <input onChange={handleInput} name='email' placeholder='Email' type="email" />
    <label>Password:</label>
    <input onChange={handleInput} type = 'password' name='password' placeholder='Password'  />
  <button type='submit'>Register</button>
</form>


    </div>
  )
}

export default Register