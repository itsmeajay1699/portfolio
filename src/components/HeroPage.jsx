/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import { GRID_SIZE } from "../constant";
import Typewriter from "typewriter-effect";
import anime from "animejs";
import LogoCirculer from "./LogoCirculer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const HeroPage = () => {
  const gridRef = useRef(null);
  const [columns, setColumns] = useState();
  const [rows, setRows] = useState();

  const makeTile = (index) => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.setAttribute("data-index", index);
    return tile;
  };

  const updateGrid = () => {
    if (!gridRef.current) return;
    gridRef.current.innerHTML = "";

    const width = gridRef.current.clientWidth;
    const height = gridRef.current.clientHeight;

    let columns = Math.floor(width / GRID_SIZE);
    let rows = Math.floor(height / GRID_SIZE);

    setColumns(columns);
    setRows(rows);

    gridRef.current.style.setProperty("--cols", columns);
    gridRef.current.style.setProperty("--rows", rows);

    const createTiles = (quantity) => {
      Array.from(Array(quantity)).forEach((_, index) => {
        gridRef.current.appendChild(makeTile(index));
      });
    };

    createTiles(columns * rows);
  };

  useEffect(() => {
    updateGrid();

    const handleResize = () => {
      updateGrid();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOnClick = (index) => {
    anime({
      targets: ".tile",
      scale: [
        { value: 0.1, easing: "easeOutSine", duration: 500 },
        { value: 1, easing: "easeInOutQuad", duration: 1200 },
      ],
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index,
      }),
    });
  };

  useGSAP(() => {
    gsap.to(".first", {
      top: "-100%",
      duration: 2,
      delay: 0.2,
      ease: "power2.in",
    });
    gsap.to(".second", {
      bottom: "-100%",
      duration: 2,
      delay: 0.2,
      ease: "power2.in",
    });
  }, {});

  return (
    <div className="w-full h-screen">
      <div className="overflow-hidden relative h-screen">
        <div className="first">
          <h1>PORTFOLIO</h1>
        </div>
        <div className="w-full h-full relative">
          <div
            ref={gridRef}
            onClick={(e) => {
              handleOnClick(e.target.getAttribute("data-index"));
            }}
            className="w-full h-full tiles relative"
          ></div>
          <img
            className="hero-img"
            src="https://ik.imagekit.io/devtoolstech/assets/hero-bg_HANH7f2dK.png?updatedAt=1690793400185"
            alt=""
          />
          <div className="hero-content pointer-events-none  z-[4]">
            <div className="md:min-w-[350px] w-full">
              <h1 className="text-nowrap">
                Hi, I'm <span>Ajay Kumar</span>
              </h1>
              <div className="relative md:text-3xl text-2xl h-[60px]">
                <div className="typewriter-text">
                  <Typewriter
                    options={{
                      strings: [
                        "Full Stack Web Developer",
                        "React & Node.js Enthusiast",
                        "JavaScript Ninja",
                        "Building Modern Web Apps",
                        "Exploring the World of Coding",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 50,
                      pauseFor: 2000,
                    }}
                  />
                </div>
                <div className="typewriter-text-bg">
                  <Typewriter
                    options={{
                      strings: [
                        "Full Stack Web Developer",
                        "React & Node.js Enthusiast",
                        "JavaScript Ninja",
                        "Building Modern Web Apps",
                        "Exploring the World of Coding",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 50,
                      pauseFor: 2000,
                    }}
                  />
                </div>
              </div>
              <div className="masked-text">
                <p>
                  I am a passionate Full Stack Web Developer with over 2 years
                  of experience in building dynamic, responsive, and
                  user-friendly web applications. Skilled in both front-end and
                  back-end development, I excel at turning complex ideas into
                  seamless, functional digital products. My tech stack includes
                  React.js, Next.js, Node.js, Express, and MongoDB, along with a
                  strong foundation in database management and RESTful APIs.
                </p>
              </div>
            </div>
            <div className="w-full  h-full">
              <LogoCirculer />
            </div>
          </div>
        </div>
        <div className="second">
          <h1>PORTFOLIO</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
