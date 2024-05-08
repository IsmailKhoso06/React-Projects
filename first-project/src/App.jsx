import Container from "./components/Container";
import FoodItems from "./components/FoodItems";
import styles from "./App.module.css";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let vegetables = []

  let fullName = () => {
    return "Healthy Foods";
  };


  const [vegetables, setVegetables] = useState([
    "Green Vegetables",
    "Milk",
    "Eggs",
    "Olive Oil",
    "Apples",
  ]);
  
  const handleOnChange = (event) => {
    if(event.key === 'Enter'){
      let newFood = event.target.value;
      let newFoods = [...vegetables, newFood];
      setVegetables(newFoods);
      console.log("Entered Item is " + newFood)
    }

    // console.log(event.target.value);
    // setText(event.target.value);
  };

  
  return (
    <>
      <Container>
        <h1 className={styles.heading}>These are {fullName()}</h1>
        {vegetables.length === 0 && <h3>I am Still Hungry</h3>}
        <FoodInput handleOnChange={handleOnChange} />
        
        <FoodItems vegetables={vegetables} />
      </Container>
      <Container>
        <p>The Above container show cases the healthy foods in our Area</p>
      </Container>
    </>
  );
}

export default App;
