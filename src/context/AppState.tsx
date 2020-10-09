import React, { createContext, useContext, useReducer, useEffect } from 'react';

/**
 * For State
 */

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface AppStateValue {
  cart: {
    items: CartItem[];
  };
}

const defaultStateValue: AppStateValue = {
  cart: {
    items: [],
  },
};

/**
 * For Reducer
 */

export enum ActionTypes {
  AddToCart,
  InitializeCart,
}

interface Action<T> {
  type: T;
}

interface AddToCartAction extends Action<ActionTypes.AddToCart> {
  payload: {
    item: Omit<CartItem, 'quantity' | '...'>; //ommitted quantity prop
  };
}

interface InitializeCartAction extends Action<ActionTypes.InitializeCart> {
  payload: {
    cart: AppStateValue['cart']; //Get just the 'cart' from interface AppStateValue
  };
}

type CartActions = AddToCartAction | InitializeCartAction;

const reducer = (state: AppStateValue, action: CartActions) => {
  if (action.type === ActionTypes.AddToCart) {
    const itemToAdd = action.payload.item;

    const itemExists = state.cart.items.find((item) => item.id === itemToAdd.id);
    return {
      ...state,
      cart: {
        ...state.cart,
        items: itemExists
          ? state.cart.items.map((item) => {
              if (item.id === itemToAdd.id) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            })
          : // : [...state.cart.items, itemToAdd], // No quantity here, so issue with ommitted quantity from AddToCartAction
            [...state.cart.items, { ...itemToAdd, quantity: 1 }],
      },
    };
  } else if (action.type === ActionTypes.InitializeCart) {
    return {
      ...state,
      cart: action.payload.cart,
    };
  }
  return state;
};

/**
 * Custom hook
 * Checks if dispatch (or setState) is undefined.
 * dispatch (or setState) can be undefined if it is called OUTSIDE of <AppSetStateContext.Provider>
 */
// export const useSetState = () => {
export const useDispatch = () => {
  // const setState = useContext(AppSetStateContext);
  const dispatch = useContext(AppDispatchContext);
  if (!dispatch) {
    throw new Error('useSetState was called outside of the AppSetStateContext provider');
  }
  return dispatch;
};

/**
 * Context API
 */
export const AppStateContext = createContext(defaultStateValue);

export const AppSetStateContext = createContext<
  React.Dispatch<React.SetStateAction<AppStateValue>> | undefined
>(undefined);

export const AppDispatchContext = createContext<React.Dispatch<AddToCartAction> | undefined>(
  undefined
);

/**
 * Functional Component
 */

const AppStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultStateValue);

  /**
   * Sequence of useEffect matters!
   */
  useEffect(() => {
    const cart = window.sessionStorage.getItem('cart');
    if (cart) {
      dispatch({
        type: ActionTypes.InitializeCart,
        payload: {
          cart: JSON.parse(cart),
        },
      });
    }
  }, []);

  // Since this writes to local storage, on refresh, state will be empty so will write a blank cart object to local storage
  useEffect(() => {
    window.sessionStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  /**
   * Use a second Context to share setState (or dispatch) for optmization purposes.  If using provider with state and setState, would need to send as object like value={{state,setState}}.
   * Therefore, everytime component re-renders, then a new reference to value object would be sent and all child components would re-render
   * By NOT sending an object, if the state object doesn't change, then same reference to state would be passed down and there would not be re-renders
   */
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
