import React from 'react'
import { Link } from 'react-router-dom'
export default function Dashboard() {
  return (
    <div>
      <h1>LOGIN OR SIGNUP BEFORE YOU START
        <Link to="/Login"> LOGIN</Link>
        <br /> <br />
        <Link to="/Signup">SIGN UP</Link>
      </h1>
    </div>
  )
}
