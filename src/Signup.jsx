import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function Signup() {

  const [lengthok,setLengthok] = useState(false)
  function lengthcheck(e) {
    const value= e.target.value
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasNumber= /[0-9]/.test(value)
    if(value.length>=8 && hasNumber &&  hasSymbol ){
setLengthok(true)
    }
    else {
      setLengthok(false)
    }
  }

function subb(){
  toast.success("signup succeeded")
}
  return (
    <form style={{display:"flex", flexDirection:"column" , alignItems:"center"}}>
      <h1>SIGN-UP here to Get Started</h1>
      <label htmlFor="name">Enter Your Name : </label>
      <input required type="text" id='name' placeholder='Ishita Jain'/>
      <br /> <br />
      <label htmlFor="">Above 18? : </label>
<select name="above" >
  <option value="" disabled>--select--</option>
  <option value="yes">YES</option>
  <option value="no">NO</option>
</select>
<br /> <br />
      <label htmlFor="email">Enter Your Email :  </label>
      <input type="text" required id='email' placeholder='...@gmail.com' />
      <br /> <br />
      <label htmlFor="">Enter The Password : </label>
      <input required type="text" placeholder='#fhk*9k' onChange={lengthcheck}/>
      {
        !lengthok ?  <h5 style={{color:"red" }}>(minimum of length 8 and include num and symbol)</h5> : <p style={{color:"green"}}>accepted!</p>
      }
     <br />
     <button type="submit" onClick={subb} >Submit</button>
    </form>
  )
}
