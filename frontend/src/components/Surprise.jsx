// import { useRef } from "react";

// export default function Firecracker() {
//   const canvasRef = useRef();

//   const explode = (x, y) => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const particles = [];
//     const colors = ["#ff4d4d", "#ffd93d", "#4dff4d", "#4dd2ff", "#ff4dff"];

//     for (let i = 0; i < 80; i++) {
//       particles.push({
//         x,
//         y,
//         radius: Math.random() * 3 + 1,
//         color: colors[Math.floor(Math.random() * colors.length)],
//         vx: (Math.random() - 0.5) * 8,
//         vy: (Math.random() - 0.5) * 8,
//         life: 100
//       });
//     }

//     function animate() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       particles.forEach((p, i) => {
//         p.x += p.vx;
//         p.y += p.vy;
//         p.life--;

//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
//         ctx.fillStyle = p.color;
//         ctx.fill();

//         if (p.life <= 0) particles.splice(i, 1);
//       });

//       if (particles.length > 0) requestAnimationFrame(animate);
//     }

//     animate();
//   };

//   return (
//     <>
//       <button
//         onClick={(e) => explode(e.clientX, e.clientY)}
//         style={{ padding: "10px 20px", fontSize: "18px" }}
//       >
//         🎆 Fire!
//       </button>

//       <canvas
//         ref={canvasRef}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           pointerEvents: "none"
//         }}
//       />
//     </>
//   );
// }

import { Link } from "react-router-dom"
import "../style/surprise.css"
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Surprise () {
   

   const navigate = useNavigate();
  // useEffect(() => {
  //   const audio = new Audio("/music/m1.mpeg");
  //   audio.play();
  // }, []);

  return(
    <div className="container2">

      <div className="d1">
      <Link to={"/en1"}> <img className="e1" src="/images/e2.png" alt="" /></Link>
       <Link to={"/en2"}>   <img className="e2" src="/images/e2.png" alt="" /> </Link>
        <Link to={"/en3"}>  <img className="e3" src="/images/e2.png" alt="" /> </Link>
         <Link to={"/en4"}><img className="e4" src="/images/e2.png" alt="" /> </Link> 
      </div>

      
      <div className="d2">
        <h1> ❤️ Gift and Message</h1>
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.2 }}
          className="b12"
          onClick={() => navigate("/gift") }
        >

          Gift Section is here CUTU ❤️

        </motion.button>

      </div>

      

      
    </div>
  )
}