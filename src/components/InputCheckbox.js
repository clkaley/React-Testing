import React, { useState } from 'react'

const Form = () => {
    const [secret,setSecret]=useState("");
    const [checked,setChecked]=useState(false);

  return (
    <div className='foo'
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '300%',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '-15%',
      }} >

           
                <label  htmlFor="input"> Secret</label>
                <input 
                onChange={e=>{setSecret(e.target.value)}} type="text"  
                id='input' 
                value={secret}/>
                
                <div style={{
      fontSize: '15px'}}>
              <label htmlFor="">is Check</label>
                <input 
                type="checkbox" 
                name="" 
                id="" 
                value={checked}
                checked={checked} 
                onChange={(e)=>{setChecked(e.target.checked)}}/>

                <button className='add-btn'>
                   Submit
                </button>
</div>

      </div>
  )
}

export default Form