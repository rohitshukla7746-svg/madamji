// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useRef } from "react";
// import "../style/gift.css";

// export default function Moon() {

//   const audioRef = useRef(null);
//   const [index, setIndex] = useState(0);
//   const [showText, setShowText] = useState(false);

//   const lines = [
//     "Hello ❤️",
//     "I have something to tell you",
//     "You mean a lot to me",
//     "This moment matters ✨"
//   ];

//   const handleClick = () => {
//     audioRef.current.play();
//     setShowText(true);

//     let i = 0;
//     const interval = setInterval(() => {
//       i++;
//       if (i >= lines.length) {
//         clearInterval(interval);
//         setShowText(false);
//       } else {
//         setIndex(i);
//       }
//     }, 3000); // ⏱ 3 sec per line
//   };

//   return (
//     <div className="g1">

//       <audio ref={audioRef} src="/music/m1.mpeg" />

//       <button className="b1" onClick={handleClick}>
//         Click
//       </button>

//       <div className="text-container">
//         <AnimatePresence mode="wait">
//           {showText && (
//             <motion.p
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -30 }}
//               transition={{ duration: 0.8 }}
//               className="t2"
//             >
//               {lines[index]}
//             </motion.p>
//           )}
//         </AnimatePresence>
//       </div>

//     </div>
//   );
// }


import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import "../style/gift.css";

export default function Moon() {
  const audioRef = useRef(null);

  // music states
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // text states
  const [index, setIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  const lines = [
    "Hello ❤️",
    "I have something to tell you",
    "You mean a lot to me",
    "sorry late ke liye ",
    "ye laptop ke wajah se hua late",
    "aapke birthday per aapke liye ",
    "chhota sa gift aur gift aana baaki hai bss wait karo ",
    "And yeah my cutu, u are best, Ek baar bolne do ye bss",
    "I love u ❤️",
  ];

  /* 🎵 Music Play / Pause */
  const handleMusic = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  /* 💬 Start Text Animation */
  const handleText = () => {
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
    }, 3000);
  };

  /* 🎚 Update Music Time */
  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const loadDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", loadDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", loadDuration);
    };
  }, []);

  /* ⏩ Seek Music */
  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  return (
    <div className="g1">
      <audio ref={audioRef} src="/music/m2.aac" />

      {/* 🔘 Buttons First */}
      <div className="btn-group">
        <button className="b1" onClick={handleMusic}>
          {isPlaying ? "Pause Music ⏸️" : "Play Music ▶️"}
        </button>

        <button className="b1" onClick={handleText}>
          Start Text 💬
        </button>
      </div>

      {/* 🎚 Timeline Slider */}
      <input
        type="range"
        min="0"
        max={duration || 0}
        step="0.1"
        value={currentTime}
        onChange={handleSeek}
        className="time-slider"
      />

      <p className="time-text">
        {formatTime(currentTime)} / {formatTime(duration)}
      </p>

      {/* ✨ Text Animation Comes Last */}
      <div className="text-container">
        <AnimatePresence mode="wait">
          {showText && (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="t2"
            >
              {lines[index]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ⏱ Time Formatter */
function formatTime(time) {
  if (!time) return "0:00";
  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60).toString().padStart(2, "0");
  return `${min}:${sec}`;
}
