import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Head() {
    const [isLogged, setIslogged] = useState(false)

    function managelogin() {
   if(isLogged===true) {
    toast.error("loggedout")
   }
      setIslogged(!isLogged)
      
    }
  return (
    <div>
        <nav>
            {
                isLogged? <button style={{marginLeft:"1100px"}} onClick={managelogin}  >LogOut</button>
                
                :
                <Link onClick={managelogin} to="/Login" style={{marginLeft:"1100px"}}>LOGIN</Link>
            }
         
         <Link to="/Signup" style={{marginLeft:"100px"}}>SIGNUP</Link>
        </nav>
    </div>
  )
}
