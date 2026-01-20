

import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";
import "../style/reject.css"

export default function Accept() {
const navigate = useNavigate();

  return(
    <div className="container1">

      <div className="t1">
        <img src="images/cat.gif" alt="" />
      </div>

      <div className="t15">
        <h1>HOW DARE YOU TO REJECT IT? 
          GO AND ACCEPT IT NOW</h1>
          <motion.button whileTap={{ scale: 0.9 }}
        whileHover={{scale: 1.2}} className="btn1" onClick={() => navigate("/next")}>okiee Going</motion.button>
      </div>

     
      
    </div>
  )
}