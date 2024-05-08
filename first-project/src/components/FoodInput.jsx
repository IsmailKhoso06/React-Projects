import React from 'react';
import styles from './FoodInput.module.css';

function FoodInput({handleOnChange}) {
  
  return (
    <>
      <input type='text' placeholder='Enter Food Item Here' className={styles.input}
        onKeyDown={handleOnChange}
      />
    </>
  )
}

export default FoodInput
