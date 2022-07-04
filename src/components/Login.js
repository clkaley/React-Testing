import React, { useState } from 'react'
import '../App.css';
import axios from 'axios';

const Login = () => {
    const [error,setError]=useState(false);
    const [username,setUsername]=useState("");
    const [loading,setLoading]=useState(false);
    const [password,setPassword]=useState("");


  return (
    <div style={{
      display: 'fle',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '300%',
      position: 'absolute',
      width: '80%',
      height: '80%',
      textAlign:"center"
      //top: '-25%',
    }}>
       <div
        style={{
            fontSize: '120%',
            position: 'relative',
            top: '10vh'}}
            >
     
        <form action="">
               Login
          <div>
            <input
             style={{padding:"15px",
            borderRadius:"8px"}}
            type="text" placeholder='username' 
            value={username}
            onChange={(e)=>{
                setUsername(e.target.value);
            }}
         />
         </div>
         <div>
            <input
            style={{padding:"15px",
            borderRadius:"8px"}}
            type="password" placeholder='password'
             value={password} 
             onChange={(e)=>{
                setPassword(e.target.value);
            }}
            />
            </div>

            <div>
            <button 
              style={{padding:"15px",
              borderRadius:"8px",
            borderColor:"black",
            }}
            disabled={!username || !password}
           
            >{loading ? "please wait" : "Login" }</button>
            </div>
            <span 
            style={{visibility:error ? "visible" :"hidden"}}
            data-testid="error">Something went wrong!</span>
        </form>
        </div>
    </div>
  )
}

export default Login


    /*const handleClick= async(e)=>{
      e.preventDefault();
      setLoading(true);
      try{
        const {data}=await axios.get("https://jsonplaceholder.typicode.com/users/1");
        setUser(data);
      }  
      catch{
        setError(true);
      }
      //setLoading(false);
    }
*/

 {/* <span>{user.name}</span> */}
        {/* value="username" */}

        //const [user, setUser]=useState({});