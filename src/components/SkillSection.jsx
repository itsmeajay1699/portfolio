import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Ensure ScrollTrigger is imported
import SkillCard from "./SkillCard";
gsap.registerPlugin(ScrollTrigger);

const SkillSection = () => {
  const skills = [
    { name: "HTML", color: "#FF5733" },
    { name: "CSS", color: "#33FF57" },
    { name: "JavaScript", color: "#3357FF" },
    { name: "React", color: "#FF33A1" },
    { name: "Node.js", color: "#33FFF5" },
    { name: "Python", color: "#F5FF33" },
    { name: "HTML", color: "#FF5733" },
    { name: "CSS", color: "#33FF57" },
    { name: "JavaScript", color: "#3357FF" },
    { name: "React", color: "#FF33A1" },
    { name: "Node.js", color: "#33FFF5" },
    { name: "Python", color: "#F5FF33" },
    { name: "HTML", color: "#FF5733" },
    { name: "CSS", color: "#33FF57" },
    { name: "JavaScript", color: "#3357FF" },
    { name: "React", color: "#FF33A1" },
    { name: "Node.js", color: "#33FFF5" },
    { name: "Python", color: "#F5FF33" },
  ];
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".parallax-section",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
        markers: true,
      },
    });

    tl.to(
      ".below ",
      {
        width: "100%",
      },
      "a"
    );

    tl.to(
      ".skill",
      {
        x: "-100%",

        opacity: 1,
      },
      "a"
    );
  }, []);

  return (
    <section className="parallax-section h-[200vh] overflow-hidden">
      <div className="content relative flex flex-col items-center text-white">
        <div className="relative w-full flex flex-col h-[250px]">
          <h1 className="above">Skills & Expertise</h1>
          <h1 className="below" style={{ width: "0%" }}>
            Skills & Expertise
          </h1>
        </div>
        <div>
          <div className="flex flex-row space-x-4 w-full p-[20px] skill">
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
