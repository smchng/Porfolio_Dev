import {
  ProjectContent,
  ProjectVideo,
  ProjectText,
  ScrollEffect,
  NextProject,
} from "@/components/project";
import React, { useRef, useState, useEffect } from "react";

import { ProjectTable, ProjectLink } from "@/components/table";

export default function Eunoia() {
  return (
    <ScrollEffect>
      <ProjectContent
        title="EUNOIA 2024"
        subtext="EVENT WEBSITE WITH INTERACTIVE STICKERS AND ANIMATION"
        detail="Developed the website for SFU Eunoia’s 2024 design Jam that featured events schedule, sponsors, and legacy. The site includes interactive stickers representing key aspects of the event and featuring sponsors, serving as the central hub for essential information on schedule and activities. The event represents the transformation of an idea to real-life through collaboration and unrestricted exploration."
      />
      <div className="md:w-screen relative whitespace-normal shrink-0">
        {" "}
        {/* <h4 className="text-blue py-[15vh]">EUNOIA 2024</h4> */}
        <div className="md:grid md:grid-cols-2 pt-[25vh]">
          <h2 className="text-[40px] text-base lg:text-lg pb-[5vh]">
            ABOUT <br /> THE PROJECT
          </h2>{" "}
          <div className="mr-[10vw]">
            <ProjectLink
              header="EXT. LINKS"
              title="visit"
              component="https://eunoiadesign.ca/"
            />
            <ProjectTable header="ROLE" component="Web Developer" />{" "}
            <ProjectTable header="TIMELINE" component="8 weeks" />{" "}
            <ProjectTable
              header="TOOLS"
              component="React, Next.js, Tailwind, Git, Agile, Scrum"
            />
          </div>
        </div>
      </div>
      <ProjectText
        title="Working with designers"
        detail="Collaborating with designers on Figma, I translate functionalities seamlessly and utilize breakpoints for responsive site design adaptation. This included animations as well as interactions for visitors."
      />
      <ProjectVideo title="/video/eunoia-figma.webm" detail="video/webm" />
      <ProjectText
        title="Working with developers"
        detail="In the dev team, I used Git to collaborate on others' code, ensuring smooth integration and version control. Moreover, strict adherence to naming conventions streamlines our development process, enhancing code readability and maintainability."
      />
      <ProjectVideo title="/video/eunoia-code.webm" detail="video/webm" />
      <ProjectText
        title="Agenda development"
        detail="To address issues with Agenda bugs, I tackled parsing challenges within components by implementing string manipulation techniques. By splitting strings using specific characters as keys, I laid out text elements, ensuring accurate representation within the button and resolving related inconsistencies."
      />{" "}
      <ProjectVideo title="/video/eunoia-agenda.webm" detail="video/webm" />{" "}
      <ProjectVideo
        title="/video/eunoia-agenda-code.webm"
        detail="video/webm"
      />{" "}
      <ProjectText
        title="Testimonial development"
        detail="In perfecting the testimonial section, I focused on precise text alignment within boxes and incorporated gradients and subtle movements to enhance readability and visual appeal, ensuring an engaging user experience."
      />
      <ProjectVideo
        title="/video/eunoia-testimonial.webm"
        detail="video/webm"
      />
      <ProjectText
        title="More features"
        detail="Utilizing motion enhanced the website's user experience, fostering a dynamic and engaging environment that encouraged exploration. Unique interactive elements within the site further heightened this sense of immersion, inviting visitors to delve deeper into its content.  Visitors of the site are able to move stickers and interact with the sites features which reflects Eunoia's open-minded and explorative identity."
      />
      <ProjectVideo title="/video/eunoia.webm" detail="video/webm" />
      <ProjectVideo title="/video/eunoia-sticker.webm" detail="video/webm" />
      <ProjectText
        title="Reflection"
        detail=" This was my first project using Tailwind and Next.js. I struggled with learning the syntax and adjusting the absense of using a linked .CSS file with my html. I was able to develop my front-end knowdlege with the help of my team and lead web-developer. I learned to use compoenents in order to make my code more efficient and create flexbible templates."
      />
      <NextProject link="/projects/caseit" />
      {/* <ScrollRight nextSectionRef={nextSectionRef} /> */}
    </ScrollEffect>
  );
}
