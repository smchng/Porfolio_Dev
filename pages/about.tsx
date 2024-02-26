import { useEffect, useState } from "react";
import Image from "next/image";
import { SkillTable, ExpTable } from "@/components/table";
import { TitleButton } from "@/components/button";

export default function About() {
  const skillItems = [
    {
      header: "DEV TOOLS",
      component:
        "HTML/CSS/JS, Tailwind, Next.js, TypeScript, React, Python, Java, C/C++, Git",
    },
    {
      header: "SKILLS",
      component:
        "UX/UI, Accessibility, Motion Graphics, 3D Design, Version Control, Agile, Scrum",
    },
  ];

  const buttonItems = [
    {
      header: "DEVELOPER",
      text: "Specializes in motion gaphics and integrating animation Follow agile and scrum frameworks",
    },
    // {
    //   header: "DESIGNER",
    //   text: "Specializes in motion gaphics and integrating animation Follow agile and scrum frameworks",
    // },
  ];

  const expItems = [
    {
      date: "(JAN 2022 - NOV 2022)",
      title: "DIGITAL ARTIST",
      component: "Eastside Games",
    },
    {
      date: "(JAN 2022 - NOV 2022)",
      title: "DIGITAL ARTIST",
      component: "Eastside Games",
    },
    {
      date: "(JAN 2022 - NOV 2022)",
      title: "DIGITAL ARTIST",
      component: "Eastside Games",
    },
  ];

  return (
    <div>
      <div className="md:h-screen pt-[20vh]">
        <h3>HELLO</h3>
        <p className="py-[15vh] md:max-w-[50vw]">
          I collaborate with talented designers to bring their visions to life,
          aiming to elevate digital platforms through thoughtful designs and
          engaging visuals. I prioritize exploration for creative possibilities,
          value teamwork for maximizing project potential, and employ organized
          workflows and clear deadlines to see projects through from start to
          finish. I am dedicated to exploring innovative solutions and
          optimizing efficiency in every project I undertake. With a diverse
          background collaborating with school clubs, startups, and established
          companies, I consistently contribute my skills to achieve their goals
          and drive success. Let's bring fresh ideas to life together.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {skillItems.map((item, index) => (
            <SkillTable
              key={index}
              header={item.header}
              component={item.component}
            />
          ))}
        </div>
      </div>
      <h3 className="mt-[15vh]">
        CREATING DYNAMIC DIGITAL EXPERIENCES AS A...
      </h3>
      <div className="md:flex md:flex-col">
        {buttonItems.map((item, index) => (
          <TitleButton key={index} header={item.header} text={item.text} />
        ))}
      </div>
      <div>
        <ExpTable header="CURRENTLY" list={expItems} />
        <ExpTable header="PREVIOUSLY" list={expItems} />
      </div>
    </div>
  );
}
