import {
  ProjectContent,
  ProjectVideo,
  ProjectText,
  ScrollEffect,
  NextProject,
} from "@/components/project";
import React, { useRef, useState, useEffect } from "react";

import { ProjectTable, ProjectLink } from "@/components/table";

export default function Caseit() {
  return (
    <ScrollEffect>
      <ProjectContent
        title="CASEIT 2024"
        subtext="INFORMATION SITE FOR INTERNATIONAL CASE COMPETITION"
        detail="Applied updated event information for international competitor and prospecting visitors. Implemented new pages under DiscoverIT that informed competitors about the city of Vancouver. During the event week, site featured LiveChat services and live updates on occuring case presentations."
      />
      <div className="md:w-screen relative whitespace-normal shrink-0">
        {" "}
        {/* <h4 className="text-blue py-[15vh]">EUNOIA 2024</h4> */}
        <div className="md:grid md:grid-cols-2 pt-[25vh]">
          <h2 className="text-[40px] text-base lg:text-lg pb-[5vh]">
            ABOUT <br /> THE PROJECT
          </h2>{" "}
          <div className="mr-[10vw]">
            <ProjectLink header="EXT. LINKS" component="https://caseit.org" />
            <ProjectTable header="ROLE" component="Web Developer" />{" "}
            <ProjectTable header="TIMELINE" component="5 months" />{" "}
            <ProjectTable header="TOOLS" component="HTML, CSS, JS" />
          </div>
        </div>
      </div>{" "}
      <ProjectVideo title="/video/caseit.webm" detail="video/webm" />
      <ProjectText detail=" The site serves as an engaging introduction to SFU CaseIT’s international case competition. Featuring the international recognization the organization holds, the organizing commitee's legacy, and what's is offered to those who compete." />
      <ProjectVideo title="/video/caseit-tour.webm" detail="video/webm" />
      <ProjectVideo
        title="/video/caseit-discover.webm"
        detail="video/webm"
      />{" "}
      <ProjectText detail="Introduces the global competitors to Vancouver by introducing them to landmarks and possible attractions they will be exploring" />
      <ProjectVideo title="/video/caseit-sponsor.webm" detail="video/webm" />
      <ProjectText detail=" Represents the sponsors of the event that help make the case competition come to life." />
      <ProjectVideo title="/video/caseit-team.webm" detail="video/webm" />
      <ProjectText detail="Features the team behind the event that create, organize, and run the case competition" />
      <NextProject link="/projects/pivot" />
    </ScrollEffect>
  );
}
