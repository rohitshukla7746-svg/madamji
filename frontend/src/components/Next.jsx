
// import { useRef } from "react";
// import gsap from "gsap";
// import "../style/next.css"
// function Next() {

//   //  const flower = useRef(null);
//   //  const musicref = useRef(null);

//   //  const Giveflower = () => {
//   //   gsap.from()
//   //  }

   
//   return (
//     <>
//     <div className="container">
     
//      <div  className="f1">
//       <img src="/cute-cat-flower-cat.gif" alt="" />
//      </div>
      
//     </div>
//     </>
    
//   );
// }

// export default Next;

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import "../style/next.css";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

function Next() {
  const catRef = useRef(null);
  const tRef= useRef(null);
  const navigate = useNavigate();
  

  useGSAP(() => {
    gsap.from(catRef.current.children, {
      
          y: 1500,
          duration: 2,
          stagger: 0.5,
          ease: "power1.inOut",
     
    })

    gsap.from(tRef.current, {
      
      y: 1500,
      duration: 4,
      stagger: 0.5,
      ease: "power1.inOut",
 
})
  })

  return (
   
    <div className="container">
      
       <div ref={catRef} className="f1" >
       <img src="/images/cute-cat-flower-cat.gif" alt="\" />
       
       <motion.button whileTap={{ scale: 0.9 }}
         whileHover={{scale: 1.2}}
         className="btn3" onClick={() => navigate("/accept")} >
               ACCEPT
      </motion.button>

       <motion.button whileTap={{ scale: 0.9 }}
        whileHover={{scale: 1.2}} 
        className="btn4" onClick={() => navigate("/reject")}>
          REJECT
      </motion.button>

       </div>

    <div ref={tRef} className="t1">
    <h1>Flowes For You. </h1>
    </div>

    </div>
   
  );
}

export default Next;

