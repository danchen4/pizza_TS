import React from 'react';
import { useAddToCart } from '../hook/useAddToCart';
import { Pizza } from '../types';
import SpecialOfferHookCSS from './SpecialOfferHook.module.css';

interface Props {
  pizza: Pizza;
}

/**
 * Using a Render Prop WithAddToCartProps
 *
 */

export const SpecialOfferHook: React.FC<Props> = ({ pizza }) => {
  const addToCart = useAddToCart();

  const handleAddToCartClick = () => {
    addToCart({ id: pizza.id, name: pizza.name, price: pizza.price });
  };

  return (
    <div className={SpecialOfferHookCSS.container}>
      <h3>with custom Hook</h3>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>

      <button type="button" onClick={handleAddToCartClick}>
        Add To Cart
      </button>
    </div>
  );
};

export default SpecialOfferHook;
