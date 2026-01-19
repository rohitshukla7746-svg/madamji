import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function HeartCursor() {
  const cursorRef = useRef(null);

  useGSAP(() => {
    const move = (e) => {
      // move main heart cursor
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power3.out",
      });

      // create trailing heart
      const heart = document.createElement("div");
      heart.className = "heart-trail";
      document.body.appendChild(heart);

      gsap.set(heart, {
        x: e.clientX,
        y: e.clientY,
      });

      gsap.to(heart, {
        y: e.clientY - 40,
        opacity: 0,
        scale: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => heart.remove(),
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div className="heart-cursor" ref={cursorRef}>💗</div>;
}

export default HeartCursor;
