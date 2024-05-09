import { useState } from 'react';
import styles from './components/App.module.css'



function App() {

  const [calVal, setCalVal] = useState("");

   const handleOnClick = (event) => {
    if (event.target.innerHTML === "C") {
      setCalVal("");
    } else if(event.target.innerHTML === "="){
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const setNewDisplayValue = calVal + event.target.innerHTML;
      setCalVal(setNewDisplayValue);
    }
   }


  const calculatorButtons = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '0', value: '0' },
    { label: '+', value: '+', className: 'operator' },
    { label: '-', value: '-', className: 'operator' },
    { label: '*', value: '*', className: 'operator' },
    { label: '÷', value: '/', className: 'operator' },
    { label: '=', value: '=', className: 'equal' },
    { label: 'C', value: 'clear', className: 'clear' }
  ];
  

  return (
    <>
    <center>
      <div className={styles.calculator}>
        <input className={styles.display} type='text' placeholder='0' value={calVal} readOnly/>
        <div className={styles.buttonsContainer}>
        {calculatorButtons.map(button => (
        <button key={button.value} className={`button ${button.className || ''}`} onClick={handleOnClick}>
          {button.label}
        </button>
      ))}
        </div>
      </div>
      </center>
    </>
  )
}

export default App
