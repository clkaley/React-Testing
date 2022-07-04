import React, { useEffect, useState } from 'react'
import './styles.css'
import '../../App.css'

const Button = () => {



  return (
    <>
    <div className='App btn-list'>
      <div style={{display:"flex",flexDirection:"column-reverse",padding:"25px",margin:"25px"}}>
        <button className='green'>Green Buton</button>
        <button className='pink'>Pink Buton</button>
        <button className='blue pink'>Blue Buton</button>
        <button className='blue'>Blue Buton</button>
      </div>
    

    </div>
    </>
  )
}

export default Button