
import "../style/en1.css"
import { motion } from "framer-motion"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function En1 () {

  

  const navigate = useNavigate();

  return(
    <div className="f12">
      <h1 className="s1">You are Super Cute ❤️</h1>
      <img className="c5" src="/images/img9.jpg" alt="" />
      <motion.p className="p1"
      initial={{opacity: 0, x: 400}}
      animate={{duration: 5, opacity: 1, x: 450}}
      >   What I love most is how you make moments meaningful without even trying.<br /> A simple conversation with you feels important.<br /> A small smile from you stays with me longer than it should. <br />You have this ability to make ordinary things feel warm, safe, and unforgettable.
      </motion.p>

      <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.2 }}
          className="b8"
          onClick={() => navigate("/surprise") }
        >
          BACK
        </motion.button>
    </div>

  )
}