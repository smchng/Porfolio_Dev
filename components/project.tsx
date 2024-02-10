import Link from "next/link";
import { useState } from "react";

type ProjectProps = {
    title: string,
    group: string,
    link: string,
    skill:string
}

const Project = ({ title, group, link, skill }: ProjectProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    };
    
    const skillList = (skill: string) => {
        const skills = skill
            .split(",")
            .map((individualSkill, skillIndex) => (
                <p
                    key={skillIndex}
                    className={`
                        ${isHovered ? "border-white" : "border-blue"} 
                        border transition-colors px-2 py-1`
                    }
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
                flex border py-3 px-[3vw] justify-between items-center mx-[3vw] my-3`
            }
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
          <p>{title}</p>
          <h3>{group}</h3>
          <Link href={link}>visit</Link>
          <div className="flex space-x-2">{skillList(skill)}</div>

    </div>

  );
};

export default Project;
