import React from 'react';
import {motion} from 'framer-motion'
import {pizza} from '../App'

type Props={
  pizza: pizza
}
/*Advantage of using variants orchestration property*/
const containerVariants = {
  hidden: { 
    opacity: 0, 
    x: '100vw',
    transition: {
      staggerChildren: 0.5,
    } 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: 'spring',
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: "beforeChildren",
    }
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  }
}

const Order = ( {pizza}: Props ) => {
  return (
    <motion.div className="container order"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <h2>Thank you for your order :)</h2>
    <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
    <motion.div variants={childVariants}>
      {pizza.toppings.map(topping => <div key={topping} >{topping}</div>)}
    </motion.div>
    
  </motion.div>
  )
}

export default Order;
