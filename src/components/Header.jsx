import { useState, useEffect, useRef } from "react";
import Mobilebar from "./Mobilebar";
import { HEADER_ITEMS } from "../constant";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true); // Visible by default
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  console.log(isVisible);
  return (
    <>
      <Mobilebar />
      <div className="lg:flex hidden">
        <div
          className={`header h-[100px] bg-black text-white top-[20px] fixed ${
            isVisible ? "flex" : "hidden"
          }`}
        >
          <div className="rounded-3xl">
            <div className="flex items-center">
              <div className="min-w-[60px] max-w-[60px]">
                <img
                  className="w-full h-full"
                  src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png"
                  alt=""
                />
              </div>
              <div
                ref={headerRef}
                className="flex gap-8 flex-1 ml-[100px] text-2xl font-bold"
              >
                {HEADER_ITEMS.map((item, index) => (
                  <div
                    data-index={item.title}
                    className={`list-item ${index === 0 && "active"}`}
                    key={item.id}
                  >
                    {item.title}
                  </div>
                ))}
              </div>
              <div className="contact-me-btn relative">
                <button className="contact-me-btn-one text-nowrap">
                  Contact me
                </button>
                <button className="contact-me-btn-two text-nowrap">
                  Contact me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
