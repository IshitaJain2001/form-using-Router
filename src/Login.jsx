import React from 'react'
import { toast } from 'react-toastify'

import {Link} from 'react-router-dom'
export default function Login() {
    function subb(e) {
        e.preventDefault()
toast.success("wohooo loggedin")

    }
  return (
    <form onSubmit={subb} style={{display:"flex" , flexDirection:"column" , alignItems:"center", marginTop:"50px", gap:"10px"}}>
      <h1>LOGIN HERE TO CONTINUE</h1>
<label htmlFor="email">Email:</label>
<input required type="text" id='email' placeholder="...@gmail.com"/>
<br /> 
<label htmlFor="pass">Password:</label>
<input required type="text" id='pass' placeholder="...1234"/>
<button type="submit">enter</button>
<h3>Not SignedIn yet..?? SIGNUP NOW</h3>
<Link to="/Signup" >SignUp now</Link>
    </form>
  )
}
