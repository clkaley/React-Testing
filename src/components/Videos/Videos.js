import React from 'react'
import '../../../src/App.css';


const Videos = ({videos=[ ]}) => {

    if(videos.length<=0){
        return <h1>Sorry, no videos item found </h1>
    }

  return (
    <div className='App'>
        {videos.map((video,i)=>
            <h3 key={i}>{video}</h3>
        )}
    </div>
  )
}

export default Videos