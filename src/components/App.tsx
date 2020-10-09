import React from 'react';
import pizzas from '../data/pizzas.json';
import PizzaItem from './PizzaItem';
import { PizzaLogo } from '../icons/PizzaLogo';
import { Cart } from './Cart';
import AppStateProvider from '../context/AppState';
import SpecialOffer from './SpecialOffer';
import AppCSS from './App.module.css';
import { SpecialOfferHook } from './SpecialOfferHook';

function App() {
  // Because specialOfferPizza is of type {pizza} | undefined, need to check if it is defined first (see below with &&)
  const specialOfferPizza = pizzas.find((pizza) => pizza.specialOffer); //find pizza where specialOffer = true;

  return (
    <AppStateProvider>
      <div className={AppCSS.container}>
        <div className={AppCSS.header}>
          <PizzaLogo width="120px" height="120px" />
          <div className={AppCSS.siteTitle}>Delicious Pizza</div>
          <Cart />
        </div>

        <ul className={AppCSS.pizzaList}>
          {specialOfferPizza && <SpecialOffer pizza={specialOfferPizza} />}
          {specialOfferPizza && <SpecialOfferHook pizza={specialOfferPizza} />}
          {pizzas.map((pizza) => {
            return <PizzaItem key={pizza.id} pizza={pizza} />;
          })}
        </ul>
      </div>
    </AppStateProvider>
  );
}

export default App;
