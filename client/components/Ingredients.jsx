import React from 'react';
import Item from './Item.jsx'

export default function Ingredients({ingredients}) {
  return (
    ingredients.map(ingredient => {
      return <Item key={ingredient} ingredient={ingredient} />;
    })
  )
}