import React, {useState} from 'react'
import {Route,Routes} from "react-router-dom"
import Login from './Login'
import Signup from './Signup'
import Head from './Head'

import Dashboard from './Dashboard'
export default function Main() {

  return (
    <div>

      
<Head />

      <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>}/>
 
        <Route path="/" element={<Dashboard/>} />
      </Routes>

    </div>
  )
}
