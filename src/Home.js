import React from 'react'
import { Link,Outlet } from "react-router-dom";
import './App.css';


function Home() {
  return (
    <div className='div-nav'>
       
         <nav className='nav-container'>
        {/* <Link className='nav-link' to="counter">Counter</Link>
        <br /> */}
         <Link className='nav-link' to="counter">Counter</Link>
        <br />
        {/* <Link className='nav-link' to="input">Input</Link>
        <br /> */}
        <Link  className='nav-link' to="button">Button</Link>
        <br />
        <Link className='nav-link' to="login">Login</Link>
        <br />
        <Link className='nav-link' to="loginvalidation">Login Validation</Link>
        <br />
        <Link className='nav-link' to="loginmock">LoginMock</Link>
        <br />
        <Link className='nav-link' to="videos">Videos</Link>
        <br />
      
        <Link  className='nav-link' to="todo">TodoList</Link>
        <br />
      </nav>
      <Outlet/>
    </div>
  )
}

export default Home