import React from 'react'

function Input({xyz}) {
   
  return (
    <>
      <input type='text' placeholder='Enter Food Item Here' style={{width: "100%", margin: "10px 0px", padding: "10px", borderRadius: "10px"}}
        onChange={xyz}
      />
    </>
  )
}

export default Input
