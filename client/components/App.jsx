import React, { useState, useRef } from 'react';
import Ingredients from './Ingredients.jsx';

function App() {
  // destructure stat
  // ingredients represents all ingredients inside of state, setIngredients is the function to update ingredients
  const [ingredients, setIngredients] = useState([])
  // gives access to the input element
  const itemNameRef = useRef(); 

  // event listener for cliking button
  function handleAddItem() {
    // value of our input
    const item = itemNameRef.current.value
    if (item === '') return
    setIngredients(prevItem => {
      return [...prevItem, item]
    })
    // restores input field to '' once clicked
    itemNameRef.current.value = null;
  }

  return (
    <>
      <input ref={itemNameRef}type='text'/>
      <button onClick={handleAddItem}>Add Item</button>
      <div className='ingredient-container'>
        <h3>Ingredient List</h3>
      </div>
      <div className='ingredient-list'>
        <Ingredients ingredients={ingredients}/>
      </div>
    </>

  )
}


export default App;