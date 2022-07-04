import React, { useState } from 'react'

export const validateInput = (str = "")=>str.includes("@");

function LoginValidation({handleSubmit}) {
    
    const[formData,setFormData]=useState({})

    const handleChange=({
        target:{name,value}})=>setFormData((prev)=>({...prev,[name]:value}))
    

  return (
 
    <div className='App'
    style={{padding:"20px",
    margin:"25px"}}>
        <form name="login-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email"> Email :</label>
            <input  style={{padding:"10px",
    margin:"25px"}} type="email" id='email' name='email' onChange={handleChange} />
            </div>
            {formData.email && !validateInput (formData.email) ? <div>Email is not correct</div> : null }
            <div>
                <label htmlFor="password" >Password</label>
                <input  style={{padding:"10px",
    margin:"15px"}} type="password" name='password' />
            </div>
            <button role="button"> Submit</button>



        </form>
    </div>
  )
}

export default LoginValidation