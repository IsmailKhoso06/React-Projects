import React from 'react';
import styles from './Items.module.css';
import { useState } from 'react';

function Items({vegetable}) {

  const [liBg, setLiBg] = useState('white');

  const handleOnClickBuy = () => {
    const newBgColor = liBg === 'white' ? 'red' : 'white';
    setLiBg(newBgColor);
  }

  return (
    <>
     <li className="list-group-item" style={{background: liBg }}>
            {vegetable}
            <button className={`${styles.buyBtn} btn btn-info`}
            onClick={handleOnClickBuy}
            >Buy</button>
          </li>  
    </>
  )
}

export default Items
