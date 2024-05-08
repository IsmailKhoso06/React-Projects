import React from 'react';
import { useState } from 'react';

function Items({food}) {

  
const [color, setColor] = useState("white");

    const handleOnClick = () => {
        console.log(`${food} being bought`);
        const xyz = color === 'white' ? 'red' : 'white' ;
        setColor(xyz);
    }

  return (
    <>
      <li className="list-group-item" style={{background: color}} >{food}
      <button className='btn btn-info' style={{float:"right", color: "white" }}
      onClick={handleOnClick}
      >Buy</button>
      </li>
    </>
  )
}

export default Items
