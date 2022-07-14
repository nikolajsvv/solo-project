import React from 'react';
import Item from './Item.jsx'

function Ingredients(props) {

  const {ingredients} = props

  return (
    ingredients.map(ingredient => {
      return <Item key={ingredient} ingredient={ingredient} />;
    })
  )
}

export default Ingredients;