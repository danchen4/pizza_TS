import { useDispatch, ActionTypes } from '../context/AppState';
import { AddToCartProps } from '../hoc/withAddToCart';

export const useAddToCart = () => {
  const dispatch = useDispatch();

  const addToCart: AddToCartProps['addToCart'] = (item) => {
    dispatch({
      type: ActionTypes.AddToCart,
      payload: {
        item,
      },
    });
  };

  return addToCart;
};
