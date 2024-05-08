import React from 'react'

function Versity({versity}) {
    const handleOnClick = () => {
        alert(`You are redirecting to the website of ${versity}. Please wait a while...`)
    }
  return (
    <>
       <li className="list-group-item" style={{fontSize:"20px"}}>{versity}
       <button className='btn btn-warning' style={{float: "right"}}
       onClick={handleOnClick}
       >Details</button>
       </li>
       
    </>
  )
}

export default Versity
