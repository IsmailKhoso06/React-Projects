import React from 'react'

function WelcomeMessage({onGetClick}) {
  return (
    <>
    <center style={{margin:"100px 0px"}}>
        <h1>There are no Posts</h1>
        <button type='button' className='btn btn-primary my-3'
        onClick={onGetClick}
        ><b>Get Posts from Server</b></button>
    </center>  
    </>
  )
}

export default WelcomeMessage
