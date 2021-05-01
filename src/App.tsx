import React, { useState } from 'react';
import {Route, Switch,useLocation} from 'react-router-dom'
import Home from './components/Home';
import Base from './components/Base'
import Toppings from './components/Toppings';
import Order from './components/Order'
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';

export type pizza={
  base:string,
  toppings:string[]
}

function App() {
  const location = useLocation();
  const [pizza, setPizza] = useState({base:"",toppings:[]} as pizza)
  
  const addBase = (base: string) => {
    setPizza({ ...pizza, base })
  }

  const addTopping = (topping:string) => {
    let newToppings:string[];
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (
    <>
    <Navbar />
    <AnimatePresence exitBeforeEnter>
    <Switch location={location} key={location.key}>
      <Route path="/base">
        <Base addBase={addBase} pizza={pizza} />
      </Route>
      <Route path="/toppings">
        <Toppings addTopping={addTopping} pizza={pizza} />
      </Route>
      <Route path="/order">
        <Order pizza={pizza} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </AnimatePresence>
  </>
  );
}

export default App;
