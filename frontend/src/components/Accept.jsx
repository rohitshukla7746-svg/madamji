





import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion, useAnimation } from "framer-motion";
import "../style/accept.css";

export default function Reject() {

  // cake image
  const [image, setImage] = useState("images/c1.png");

  // cake visibility
  const [showCake, setShowCake] = useState(false);
  

  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const musicRef = useRef(null);
  const navigate = useNavigate();
  const control = useAnimation();
  

  /* ---------------- CAKE ANIMATION ---------------- */
  useGSAP(() => {
    if (showCake) {
      gsap.fromTo(
        imgRef.current,
        { y: -1000, opacity: 0, scale: 0.5 },
        {
          y: -80,
          opacity: 1,
          scale: 1,
          duration: 4,
          ease: "power3.out",
        }
      );
    }
  }, [showCake]);

  /* ---------------- DECOR ANIMATION ---------------- */
  useGSAP(() => {
    gsap.from(".decor", {
      y: -1000,
      duration: 2,
    });
  });
  

  
  
  

  /* ---------------- BUTTON ACTIONS ---------------- */

  const orderCake = () => {
    setShowCake(true);
  };

  const blowCandle = () => {
    setImage("images/c2.png");
   

    

    // burst of balloons
    // for (let i = 0; i < 12; i++) {
    //   createBalloon();
    // }
  };

  const handleBackground = () => {
    control.start({
      opacity: 1,
      y: 50,
      transition: { duration: 1.6, ease: "easeOut"}
    });
  };
  

  const playMusic = () => {
    musicRef.current.currentTime = 0;
    musicRef.current.play();
   }

  return (
    <div className="container1" ref={containerRef}>

      {/* CAKE */}
      {showCake && (
        <img
          ref={imgRef}
          src={image}
          alt="cake"
          className="cake-img"
        />
      )}


   
     { /* -------text------*/}


     

      {/* DECOR */}
      <img src="images/h4.png" className="decor" alt="" />
      
      <audio ref={musicRef} src="music/m4.m4a" />

      {/* BUTTONS */}
      <div className="d1">

        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.2 }}
          className="b2"
          onClick={orderCake}
        >
          🎂 1.ORDER CAKE
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.2 }}
          className="b3"
          onClick={playMusic}
          disabled={!showCake}
        >
          🎵 2.PLAY MUSIC
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.2 }}
          className="b1"
          onClick={() => {
             blowCandle();
            handleBackground();
            handleBalloons();
          }
          }
          disabled={!showCake}
        >
          💨 3.BLOW CANDLE
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.2 }}
          className="b4"
          onClick={() => navigate("/newmsg")}
          disabled={!showCake}
        >
          4. A Message for u
        </motion.button> 

       

      </div>
      <motion.div
      initial={{opacity: 0, y: 1000}} 
      animate={control}
      className="c12">
       <h1 className="t12">Happiest birthday my cutu  💕 </h1> 

       
        </motion.div>
    </div>
  );
}

