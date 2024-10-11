import Link from "next/link";
import { FadeIn } from "@/components/fadeIn";

type TableProp = {
  header?: string;
  component?: string;
  date?: string;
  title?: string;
  list?: Array<{ title: string; component: string; date: string }>;
  children?: React.ReactNode[];
};

export const SkillTable = ({ header, component }: TableProp) => {
  const skillList = (skill: string) => {
    const skills = skill.split(",").map((individualSkill, skillIndex) => (
      <p key={skillIndex} className="">
        {individualSkill.trim()}
      </p>
    ));
    return skills;
  };
  return (
    <div>
      <p>{header}</p>
      <div className="border-b border-white my-[2vh]"></div>
      {component && (
        <div className="grid grid-cols-2 md:grid-cols-3">
          {skillList(component)}
        </div>
      )}
    </div>
  );
};

export const ExpTable = ({ header, list }: TableProp) => {
  return (
    <div className="my-[8vh]">
      <p>{header}</p>
      <div className="border-b border-white my-[2vh]"></div>
      {list && (
        <div>
          {list.map((item, index) => (
            <div
              key={index}
              className="md:hover:underline grid grid-cols-2 pb-[2vh]"
            >
              <div className="md:grid md:grid-cols-2">
                <p>{item.title}</p>
                <p>{item.component}</p>{" "}
              </div>
              <p className="text-blue text-right flex justify-end items-end">
                {item.date}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export const ProjectTable = ({ header, component }: TableProp) => {
  const skillList = (skill: string) => {
    const skills = skill.split(",").map((individualSkill, skillIndex) => (
      <p key={skillIndex} className="">
        {individualSkill.trim()}
      </p>
    ));
    return skills;
  };
  return (
    <div className="pb-[3vh]">
      <p className="text-blue pb-[1vh]">{header}</p>
      <div className="border-b border-white "></div>
      {component && <div className=" pt-[1vh]">{skillList(component)}</div>}
    </div>
  );
};
export const ProjectLink = ({ header, component, title }: TableProp) => {
  const resolvedLink = component !== undefined ? component : "";
  return (
    <div className="pb-[3vh]">
      <p className="text-blue pb-[1vh]">{header}</p>
      <div className="border-b border-white "></div>
      <Link href={resolvedLink} target="_blank">
        <p className="pt-[1vh] hover:text-blue">{title}</p>
      </Link>
    </div>
  );
};

export const CombinedTable = ({ children }: TableProp) => {
  return (
    <div className="md:w-screen relative whitespace-normal flex flex-col justify-center shrink-0">
      <div className="md:grid md:grid-cols-2">
        <FadeIn className="mr-[10vw]">{children && children[0]}</FadeIn>
        <FadeIn className="mr-[10vw]">{children && children[1]}</FadeIn>
      </div>
    </div>
  );
};
