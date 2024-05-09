import React, { useState } from "react";
import Head from "./components/Head";
import TodoItems from "./components/TodoItems";

function App() {

  let items = [
    "To Read Book",
    "Tuition HomeWork"
  ]

  let Name = "To Do App";

  const [TodoItems, setTodoItems] = useState(Items)
  

  const [toDoName, setTodoName] = useState();
  const [date, setDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value)
  };

  const handleDateChange = (event) => {
    setDate(event.target.value)
  };
 
  const handleAddBtnClicked = () => {
      onNewItem(toDoName, date)
  }

  return (
    <>
        <div className="container">
          <h1 className="my-5" style={{textAlign:"center"}}>{Name}</h1>
          <Head handleNameChange={handleNameChange} handleDateChange={handleDateChange} handleAddBtnClicked={handleAddBtnClicked}/>
          <TodoItems/>
      </div>
    </>
  );
}

export default App;
