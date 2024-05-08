import React from 'react';
import Items from './Items'
function FoodItems({vegetables}) {

  return (
    <>
      <ul  className="list-group">
        {vegetables.map((vegetable, index) => (
         <Items key={index} vegetable={vegetable}/>
        ))}
      </ul>
    </>
  )
}

export default FoodItems;
