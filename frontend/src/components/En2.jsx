import "../style/en2.css"
import { motion } from "framer-motion"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function En2 () {

 

  const navigate = useNavigate();

  return(
    <div className="f12">
      <h1 className="s1">You are so Special ❤️</h1>
      <img className="c5" src="/images/img6.png" alt="" />
      <motion.p className="p1"
      initial={{opacity: 0, x: 400}}
      animate={{duration: 5, opacity: 1, x: 450}}
      >   I admire the way you think, <br /> the way you understand things without needing explanations, <br />the way your silence can say more than most people’s words.<br /> You have this gentle strength about you. <br />You don’t demand attention, yet it naturally finds you. <br />You don’t try to be special, yet you are—effortlessly.
          
      </motion.p>
      <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.2 }}
          className="b7"
          onClick={() => navigate("/surprise") }
        >
          BACK
        </motion.button>
    </div>
  )
}