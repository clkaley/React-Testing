import axios from 'axios';
import React, { useState } from 'react'
import '../App.css'


const LoginMock = () => {
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(false)
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const[user,setUser]=useState({});

    //fake login process
    const handleClick=  async(e)=>{
        e.preventDefault();
        setLoading(true);
        try{
            const {data}= await axios.get("https://jsonplaceholder.typicode.com/users/1");
           setUser(data);
        }
        catch{
            setError(true);
        }
        setLoading(false);
    
    
    }
  return (
        <div style={{ display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '300%',
                        position: 'absolute',
                        width: '90%',
                        height: '80%',
                        textAlign:"center"
    }}>
<p>Login Mock</p>
       <div 
        className='div-container'>
            <span>{user.name}</span>
         <form action="">
               
            <div>
                <input className='input-login' 
                       type="text"
                       placeholder='username'
                       value={username}
                       onChange={(e)=>
                        setUsername(e.target.value)
                       }
                />
            </div>

            <div>
                <input className='input-login'
                       type="password"
                       placeholder='password'
                       value={password}
                       onChange={(e)=>
                        setPassword(e.target.value)
                       }
                />
            </div>

            <div>

                <button className='btn-login'
                        disabled={!username || !password}
                        onClick={handleClick}
                        >
                       {loading ? "please wait" : "Login"}
                </button>
            </div>
            <span data-testid="error" 
                  style={{visibility: error ? "visible" : "hidden"}}>
                    Something Went Wrong
             </span>
           
        </form>
        </div>
    </div>
 
  )
}

export default LoginMock