import {
  ProjectContent,
  ProjectVideo,
  ProjectText,
  ScrollEffect,
} from "@/components/project";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ProjectTable, ProjectLink } from "@/components/table";

export default function Eunoia() {
  return (
    <ScrollEffect>
      <ProjectContent
        title="EUNOIA 2024"
        subtext="EVENT WEBSITE WITH INTERACTIVE STICKERS AND ANIMATION"
        detail="Developed the website for SFU Eunoia’s 2024 design Jam that featured events schedule, sponsors, and legacy. The site includes interactive stickers representing key aspects of the event and featuring sponsors, serving as the central hub for essential information on schedule and activities. The event represents the transformation of an idea to real-life through collaboration and unrestricted exploration."
      />
      <div className="w-screen relative whitespace-normal shrink-0">
        {" "}
        {/* <h4 className="text-blue py-[15vh]">EUNOIA 2024</h4> */}
        <div className="md:grid md:grid-cols-2 pt-[25vh]">
          <h2 className="text-[40px] text-base lg:text-lg pb-[5vh]">
            ABOUT <br /> THE PROJECT
          </h2>{" "}
          <div className="mr-[10vw]">
            <ProjectLink
              header="EXT. LINKS"
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
      <ProjectVideo title="/video/eunoia-sticker.webm" detail="video/webm" />
      <ProjectText detail=" Visitor of the site are able to move stickers and interact with the sites features which reflects Eunoia's open-minded and explorative identity " />

      <ProjectVideo
        title="/video/eunoia-testimonial.webm"
        detail="video/webm"
      />
      <div className="md:absolute bottom-0 left-0 w-full border-t border-white mb-[2vh] sm:m-0">
        <Link href="/projects/distill">
          <p className="pt-[1vh] px-2 py-1 px-3 justify-center md:justify-end flex ">
            next
          </p>
        </Link>
      </div>
    </ScrollEffect>
  );
}
