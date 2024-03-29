import {
  ProjectContent,
  ProjectVideo,
  ProjectText,
  ScrollEffect,
  NextProject,
} from "@/components/project";
import React, { useRef, useState, useEffect } from "react";

import { ProjectTable, ProjectLink } from "@/components/table";

export default function Yvr() {
  return (
    <ScrollEffect>
      <ProjectContent
        title="YVR KIOSK"
        subtext="FLIGHT INFORMATION DISPLAY AT YVR"
        detail="Conducted investigative research into Vancouver International Airport’s protocols in observations desks. Revised and developed a tangible solution through interviewing plane spotters and site visits. The proposed solution bridges the public with YVR and enforces YVR’s objective to serve the cimmunity."
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
              component="https://www.figma.com/file/9abU9IIBRI3TeCnvMwTm0f/Final-Presentation-Slide-Deck-(Copy)?type=design&t=HWhO42mqZwsxPGO2-6"
            />
            <ProjectTable header="ROLE" component="UX Researcher" />{" "}
            <ProjectTable header="TIMELINE" component="4 months" />{" "}
            <ProjectTable header="TOOLS" component="Figma, Maya" />
          </div>
        </div>
      </div>{" "}
      <ProjectVideo title="/video/yvr.mp4" detail="video/mp4" />
      <ProjectText detail=" The site serves as an engaging introduction to SFU CaseIT’s international case competition. Featuring the international recognization the organization holds, the organizing commitee's legacy, and what's is offered to those who compete." />
      <ProjectVideo title="/video/caseit-tour.webm" detail="video/webm" />
      <ProjectText detail="Introduces the global competitors to Vancouver by introducing them to landmarks and possible attractions they will be exploring" />
      <ProjectVideo title="/video/yvr.mp4" detail="video/mp4" />
      <ProjectText detail=" Represents the sponsors of the event that help make the case competition come to life." />
      {/* <Image
        src="/imgs/yvr.png"
        alt="kiosk interface"
        style={{ width: "auto", height: "80%" }}
      /> */}
      <ProjectText detail="Features the team behind the event that create, organize, and run the case competition" />
      <NextProject link="/projects/recap" />
    </ScrollEffect>
  );
}
