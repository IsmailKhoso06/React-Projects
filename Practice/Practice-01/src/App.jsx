import React from 'react'
import FoodLists from './assets/components/FoodLists';
import Container from './assets/components/Container';
import Input from './assets/components/Input';
import {useState} from 'react';


function App (){

  let Heading = "Healthy Foods"; 


  const [foods, setText] = useState([
    "Apple",
    "Milk",
    "Green Vegetables",
    "Fresh Foods",
    "Olive Oil"
  ]);

  const handleOnChange = (event) =>{
    if(event.key === "Enter"){
      let newFood = event.target.value;
      let newLi = [...foods, newFood];
    setText(newLi);
    }
}

const [bg, setBg] = useState("");

const onClickBG = () =>{
  if(bg === "white"){
    setBg("green");
  }else{
    setBg("white");
  }
}


  return(
    <div style={{display:"flex", background: bg}}>
    <Container>
        <h1 style={{textAlign:"center"}}>These are {Heading} </h1>
        <Input xyz={handleOnChange}/>
        <FoodLists food={foods} />
    </Container>
    <Container>
      <p>The mentioned foods are healthy... <br/>
      Our Reasearch is Authenticated ✅</p>
      <button onClick={onClickBG} style={{background: "transparent", border: "none", backgroundColor: "red", padding: "10px 24px", color: "white", fontWeight: "800", letterSpacing: "2px", float: "right"}}>ChangeBG</button>
     
    </Container>
    </div>

  )
}

export default App;