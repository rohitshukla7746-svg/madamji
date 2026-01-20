

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import "../style/moon.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Moon() {

  const audioRef = useRef(null);

  const navigate = useNavigate();

  const control = useAnimation();
  const control2 = useAnimation();

  const [index, setIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  const lines = [
    "Hello, Moon",
    "You can",
    "Find me when your family hurts you",
    "Find me when your friends let you down",
    "Find me when the world feels too heavy to carry alone ",
    "When your heart feels like it's breaking,",
    "When you're tired of being strong,",
    "When silence gets loud and no one seems to hear you",
    "Find me I'll always's be here no matter what.",
    "I'll sit with you in dark",
    "I'll remind you of your light",
    "And I'll try my best to bring",
    "back your smile, piece by piece",
    "You're never a burden to me.",
    "Happiest Birthday ❤️",
    "NEXT"
  ];

  const handleMusic = () => {
    audioRef.current.play();
  };

  const handleBackground = () => {
    control.start({
      opacity: 1,
      y: 50,
      transition: { duration: 5, ease: "easeOut" }
    });
  };

  const startTextSequence = () => {
    setShowText(true);
    setIndex(0);

    let i = 0;
    const interval = setInterval(() => {
      i++;
      if (i >= lines.length) {
        clearInterval(interval);
        setShowText(false);
      } else {
        setIndex(i);
      }
    }, 3500); // ⏱ 2.5 sec per line
  };

  return (
    <div className="g1">

      <audio ref={audioRef} src="music/m1.mpeg" />

      <div className="d1">
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.2 }}
          className="b1"
          onClick={() => {
            handleBackground();
            handleMusic();
            startTextSequence();
          }}
        >
          click
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.2 }}
          className="b1"
          onClick={() => navigate("/next")}
        >
          Next
        </motion.button>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 900 }}
        animate={control}
        className="s2"
      >
        <img className="m2" src="images/ba6.png" alt="" />
      </motion.div>

      {/* TEXT ANIMATION */}
      <div className="t8">
        <AnimatePresence mode="wait">
          {showText && (
            <motion.h1
              key={index}
              className="t9"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8 }}
            >
              {lines[index]}
            </motion.h1>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
