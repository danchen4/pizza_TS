import React from 'react';
import { ActionTypes, useStateDispatch } from '../context/AppState';
import { AddToCartProps } from '../hoc/AddToCart';

export const WithAddToCartProps: React.FC<{ children: (props: AddToCartProps) => JSX.Element }> = ({
  children,
}) => {
  const dispatch = useStateDispatch();

  const addToCart: AddToCartProps['addToCart'] = (item) => {
    dispatch({
      type: ActionTypes.AddToCart,
      payload: {
        item,
      },
    });
  };
  return children({ addToCart });
};
