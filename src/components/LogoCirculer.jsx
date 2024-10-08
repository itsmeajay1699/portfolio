import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LogoCircular = () => {
  const ref = useRef();
  const circleAnimation = useRef();

  useEffect(() => {
    if (!ref.current) return;

    const children = Array.from(ref.current.children);
    const totalItems = children.length;
    const radius = 130; // Adjust the radius as needed
    const angle = (2 * Math.PI) / totalItems; // Angle between each item

    // Set the position of each child
    children.forEach((child, index) => {
      const x = radius * Math.cos(angle * index);
      const y = radius * Math.sin(angle * index);

      child.style.position = "absolute";
      child.style.transform = `translate(${x}px, ${y}px)`;

      let img = document.createElement("img");
      img.src = `/item${index + 1}.png`;
      img.alt = `Logo ${index + 1}`;
      img.classList.add("item");
      child.appendChild(img);

      gsap.from(child, {
        duration: 0.5,
        opacity: 0,
        scale: 0,
        rotate: 360,
        delay: index * 0.1,
      });
    });

    // Initialize the rotation animation
    circleAnimation.current = gsap.to(ref.current, {
      rotation: 360,
      repeat: -1,
      duration: 10,
      ease: "none",
      paused: false, // Start playing immediately
    });

    return () => {
      // Cleanup to pause animation when the component unmounts
      if (circleAnimation.current) {
        circleAnimation.current.pause();
      }
    };
  }, []);

  return (
    <div
      onMouseEnter={() => {
        if (circleAnimation.current) {
          circleAnimation.current.pause();
        }
      }}
      onMouseLeave={() => {
        if (circleAnimation.current) {
          circleAnimation.current.play();
        }
      }}
      className="logo-container"
      ref={ref}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LogoCircular;
