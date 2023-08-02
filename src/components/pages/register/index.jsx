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
 
    axios.post('https://spotify-server-e41z.onrender.com/user/register',data)
     .then((res)=>navigate('/login'))
     .catch ((err)=> console.log (err))
     alert ("successful registration")
    
    }

  
  return (
    <div>
<div className={styles.register_form}>
        <h2>Register</h2>

<form onSubmit={handleSubmit}>
    <label>Username:</label>
    <input onChange={handleInput} required  name='name' placeholder='Username' type="text" />
    <label>Email:</label>
    <input onChange={handleInput} required name='email' placeholder='Email' type="email" />
    <label>Password:</label>
    <input onChange={handleInput} required type = 'password' name='password' placeholder='Password'  />
  <button type='submit'>Register</button>
</form>

</div>


    </div>
  )
}

export default Register