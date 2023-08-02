import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {

  const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem ('Token')
        navigate ('/')
    }

  return (
    <div>
        <h5 onClick={handleLogout}>Logout</h5> 
    </div>
  )
}

export default Logout