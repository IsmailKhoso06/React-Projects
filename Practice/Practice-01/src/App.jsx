import React from 'react'
import FoodLists from './assets/components/FoodLists';
import Container from './assets/components/Container';
import Input from './assets/components/Input';
import {useState} from 'react';


function App (){

  let Heading = "Healthy Foods"; 

  let foods = [
    "Apple",
    "Milk",
    "Green Vegetables",
    "Fresh Foods",
    "Olive Oil"
  ]

  const [text, setText] = useState("Hello Wo");

  const handleOnChange = (event) =>{
    setText(event.target.value)
}


  return(
    <div style={{display:"flex"}}>
    <Container>
        <h1 style={{textAlign:"center"}}>These are {Heading} </h1>
        <Input xyz={handleOnChange}/>
        <p>{text}</p>
        <FoodLists food={foods} />
    </Container>
    <Container>
      <p>The mentioned foods are healthy... <br/>
      Our Reasearch is Authenticated ✅</p>
    </Container>
    </div>

  )
}

export default App;