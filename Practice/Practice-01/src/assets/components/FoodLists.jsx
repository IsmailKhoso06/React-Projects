import React from 'react'
import Items from './Items'

function FoodLists({food}) {
  return (
    <>
        <ul className="list-group">
        {food.map((food, index) => (
            <Items key={index} food={food} />
        ))}
      </ul>

    
    </>
  )
}

export default FoodLists
