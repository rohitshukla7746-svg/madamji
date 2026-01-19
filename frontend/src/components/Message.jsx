
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
import "../style/message.css"

function Message({ play }) {
  const container = useRef();
  const tl = useRef();

  const navigate = useNavigate();
  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current
      .from(".text:nth-child(1)", {
        y: 120,
        opacity: 0,
        duration: 0.8,
        delay: 3,
        ease: "power3.out",
      })
      .from(".text:nth-child(2)", {
        x: -150,
        opacity: 0,
        rotation: -10,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
      .from(".text:nth-child(3)", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
      })
      .from(".text:nth-child(4)", {
        y: -120,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .from(".btn1", {
        y: -120,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
  }, { scope: container });

  useEffect(() => {
    if (play) {
      tl.current.play();
    }
  }, [play]);

  return (
    <div ref={container}>
      <h1 className="text">Hello ❤️</h1>
      <h1 className="text">Madam ❤️❤️</h1>
      <h1 className="text">Let's Celebrate ❤️</h1>
      <h1 className="text">Your Birthday ❤️ </h1>
      <button className="btn1" onClick={() => navigate("/moon")}>Let's Go</button>
    </div>
  );
}

export default Message;
