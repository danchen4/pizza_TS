import React from 'react';
// import { ActionTypes, useStateDispatch } from '../context/AppState';
// import { AddToCartProps } from '../hoc/AddToCart';
import { WithAddToCartProps } from '../renderprops/WithAddToCartProps';
import { Pizza } from '../types';
import SpecialOfferCSS from './SpecialOffer.module.css';

interface Props {
  pizza: Pizza;
}

/**
 * Using a Render Prop WithAddToCartProps
 *
 */

export const SpecialOffer: React.FC<Props> = ({ pizza }) => {
  return (
    <div className={SpecialOfferCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <WithAddToCartProps>
        {({ addToCart }) => {
          return (
            <button
              type="button"
              onClick={() => addToCart({ id: pizza.id, name: pizza.name, price: pizza.price })}
            >
              Add To Cart
            </button>
          );
        }}
      </WithAddToCartProps>
    </div>
  );
};

export default SpecialOffer;
