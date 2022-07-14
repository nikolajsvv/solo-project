import React, { useState, useRef, useEffect } from 'react';
import Ingredients from './Ingredients.jsx';
import Header from './Header.jsx';
import RecipeList from './RecipeList.jsx';

// API KEY - 6f14c599b3mshe03f43b2a421a47p1f86d2jsnaa1788e43949



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [], 
      recipes: []
    };

    // bind handleAddIngredient to make 'this' work in the callback
    // ----> dont need this because used anonymous function for handleAddIngredient
    this.handleAddIngredient = this.handleAddIngredient.bind(this);
    this.handleGetRecipe = this.handleGetRecipe.bind(this);
  }

  // Whenever APP is rendered to the DOM
  componentDidMount() {
    // not sure what we will do here yet
  }

  handleGetRecipe(event) {
    const ingredientArr = this.state.ingredients;
    // const tempObj = 
    //   {
    //     "status": "ok",
    //     "ingredients": [
    //         "eggs",
    //         "bacon",
    //         "black pepper"
    //     ],
    //     "recipe_name": [
    //         "Crispy Oven Bacon and Eggs",
    //         "Pepper Egg-in-a-Hole",
    //         "Foolproof Eggs Benedict Recipe"
    //     ],
    //     "recipe_url": [
    //         "https://cooking.nytimes.com/recipes/1021747-crispy-oven-bacon-and-eggs",
    //         "https://www.delish.com/cooking/recipe-ideas/recipes/a51522/pepper-egg-in-a-hole-recipe/",
    //         "https://www.seriouseats.com/food-lab-foolproof-eggs-benedict-recipe"
    //     ]
    // }
    
    // converts to string format for URL
    const ingredientStr = ingredientArr.join('%2C')
    // this.setState(prevState => ({
    //   recipes: [...prevState.recipes, tempObj]
    // }))
    
  
    const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6f14c599b3mshe03f43b2a421a47p1f86d2jsnaa1788e43949',
      'X-RapidAPI-Host': 'tastyworld.p.rapidapi.com'
      }
    };
    fetch(`https://tastyworld.p.rapidapi.com/v1/suggest_recipe?ingredients=${ingredientStr}&limit=1`, options)
    .then(response => response.json())
    .then(response => {
          this.setState(prevState => ({
            recipes: [...prevState.recipes, response]
          }))
          console.log(response)
        })
    .catch(err => console.error(err));
    }

  // () => ensures 'this' is bound within handleAddIngredient
  handleAddIngredient(event) {
    // store value of input
    const item = document.getElementById('itemInput').value;
    const ingredients = this.state.ingredients;
    let itemExists = false;

    if (item === '') return;
    // check if value exists in state.ingredients
    ingredients.forEach((ingredient) => {
      //  if exists, alert that cannot accept duplicate values
      if (item === ingredient) {
        itemExists = true;
      }
    })

    // if item doesn't exist, add to state.ingredients
    if (!itemExists) {
      this.setState(prevState => ({
        ingredients: [...prevState.ingredients, item.toLowerCase()]
      }))
      document.getElementById('itemInput').value = '';
    // otherwise return nothing/console log
    } else {
      console.log('This item already exists in your ingredients list');
      document.getElementById('itemInput').value = '';
    }
    console.log(ingredients)
    // set the input value to '' after handleclick event
  }


  render () {
    return (
      <>
        <Header/>

        <div className='flex-container'>
            <div className='ingredient-container'>
              <h2>What's in your fridge?</h2>
              <div className='ingredient-list'>
                <Ingredients ingredients={this.state.ingredients}/>
              </div>
              <input type='text' value={this.state.value} id='itemInput' placeholder="Enter Item"/>
              <button onClick={this.handleAddIngredient}>ADD TO LIST</button>
            </div>

            <div className='recipe-container'>
              <div className='recipe-header'>
                <button onClick={this.handleGetRecipe}>Get Recipes</button>
              </div>
              <div className='recipe-list'>
                <RecipeList recipes={this.state.recipes} handleGetRecipe={this.handleGetRecipe}/>
              </div>
            </div>
        </div>
      </>
    );
  }
}

// function App() {

//   const searchRecipes = async (ingredients) => {
//     const reponst = await fetch()
//   }

//   // destructure stat
//   const [ingredients, setIngredients] = useState([])
//   // gives access to the input element
//   const itemNameRef = useRef(); 

//   // event listener for cliking button
//   function handleAddItem() {
//     // value of our input
//     const item = itemNameRef.current.value
//     if (item === '') return
//     if (item in ingredients) {
//       alert(`${item} is already in your list!`)
//     }
//     setIngredients(prevItem => {
//       return [...prevItem, item]
//     })
//     // restores input field to '' once clicked
//     itemNameRef.current.value = null;
//     console.log(ingredients)
//   }
  
//   function handleGetRecipe() {
//     callAPI();
//   }
  
//   const callAPI = () => {
//     const ingredientStr = this.state.ingredients.split('%2C')
//     // const options = {
//     //   method: 'GET',
//     //   headers: {
//     //     'X-RapidAPI-Key': '6f14c599b3mshe03f43b2a421a47p1f86d2jsnaa1788e43949',
//     //     'X-RapidAPI-Host': 'tastyworld.p.rapidapi.com'
//     //   }
//     // };
//     // fetch(`https://tastyworld.p.rapidapi.com/v1/suggest_recipe?ingredients=${ingredientStr}&limit=3`, options)
//     //   .then(response => response.json())
//     //   .then(response => console.log(response))
//     //   .catch(err => console.error(err));
//     console.log(ingredientStr);
//   }

//   return (
//     <>
//       <Header/>
//       <RecipeList/>
//       {/* <input ref={itemNameRef}type='text'/>
//       <button onClick={handleAddItem}>Add Item</button> */}
//       <div className='flex-container'>
//           <div className='ingredient-container'>
//             <h2>What's in your fridge?</h2>
//             <div className='ingredient-list'>
//               <Ingredients ingredients={ingredients}/>
//             </div>
//             <input ref={itemNameRef} type='text' placeholder="Bacon"/>
//             <button onClick={handleAddItem}>ADD TO LIST</button>
//           </div>

//           <div className='recipe-container'>
//             <div className='recipe-header'>
//               <button onClick={handleGetRecipe}>Get Recipes</button>
//             </div>
//           </div>
//       </div>
//     </>

//   )
// }


export default App;