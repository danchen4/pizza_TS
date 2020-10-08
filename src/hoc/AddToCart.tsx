import React from 'react';
import { ActionTypes, CartItem, useStateDispatch } from '../context/AppState';

export interface AddToCartProps {
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

/**
 * HOC
 * OriginalProps - parameter is used for the props of ChildComponent
 */
export function withAddToCart<OriginalProps extends AddToCartProps>(
  ChildComponent: React.ComponentType<OriginalProps>
) {
  const AddToCartHOC = (props: Omit<OriginalProps, keyof AddToCartProps>) => {
    const dispatch = useStateDispatch();

    const handleAddToCartClick: AddToCartProps['addToCart'] = (item) => {
      dispatch({
        type: ActionTypes.AddToCart,
        payload: {
          item,
        },
      });
    };

    return <ChildComponent {...(props as OriginalProps)} addToCart={handleAddToCartClick} />;
  };

  return AddToCartHOC;
}
