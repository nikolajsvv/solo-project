import React from 'react';

class Recipe extends React.Component {
  render () {
    const recipeName = this.props.recipe_name;
    const recipeURL = this.props.recipeURL;

    let counter = recipeName.length;
    return (

        <div className='recipe'>
          <a href={recipeURL}><h3>{recipeName}</h3></a>
          <iframe src={recipeURL} title='Recipe'></iframe>
        </div>

    );
  }
}

export default Recipe;