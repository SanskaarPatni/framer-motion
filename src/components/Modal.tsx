import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

type Props={
    showModal:boolean,
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const modal = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { 
      y: "200px", 
      opacity: 1,
      /*delay of 0.5s after screen gets dull*/
      transition: { delay: 0.5 }
    }, 
}


const Modal:React.FC<Props> = ({ showModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      { showModal && (
        <motion.div className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
            <motion.div className="modal"
                variants={modal}
                /*Does not require initial and animate uses the same structure as parent*/
            >
                <p>Want to make another Pizza?</p>
                <Link to="/">
                    <button>Start Again</button>
                </Link>
             </motion.div> 
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal