import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import eunoia from "@/public/imgs/eunoia.jpg";

type StyleProps = {
  name: string;
  selector: string;
  code: string;
};

const StyleObject = ({ name, selector, code }: StyleProps) => {
  return (
    <div>
      {" "}
      <div className="w-full border-t border-white my-[5vh]"></div>
      <h3 className=" mb-[3vh]">{name}</h3>
      <h4>CSS Selector:</h4>
      <p className=" mb-[3vh]">{selector}</p>
      <h4>Sample Code:</h4>
      <p className="max-w-[50vw] mb-[3vh] bg-blue p-3">{code} </p>
      <h4>Rendered Element:</h4>
    </div>
  );
};

export default function Styleguide() {
  return (
    <div className="p-[3vw]">
      <h1 className="mt-[10vh]">STYLEGUIDE</h1>
      <div className="my-[10vh]">
        <Link href="projects/eunoia">
          <h3>Process Analysis 1 - Eunoia Design Jam</h3>
        </Link>
        <Link href="projects/caseit">
          <h3>Process Analysis 2 - CaseIt 2024</h3>
        </Link>
      </div>

      <div>
        {" "}
        <h3>Bio</h3>
        <div className="w-full border-t border-white my-[5vh]"></div>
        <p className="md:max-w-[50vw]">
          I collaborate with talented designers to bring their visions to life,
          aiming to elevate digital platforms through thoughtful designs and
          engaging visuals. I prioritize exploration for creative possibilities,
          value teamwork for maximizing project potential, and employ organized
          workflows and clear deadlines to see projects through from start to
          finish. I am dedicated to exploring innovative solutions and
          optimizing efficiency in every project I undertake. With a diverse
          background collaborating with school clubs, startups, and established
          companies, I consistently contribute my skills to achieve their goals
          and drive success.{" "}
          <strong>Let's bring fresh ideas to life together.</strong>
        </p>
        <h3 className="mt-[10vh]">Brand Components</h3>
        <div>
          <div className="w-full border-t border-white my-[5vh]"></div>
          <h4 className=" mb-[3vh]">Font</h4>
          <p>KaiseiHarunoUmi</p>
        </div>
        <div>
          <div className="w-full border-t border-white my-[5vh]"></div>
          <h4 className=" mb-[3vh]">Colour Palatte</h4>
          <div className="flex space-x-3">
            <div className="w-[10vw] h-[10vw] bg-blue"></div>
            <div className="w-[10vw] h-[10vw] bg-navy border border-white"></div>
          </div>
        </div>
        <h3 className="mt-[10vh]">Interactive Elements</h3>
        <div>
          {" "}
          <StyleObject
            name="In-text Link"
            selector="a, Link"
            code={`
                <p>
                We took inspiration from
                <a href="https://teenage.engineering/" target="_blank" className="hover:text-white text-blue">teenage.engineering</a>
                </p>
            `}
          />
          <p>
            We took inspiration from{" "}
            <a
              href="https://teenage.engineering/"
              target="_blank"
              className="hover:text-white text-blue"
            >
              teenage.engineering
            </a>
          </p>
        </div>{" "}
        <div>
          {" "}
          <StyleObject
            name="Navigation Link"
            selector="Link"
            code={`
              <Link href={item.link} key={index}>
              <p className="text-white text-[10px] md:text-[11px]">
                {item.text}
              </p>
            </Link>
            `}
          />
          <Link href="/">
            <p className="text-white text-[10px] md:text-[11px]">HOME</p>
          </Link>
        </div>{" "}
        <h3 className="mt-[10vh]">Text Elements</h3>
        <div>
          {" "}
          <StyleObject
            name="Headers"
            selector="h1, h2, h3"
            code={`
             <h1>Header 1</h1>
<h2>Header 2</h2>
<h3>Header 3</h3>
            `}
          />
          <h1>Header 1</h1>
          <h2>Header 2</h2>
          <h3>Header 3</h3>
        </div>
        <div>
          {" "}
          <StyleObject
            name="Paragraphs"
            selector="p"
            code={`
            <p>   I collaborate with talented designers to bring their visions to life,
          aiming to elevate digital platforms through thoughtful designs and
          engaging visuals. I prioritize exploration for creative possibilities,
          value teamwork for maximizing project potential, and employ organized
          workflows and clear deadlines to see projects through from start to
          finish.</p>
            `}
          />
          <p className="max-w-[50vw]">
            {" "}
            I collaborate with talented designers to bring their visions to
            life, aiming to elevate digital platforms through thoughtful designs
            and engaging visuals. I prioritize exploration for creative
            possibilities, value teamwork for maximizing project potential, and
            employ organized workflows and clear deadlines to see projects
            through from start to finish.
          </p>
        </div>{" "}
        <div>
          {" "}
          <StyleObject
            name="Main Navigation"
            selector="Link"
            code={`
              <div className="flex space-x-[5vw] w-full">
          <Link href="/">
            <p className="text-white text-[10px] md:text-[11px]">HOME</p>
          </Link>
          <Link href="/">
            <p className="text-white text-[10px] md:text-[11px]">ABOUT</p>
          </Link>
        </div>
            `}
          />
          <div className="flex space-x-[5vw] w-full">
            <Link href="/">
              <p className="text-white text-[10px] md:text-[11px]">HOME</p>
            </Link>
            <Link href="/">
              <p className="text-white text-[10px] md:text-[11px]">ABOUT</p>
            </Link>
            <Link href="/">
              <p className="text-white text-[10px] md:text-[11px]">RESUME</p>
            </Link>
            <Link href="/">
              <p className="text-white text-[10px] md:text-[11px]">LINKEDIN</p>
            </Link>
            <Link href="/">
              <p className="text-white text-[10px] md:text-[11px]">GITHUB</p>
            </Link>
            <Link href="/">
              <p className="text-white text-[10px] md:text-[11px]">EMAIL</p>
            </Link>
          </div>
        </div>{" "}
        <div>
          {" "}
          <StyleObject
            name="Images"
            selector="Image"
            code={`
             <Image
              src={eunoia}
              alt="project title card"
              className={"max-w-[60vw] object-cover "}
            ></Image>
            `}
          />
          <Image
            src={eunoia}
            alt="project title card"
            className={"max-w-[60vw] object-cover "}
          ></Image>
        </div>
        <h3 className="mt-[10vh]">Combined Elements</h3>
        <div>
          {" "}
          <StyleObject
            name="Project Listing"
            selector="Project"
            code={`
             <Project
                  key={index}
                  title={item.title}
                  group={item.group}
                  link={item.link}
                  skill={item.skill}
                  page={item.page}
                  onMouseOver={() => handleProjectHover(index)}
                  hovered={index === hoveredProject}
                />
            `}
          />
          <div
            className={`
            transition-colors
                flex border py-3 px-3 justify-between items-center my-3`}
          >
            <div className="sm:flex w-full">
              <Link href="eunoia">
                <p className="text-[8px] md:text-2xs">Eunoia DESIGN JAM</p>
                <h3 className="text-xs md:text-sm lg:text-base">
                  WEB DEVELOPER
                </h3>
              </Link>
              <div className="flex sm:items-end sm:ml-auto">
                <div className="flex flex-wrap items-end space-x-2 h-full">
                  <p
                    className={`
                      
                        border transition-colors px-2 py-1 text-[10px] lg:text-2xs`}
                  >
                    react
                  </p>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
