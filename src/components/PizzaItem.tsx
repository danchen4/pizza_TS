import React from 'react';
import PizzaCSS from './PizzaItem.module.css';
import { Pizza } from '../types';
import { AddToCartProps, withAddToCart } from '../hoc/withAddToCart';

interface PizzaProps extends AddToCartProps {
  pizza: Pizza;
}

const PizzaItem: React.FC<PizzaProps> = ({ pizza, addToCart }) => {
  const handleAddToCartClick = () => {
    addToCart({ id: pizza.id, name: pizza.name, price: pizza.price });
  };

  return (
    <li className={PizzaCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCartClick}>
        Add To Cart
      </button>
    </li>
  );
};

export default withAddToCart(PizzaItem);
