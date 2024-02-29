import Link from "next/link";
import React, { useState } from "react";

type ProjectProps = {
  title?: string;
  group?: string;
  skill?: string;
  page?: string;
  link?: string;
  detail?: string;
  subtext?: string;
};

export const Project = ({ title, group, link, skill, page }: ProjectProps) => {
  const resolvedPage = page !== undefined ? page : "";
  const resolvedLink = link !== undefined ? link : "";
  const resolvedSkill = skill !== undefined ? skill : "";
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
                flex border py-3 px-3 justify-between items-center my-3`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sm:flex w-full">
        <Link href={resolvedPage}>
          <p className="text-[8px] md:text-2xs">{title}</p>
          <h3 className="text-xs md:text-sm lg:text-base">{group}</h3>
        </Link>
        <div className="flex sm:items-end sm:ml-auto">
          <div className="flex flex-wrap items-end space-x-2 h-full">
            {skillList(resolvedSkill)}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export const ProjectContent = ({ title, detail, subtext }: ProjectProps) => {
  return (
    <div className="w-screen relative whitespace-normal shrink-0">
      <h4 className="text-blue py-[15vh]">{title}</h4>

      <h2 className="text-[35px] py-[5vh] max-w-[70vw] text-base lg:text-lg">
        {subtext}
      </h2>
      <p className=" max-w-[50vw]">{detail}</p>
    </div>
  );
};
