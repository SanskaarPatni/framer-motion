import React from 'react';
import { Link } from 'react-router-dom';
import {pizza} from '../App'
import {motion} from 'framer-motion'
type Props={
  addBase:(base:string)=>void,
  pizza:pizza
}

const Base:React.FC<Props> = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
  return (
    <motion.div className="base container"
    initial={{ opacity: 0, x: '100vw' }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ type: 'spring', delay: 0.5 }}
  >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <Link to="/toppings">
          <button>Next</button>
        </Link>
      </motion.div>
      )}
    </motion.div>
  )
}

export default Base;

