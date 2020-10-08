import React from 'react';
// import { /*useSetState, useStateDispatch */} from '../context/AppState';
import PizzaCSS from './PizzaItem.module.css';
// import { ActionTypes } from '../context/AppState';
import { Pizza } from '../types';
import { AddToCartProps, withAddToCart } from '../hoc/AddToCart';

interface PizzaProps extends AddToCartProps {
  pizza: Pizza;
}

const PizzaItem: React.FC<PizzaProps> = ({ pizza, addToCart }) => {
  // Now using custom hook that will check if setState is undefined to remove some code
  // const dispatch = useStateDispatch();

  const handleAddToCartClick = () => {
    // dispatch({
    //   type: ActionTypes.AddToCart,
    //   payload: {
    //     item: { id: pizza.id, name: pizza.name, price: pizza.price },
    //   },
    // });
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
