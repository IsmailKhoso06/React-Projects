import React from 'react'

function Items({food}) {

    const handleOnClick = () => {
        console.log(`${food} being bought`)
    }

  return (
    <>
      <li className="list-group-item">{food}
      <button className='btn btn-info' style={{float:"right", color: "white"}}
      onClick={handleOnClick}
      >Buy</button>
      </li>
    </>
  )
}

export default Items
