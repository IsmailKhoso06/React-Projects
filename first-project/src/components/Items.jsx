import React from 'react';
import styles from './Items.module.css';

function Items({vegetable}) {

  const handleOnClickBuy = (event) => {
    console.log(event)
    console.log(`${vegetable} is being bought`)
  }

  return (
    <>
     <li className="list-group-item">
            {vegetable}
            <button className={`${styles.buyBtn} btn btn-info`}
            onClick={(event) => handleOnClickBuy (event)}
            >Buy</button>
          </li>  
    </>
  )
}

export default Items
