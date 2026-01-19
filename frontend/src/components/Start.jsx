// import { Routes, Route } from "react-router-dom";
// import Message from "./Message";
// import Next from "./Next";
// import App from "../App";

// function Start() {
//   return (
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/next" element={<Next />} />
//       <Route path="/message" element={<Message />} />
//     </Routes>
//   );
// }

// export default Start;

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Message from "./Message";


import "../style/start.css"

function Start() {
  
  const [isDark, setIsDark] = useState(true);
  const [playAnim, setPlayAnim] = useState(false);

  const gsapimg = useRef();
  const gsapimg2 = useRef();
  const started = useRef(false);

  const handleTask = () => {
    setIsDark(prev => !prev) 
  }

   
  
  const gsap1 = () => {
  
    gsap.from(gsapimg.current,
   {  y: 1500,
    duration: 10,
    delay: 2,
    repeat: -1,
    ease: "linear",
   
    });

   

  
  }

 
  

  return (
    <>
    
    
    
    <motion.div className="page"
       animate={{
        backgroundPosition: isDark ? "0% 20%" : "100% 50%"
      }}
      
      transition={{
        duration: 5,
        ease: "easeInOut"
      }}
      >
         

         <Message play={playAnim} />

       
         

         <div ref={gsapimg} id="box">
        <img src="/images/picsart.png" alt="" /> 
      </div> 


      <motion.button className="btn"
        whileTap={{ scale: 0.9 }}
        whileHover={{scale: 1.2}}
        onClick={() => {
          handleTask();
          gsap1();
          setPlayAnim(true)
         }}
       
      >
        Light On
      </motion.button>



      
      
      
    </motion.div>
    
    </>
  );
}

export default Start;


