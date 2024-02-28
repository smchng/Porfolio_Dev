type TableProp = {
  header?: string;
  component?: string;
  date?: string;
  title?: string;
  list?: Array<{ title: string; component: string; date: string }>;
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
        <div className="grid grid-cols-3">{skillList(component)}</div>
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
              className="grid grid-cols-5 pb-[3vh] hover:underline"
            >
              <p className="col-span-2">{item.title}</p>
              <p>{item.component}</p>
              <p className="text-blue text-right col-span-2">{item.date}</p>
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
      <div className="border-b border-white"></div>
      {component && <div className=" pt-[1vh]">{skillList(component)}</div>}
    </div>
  );
};
