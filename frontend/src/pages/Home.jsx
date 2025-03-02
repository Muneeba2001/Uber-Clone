import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Hey! I'm home</h1>
      {/* <button onClick={()=>{
        navigate('/login')
      }}>Logout</button> */}
    </div>
  )
}

export default Home
