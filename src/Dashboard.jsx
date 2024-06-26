import React from 'react'
import { Link } from 'react-router-dom'
export default function Dashboard() {
  return (
    <div style={{display:"flex",flexDirection:"column", alignItems:"center",marginTop:"200px"}}>
      <h1>LOGIN OR SIGNUP BEFORE YOU START
      <div style={{marginLeft:"250px"}} > <Link to="/Login"> LOGIN</Link>     </div>  
        
      <div  style={{marginLeft:"250px"}}>  <Link to="/Signup">SIGN UP</Link>  </div>  
      </h1>
    </div>
  )
}
