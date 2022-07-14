import React from 'react';
import Recipe from './Recipe.jsx';

class RecipeList extends React.Component {
  render() {

    const {recipes} = this.props;
    let recipe;
    let count = 0;

    // if (recipes.length === 0) {
    //   recipe = null;
    // } else {
    //   count = recipes.length;
    //   recipe = <Recipe recipe_name={recipes[0].recipe_name} recipeURL={recipes[0].recipe_url[0]}/>
    // }

    return (
      recipes.map(recipe => {
        return <Recipe key={recipe.recipe_name} recipe_name={recipe.recipe_name} recipeURL={recipe.recipe_url}/>
      })
    )
  }
}

export default RecipeList;