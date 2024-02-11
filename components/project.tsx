import Link from "next/link";
import { useState } from "react";

type ProjectProps = {
  title: string;
  group: string;
  link: string;
  skill: string;
};

export const Project = ({ title, group, link, skill }: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const skillList = (skill: string) => {
    const skills = skill.split(",").map((individualSkill, skillIndex) => (
      <p
        key={skillIndex}
        className={`
                        ${isHovered ? "border-white" : "border-blue"} 
                        border transition-colors px-2 py-1 text-[10px] lg:text-2xs`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {individualSkill.trim()}
      </p>
    ));
    return skills;
  };

  return (
    <div
      className={`
                ${isHovered ? "border-white" : "border-blue"} 
                ${isHovered ? "text-white" : "text-blue"} transition-colors
                flex border py-3 px-[3vw] justify-between items-center 2xl:mx-[3vw] my-3`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col 2xl:flex-row">
        <p>{title}</p>
        <h3 className="text-sm lg:text-base">{group}</h3>
        <Link href={link} className="hidden 2xl:contents">
          visit
        </Link>
        <div className="flex flex-wrap space-x-2">{skillList(skill)}</div>
      </div>
    </div>
  );
};
