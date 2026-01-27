// import { motion } from "framer-motion";

// export default function NewMsg() {
//   const lines = [
//     "Happy Birthday, my love ❤️",
//     "Today isn’t just special because it’s your birthday — it’s special because you exist.",
//     "You have this beautiful way of making everything brighter, even without trying.",
//     "Being with you has taught me what real happiness feels like, and every moment with you is something I’m grateful for.",
//     "I hope this year brings you endless smiles, peaceful days, and dreams coming true, because you deserve nothing less.",
//     "No matter where life takes us, know that you will always be someone I care about deeply.",
//     "Today is all about you — your smile, your heart, and the joy you bring into my world.",
//     "Happy Birthday, beautiful 💕✨",
//     "",
//     "Happy Birthday, my love ❤️",
//     "Every time I think about you, my heart feels a little fuller.",
//     "You are not just someone I care about — you are someone who changed the way I see happiness.",
//     "Your smile feels like home to me, and your presence makes even ordinary moments special.",
//     "On your birthday, I just want you to know how deeply loved you are, not just today but every single day.",
//     "I hope this year wraps you in warmth, brings you peace, and fulfills dreams you haven’t even spoken out loud yet.",
//     "No matter what life brings, a part of my heart will always choose you.",
//     "Happy Birthday, my beautiful girl 💕✨"
//   ];

//   const container = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.4
//       }
//     }
//   };

//   const lineVariant = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" }
//     }
//   };

//   return (
//     <motion.div className="container"
//       variants={container}
//       initial="hidden"
//       animate="visible"
//       style={{ fontSize: "18px", lineHeight: "1.8" }}
//     >
//       {lines.map((line, index) => (
//         <motion.p key={index} variants={lineVariant}>
//           {line}
//         </motion.p>
//       ))}
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../style/newmsg.css"
import { useRef } from "react";

export default function NewMsg() {

  const audioRef = useRef(null);
  
  const handleMusic = () => {
    audioRef.current.play();
  };

  const navigate = useNavigate();

  const lines = [

    "Happy Birthday, to someone who is very special for me ❤️",
    "Today isn’t just special because it’s your birthday — it’s special because you exist.",
    "You have this beautiful way of making everything brighter, even without trying.",
    "Being with you has taught me what real happiness feels like, and every moment with you is something I’m grateful for.",
    "",
    "Every time I think about you, my heart feels a little fuller.",
    "You are not just someone I care about — you are someone who changed the way I see happiness.",
    "Your smile feels like home to me, and your presence makes even ordinary moments special.",
    "On your birthday, I just want you to know how deeply loved you are, not just today but every single day.",
    "I hope this year wraps you in warmth, brings you peace, and fulfills dreams you haven’t even spoken out loud yet.",
    "No matter where life takes us, know that you will always be someone I care about deeply.",
    
    "No matter what life brings, a part of my heart will always choose you.",
    "Today is all about you — your smile, your heart, and the joy you bring into my world.",
    "Happy Birthday, my beautiful girl 💕✨"
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5
      }
    }
  };

  const lineContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04
      }
    }
  };

  const letter = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    
    <motion.div className="n2"
      variants={container}
      initial="hidden"
      animate="visible"
      // style={{
      //   maxWidth: "700px",
      //   margin: "auto",
      //   fontSize: "18px",
      //   lineHeight: "1.8"
      // }}
    >

      <audio ref={audioRef} src="music/m5.mp3" />

      <motion.button
       whileTap={{ scale: 0.9 }}
       whileHover={{ scale: 1.2 }}
       className="c1"
       onClick={handleMusic}
       >
        Touch me cutie
      </motion.button>

      {lines.map((line, index) => (
        <motion.p key={index} variants={lineContainer}>
          {line.split("").map((char, i) => (
            <motion.span key={i} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.p>
      ))}
    <br></br>
      <motion.button
       whileTap={{ scale: 0.9 }}
       whileHover={{ scale: 1.2 }}
       className="c1"
       onClick={() => navigate("/surprise")}
       >
        NEXT SURPRISE
      </motion.button>
    </motion.div>
  );
}
