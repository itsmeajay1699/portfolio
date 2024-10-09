import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SkillCard from "./SkillCard";
import { skills } from "../constant";

gsap.registerPlugin(ScrollTrigger);

const SkillSection = () => {
  const skillRef = useRef(null);
  const h1Ref = useRef(null);
  const divRef = useRef(null);

  useEffect(() => {
    const run = () => {
      const skillWidth = skillRef.current.offsetWidth;
      const windowWidth = window.innerWidth;
      const amountToScroll = skillWidth - windowWidth;

      if (h1Ref.current) {
        divRef.current.style.height = `${h1Ref.current.offsetHeight}px`;
        console.log(`${h1Ref.current.offsetHeight}px`);
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".parallax-section",
          start: "top top",
          end: "+=" + amountToScroll,
          scrub: 1,
          pin: true,
          markers: true,
        },
      });

      tl.to(
        ".below",
        {
          width: "100%",
          duration: 1, // Duration for the width expansion
        },
        "a"
      );

      tl.to(
        skillRef.current,
        {
          x: -amountToScroll,
          duration: 1,
          ease: "none",
        },
        "a"
      );
    };
    run();
  }, []);

  return (
    <section className="parallax-section h-screen overflow-hidden px-[40px] md:px-[100px]">
      <div className="content relative flex flex-col items-center text-white">
        <div ref={divRef} className="relative w-full flex flex-col boom">
          <h1 ref={h1Ref} className="above ">
            Skills & Expertise
          </h1>
          <h1 className="below" style={{ width: "0%" }}>
            Skills & Expertise
          </h1>
        </div>

        <div>
          <div
            className="flex flex-row space-x-4 w-full p-[20px] skill"
            ref={skillRef}
          >
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
