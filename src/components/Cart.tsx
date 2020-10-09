import React, { Component, createRef } from 'react';
import CartCSS from './Cart.module.css';
import { FiShoppingCart } from 'react-icons/fi';
import { AppStateContext } from '../context/AppState';

interface Props {}

interface State {
  isOpen: boolean;
}

export class Cart extends Component<Props, State> {
  containerRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.state = { isOpen: false };
    this.containerRef = createRef();
  }

  cartToggleHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // Check to see if the element is an HTML element in order to acess HTML element
    if ((e.target as HTMLElement).nodeName === 'SPAN') {
      this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    }
  };

  handleOutsideClick = (e: MouseEvent) => {
    if (this.containerRef.current && !this.containerRef.current.contains(e.target as Node)) {
      this.setState({ isOpen: false });
    }
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }

  render() {
    return (
      <AppStateContext.Consumer>
        {(state) => {
          const itemsCount = state.cart.items.reduce((accumulator, item) => {
            return accumulator + item.quantity;
          }, 0);

          return (
            <div className={CartCSS.cartContainer} ref={this.containerRef}>
              <button className={CartCSS.button} type="button" onClick={this.cartToggleHandler}>
                <FiShoppingCart />
                <span>{itemsCount} pizza(s)</span>
              </button>
              <div
                className={CartCSS.cartDropDown}
                style={{ display: this.state.isOpen && state.cart.items.length ? 'block' : 'none' }}
              >
                <ul>
                  {state.cart.items.map((item) => {
                    return (
                      <li key={item.id}>
                        {item.name} x{item.quantity}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        }}
      </AppStateContext.Consumer>
    );
  }
}

export default Cart;
