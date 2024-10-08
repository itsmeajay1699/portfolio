import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { HEADER_ITEMS } from "../constant"; // Assuming you have a list of items for the header

const Mobilebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const topBarRef = useRef(null);
  const middleBarRef = useRef(null);
  const bottomBarRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Animate the bars to form an X
      gsap.to(topBarRef.current, { rotate: 45, y: 8, duration: 0.3 });
      gsap.to(middleBarRef.current, { opacity: 0, duration: 0.3 });
      gsap.to(bottomBarRef.current, { rotate: -45, y: -8, duration: 0.3 });
      // Animate the menu opening
      gsap.to(menuRef.current, { x: 0, duration: 0.6, ease: "power3.out" });
    } else {
      // Reset the bars back to hamburger
      gsap.to(topBarRef.current, { rotate: 0, y: 0, duration: 0.3 });
      gsap.to(middleBarRef.current, { opacity: 1, duration: 0.3 });
      gsap.to(bottomBarRef.current, { rotate: 0, y: 0, duration: 0.3 });
      // Animate the menu closing
      gsap.to(menuRef.current, {
        x: "-100%",
        duration: 0.6,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar Section */}
      <div className="mobile-navbar flex items-center justify-between p-4 bg-black text-white fixed top-0 left-0 w-full z-50 lg:hidden">
        <div className="logo">
          <img
            className="w-[40px] h-[40px]"
            src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png"
            alt="Logo"
          />
        </div>
        <div className="menu-toggle cursor-pointer" onClick={toggleMenu}>
          <span
            ref={topBarRef}
            className="block w-8 h-[2px] bg-white mb-[5px]"
          ></span>
          <span
            ref={middleBarRef}
            className="block w-8 h-[2px] bg-white mb-[5px]"
          ></span>
          <span
            ref={bottomBarRef}
            className="block w-8 h-[2px] bg-white"
          ></span>
        </div>
      </div>

      <div
        ref={menuRef}
        className="mobile-menu lg:hidden  fixed top-0 left-0 w-[100%] h-full bg-black text-white z-40 translate-x-[-100%]"
      >
        <div className="flex flex-col gap-8 p-8 text-xl">
          {HEADER_ITEMS.map((item) => (
            <div key={item.id} onClick={toggleMenu} className="cursor-pointer">
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mobilebar;
