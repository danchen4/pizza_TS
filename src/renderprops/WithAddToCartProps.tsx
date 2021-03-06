import React from 'react';
import { ActionTypes, useDispatch } from '../context/AppState';
import { AddToCartProps } from '../hoc/withAddToCart';

export const WithAddToCartProps: React.FC<{ children: (props: AddToCartProps) => JSX.Element }> = ({
  children,
}) => {
  const dispatch = useDispatch();

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
