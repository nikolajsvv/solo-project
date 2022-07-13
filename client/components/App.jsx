import React, { useState, useRef, useEffect } from 'react';
import Ingredients from './Ingredients.jsx';
import Header from './Header.jsx';
import RecipeList from './RecipeList.jsx';

// API KEY - 6f14c599b3mshe03f43b2a421a47p1f86d2jsnaa1788e43949


function App() {

  const searchRecipes = async (ingredients) => {
    const reponst = await fetch()
  }

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
      <Header/>
      <RecipeList/>
      {/* <input ref={itemNameRef}type='text'/>
      <button onClick={handleAddItem}>Add Item</button> */}
      <div className='flex-container'>
          <div className='ingredient-container'>
            <h2>What's in your fridge?</h2>
            <input  placeholder="Bacon"/>
            <button onClick={handleAddItem} >ADD TO LIST</button>
            <div className='ingredient-list'>
              <Ingredients ingredients={ingredients}/>
            </div>
          </div>

          <div className='recipe-container'>
            <h2>Recipes</h2>
          </div>
      </div>
    </>

  )
}


export default App;