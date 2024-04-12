import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SkillTable, ExpTable } from "@/components/table";
import { TitleButton } from "@/components/button";
import { TypingEllipsis } from "@/components/dots";
import { HoverImg } from "@/components/hover";

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
      text: "Programming is like and on-going puzzle to me. I love solve the riddle of an algorithm. Whether I am in my room or in a study group with friends, I enjoy exploring and learning what programming can offer.",
    },
    // {
    //   header: "DESIGNER",
    //   text: "Specializes in motion gaphics and integrating animation Follow agile and scrum frameworks",
    // },
  ];

  const curItems = [
    {
      date: "(2020-2025)",
      title: "SFU",
      component: "BSc. Interactive Arts & Tech",
    },
    {
      date: "(2021-2025)",
      title: "SFU",
      component: "Minor Philosophy",
    },
    {
      date: "(2024-2025)",
      title: "SFU",
      component: "Minor Computer Science",
    },
  ];

  const preItems = [
    {
      date: "(2023-2024)",
      title: "WEB DEVELOPER",
      component: "Eunoia Design Jam",
    },
    {
      date: "(2023-2024)",
      title: "WEB DEVELOPER",
      component: "CaseIT",
    },
    {
      date: "(2023-2024)",
      title: "WEB DEVELOPER",
      component: "PIVOT",
    },
    {
      date: "(JAN 2022 - NOV 2022)",
      title: "DIGITAL ARTIST",
      component: "Eastside Games",
    },
    {
      date: "(2021)",
      title: "VIDEOGRAPHER",
      component: "University of British Columbia",
    },
  ];

  const NavItems = [
    {
      link: "/files/resume.pdf",
      text: "RESUME",
    },
    {
      link: "https://www.linkedin.com/in/samantha-chung-76a0961bb/",
      text: "LINKEDIN",
    },

    {
      link: "https://github.com/smchng",
      text: "GITHUB",
    },
    {
      link: "mailto:s.chng02@gmail.prettierrc.js.com",
      text: "EMAIL",
    },
  ];

  return (
    <div className="px-[3vw]">
      <div className="md:h-screen pt-[20vh]">
        <h3>HELLO</h3>
        <p className="py-[15vh] md:max-w-[50vw]">
          <HoverImg
            img="/imgs/me.jpg"
            displayText="I collaborate with
          talented designers to bring their visions to life, aiming to elevate
          digital platforms through thoughtful designs and engaging visuals. I
          prioritize exploration for creative possibilities, value teamwork for
          maximizing project potential, and employ organized workflows and clear
          deadlines to see projects through from start to finish. I am dedicated
          to exploring innovative solutions and optimizing efficiency in every
          project I undertake. With a diverse background collaborating with
          school clubs, startups, and established companies, I consistently
          contribute my skills to achieve their goals and drive success."
          />{" "}
          <strong>Let's bring fresh ideas to life together.</strong>
        </p>
        <div className="grid md:grid-cols-2 gap-5 ">
          {skillItems.map((item, index) => (
            <SkillTable
              key={index}
              header={item.header}
              component={item.component}
            />
          ))}
        </div>
      </div>
      <div className="my-[35vh] ">
        <h3>
          CREATING DYNAMIC DIGITAL EXPERIENCES AS A<TypingEllipsis />
        </h3>

        <div className="md:flex ">
          {buttonItems.map((item, index) => (
            <TitleButton key={index} header={item.header} text={item.text} />
          ))}
        </div>
      </div>
      <div>
        <h3>MY EXPERIENCE</h3>
        <ExpTable header="CURRENTLY" list={curItems} />
        <ExpTable header="PREVIOUSLY" list={preItems} />
      </div>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="flex max-w-[80vw] text-center text-base sm:text-lg pb-[8vh]">
          LET'S WORK TOGETHER
          {/* <div className="flex items-end">
            <TypingEllipsis />
          </div> */}
        </h1>{" "}
        <div className="sm:hidden flex space-x-[3vw] justify-center w-full">
          {NavItems.map((item, index) => (
            <Link href={item.link} key={index} target="_blank">
              <p className="text-white text-[10px] md:text-[11px] ">
                {item.text}
                {index !== NavItems.length - 1 && (
                  <span className="pl-[3vw]">/</span>
                )}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
