import React, { useState } from 'react'
import '../App.css';
const Counter = () => {
    const [counter,setCounter]=useState(0);

  return (
    <div style={{
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
       <div
        style={{
            fontSize: '120%',
            position: 'relative',
            top: '10vh',
          }}>Counter App</div>
        <h3 data-testid="counter">{counter}</h3>
        <div>
        <button 
        style={{
            fontSize: '60%',
            position: 'relative',
            top: '10vh',
            fontWeight:"bold",
            marginRight: '5px',
            padding:"10px",
            backgroundColor: 'green',
            borderRadius: '8%',
            color: 'black',
          }}
        className='btn'
        onClick={()=>setCounter((prev)=>prev+1)} >Increment</button>

        <button 
        style={{
            fontSize: '60%',
            fontWeight:"bold",
            position: 'relative',
            top: '10vh',
            padding:"10px",
            marginLeft: '5px',
            backgroundColor: 'red',
            borderRadius: '8%',
            color: 'black',
          }}
        className='btn'
        onClick={()=>setCounter((prev)=>prev-1)}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter