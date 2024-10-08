import { useRef } from "react";
import { HEADER_ITEMS } from "../constant";
import Mobilebar from "./Mobilebar";

const Header = () => {
  const ref = useRef(null);
  const handleClick = (e) => {
    if (!e.target.getAttribute("data-index")) return;
    Array.from(ref.current.children).forEach((child) => {
      if (
        child.getAttribute("data-index") === e.target.getAttribute("data-index")
      ) {
        e.target.classList.add("active");
      } else {
        child.classList.remove("active");
      }
    });
  };

  return (
    <>
      <Mobilebar />
      <div className="header h-[100px] bg-black text-white  top-[20px] fixed hidden lg:flex">
        <div className="rounded-3xl">
          <div className="flex items-center">
            {/* logo or Name */}
            <div className="min-w-[60px] max-w-[60px]">
              <img
                className="w-full h-full"
                src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png"
                alt=""
              />
            </div>
            <div
              ref={ref}
              onClick={(event) => handleClick(event)}
              className="flex gap-8 flex-1 ml-[100px] text-2xl font-bold"
            >
              {HEADER_ITEMS.map((item, index) => {
                return (
                  <div
                    data-index={item.title}
                    className={`list-item ${index == 0 && "active"}`}
                    key={item.id}
                  >
                    {item.title}
                  </div>
                );
              })}
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
    </>
  );
};

export default Header;
