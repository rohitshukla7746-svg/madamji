import "../style/en2.css"
import { motion } from "framer-motion"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function En2 () {

  
  const navigate = useNavigate();

  return(
    <div className="f12">
      <h1 className="s1">Are you Magician?? Cause iykyk ❤️</h1>
      <img className="c5" src="/images/img8.png" alt="" />
      <motion.p className="p1"
      initial={{opacity: 0, x: 400}}
      animate={{duration: 5, opacity: 1, x: 450}}
      > 
          I want you to know something that <br />I don’t say enough. <br />What draws me to you isn’t<br /> how you look, but how you feel.<br /> It’s the way your presence quietly changes the atmosphere around me.<br /> When you’re near, things feel calmer, softer,<br /> more real—like the world slows down just enough for me to breathe properly.
          
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