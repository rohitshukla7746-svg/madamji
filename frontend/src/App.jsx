// import { useEffect, useState, useRef } from "react";
// import { Routes, Route } from "react-router-dom";
// import { useGSAP} from "@gsap/react"
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import Message from "./components/Message";
// import Next from "./components/Next";

// import "./App.css"

// function App() {
  
//   const [isDark, setIsDark] = useState(true);
//   const [playAnim, setPlayAnim] = useState(false);

//   const gsapimg = useRef();
//   const started = useRef(false);

//   const handleTask = () => {
//     setIsDark(prev => !prev) 
//   }

   
  
//   const gsap1 = () => {
  
//     gsap.from(gsapimg.current,
//    {  y: 1500,
//     duration: 10,
//     delay: 2,
//     repeat: -1,
//     ease: "linear",
   
//     });

  
//   }

 
  

//   return (
//     <>
    
    
//     <Routes>
          
//           <Route path="/next" element={<Next />}/>
//          </Routes>
//     <motion.div className="page"
//        animate={{
//         backgroundPosition: isDark ? "0% 20%" : "100% 50%"
//       }}
      
//       transition={{
//         duration: 5,
//         ease: "easeInOut"
//       }}
//       >
         

//          <Message play={playAnim} />



//          <div ref={gsapimg} id="box">
//         <img src="/images/adobe22.png" alt="" /> 
//       </div> 


//       <motion.button className="btn"
//         whileTap={{ scale: 0.9 }}
//         whileHover={{scale: 1.2}}
//         onClick={() => {
//           handleTask();
//           gsap1();
//           setPlayAnim(true)
//          }}
       
//       >
//         Light On
//       </motion.button>



      
      
      
//     </motion.div>
    
//     </>
//   );
// }

// export default App;





import { Routes, Route } from "react-router-dom";
import Next from "./components/Next";
import Start from "./components/Start"
import HeartCursor from "./components/HeartCursor";
import Accept from "./components/Accept";
import Reject from "./components/Reject";
import NewMsg from "./components/NewMsg";
import Surprise from "./components/Surprise";
import En1 from "./components/En1";
import En2 from "./components/En2";
import En3 from "./components/En3";
import En4 from "./components/En4";
import Moon from "./components/Moon";
import Gift from "./components/Gift";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/next" element={<Next />} />
      <Route path="/accept" element={<Accept />}/>
      <Route path="/reject" element={<Reject />}/>
      <Route path="/newmsg" element={<NewMsg />}/>
      <Route path="/surprise" element={<Surprise />}/>
      <Route path="/en1" element={<En1 />}/>
      <Route path="/en2" element={<En2 />}/>
      <Route path="/en3" element={<En3 />}/>
      <Route path="/en4" element={<En4 />}/>
      <Route path="/moon" element={<Moon />}/>
      <Route path="/gift" element={<Gift />}/>

      
    </Routes>

    <HeartCursor />
    
    </>
  );
}

export default App;