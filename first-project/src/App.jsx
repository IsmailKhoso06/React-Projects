import Container from "./components/Container";
import FoodItems from "./components/FoodItems";
import styles from "./App.module.css";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let vegetables = []
  const vegetables = [
    "Green Vegetables",
    "Milk",
    "Eggs",
    "Olive Oil",
    "Apples",
  ];

  let fullName = () => {
    return "Healthy Foods";
  };

  const [text, setText] = useState("Hello World");
  
  const handleOnChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };
  
  return (
    <>
      <Container>
        <h1 className={styles.heading}>These are {fullName()}</h1>
        {vegetables.length === 0 && <h3>I am Still Hungry</h3>}
        <FoodInput handleOnChange={handleOnChange} />
        <p>{text}</p>
        <FoodItems vegetables={vegetables} />
      </Container>
      <Container>
        <p>The Above container show cases the healthy foods in our Area</p>
      </Container>
    </>
  );
}

export default App;
