import React from 'react';
import { Link } from 'react-router-dom';
import {pizza} from '../App'
import {motion} from 'framer-motion'
type Props={
  addBase:(base:string)=>void,
  pizza:pizza
}

const containerVariants = {
  hidden: { 
    opacity: 0, 
    x: '100vw' 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', delay: 0.5 }
  },
};

const nextVariants = {
  hidden: { 
    x: '-100vw' 
  },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 120 }
  } 
}

const Base:React.FC<Props> = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
  return (
    <motion.div className="base container"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
            whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
            transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
        /*2nd advantage of using variants: takes the same structure as the parent i.e hidden for initial,etc but from the nextVarient*/
        variants={nextVariants}

      >
        <Link to="/toppings">
        <motion.button 
          whileHover={{
          scale:1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        >
        Next
        </motion.button>
        </Link>
      </motion.div>
      )}
    </motion.div>
  );
}
export default Base;

