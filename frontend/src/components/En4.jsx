import "../style/en2.css"
import { motion } from "framer-motion"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function En2 () {

  

  const navigate = useNavigate();

  return(
    <div className="f12">
      <h1 className="s1">Be your self ❤️</h1>
      <img className="c5" src="/images/img5.jpg" alt="" />
      <motion.p className="p1"
      initial={{opacity: 0, x: 400}}
      animate={{duration: 5, opacity: 1, x: 450}}
      > 
          Being connected to you feels natural, <br />like something that was meant to happen quietly, without force.<br /> And if I’m honest, knowing you has changed <br />the way I look at people, at love, at life. <br />You’ve reminded me that the most beautiful things aren’t always seen—they’re felt.<br /><br />

          If I ever seem lost in thought around you, <br />it’s because I’m grateful.<br /> Grateful that someone like you exists. <br />Grateful that our paths crossed. And grateful for every moment<br />, big or small, that I get to share with you.<br />
          
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