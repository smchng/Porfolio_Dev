import {
  ProjectContent,
  ProjectVideo,
  ProjectText,
  ScrollEffect,
  NextProject,
} from "@/components/project";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ProjectTable, ProjectLink } from "@/components/table";

export default function Recap() {
  return (
    <ScrollEffect>
      <ProjectContent
        title="RECAP"
        subtext="DISPOSABLE CAMERA THAT DELAYS THE RELEASE OF PHOTOS"
        detail="Detail about the project"
      />
      <div className="w-screen relative whitespace-normal shrink-0">
        {" "}
        {/* <h4 className="text-blue py-[15vh]">EUNOIA 2024</h4> */}
        <div className="md:grid md:grid-cols-2 pt-[25vh]">
          <h2 className="text-[40px] text-base lg:text-lg pb-[5vh]">
            ABOUT <br /> THE PROJECT
          </h2>{" "}
          <div className="mr-[10vw]">
            <div className="pb-[3vh]">
              <p className="text-blue pb-[1vh]">EXT. LINKS</p>
              <div className="border-b border-white "></div>
              <Link href="https://eunoiadesign.ca/" target="_blank">
                <p className="pt-[1vh]">visit</p>
              </Link>
            </div>
            <ProjectTable header="ROLE" component="Software Developer" />{" "}
            <ProjectTable header="TIMELINE" component="24h Hackathon" />{" "}
            <ProjectTable header="TOOLS" component="Python" />
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
      <NextProject link="/projects/distill" />
    </ScrollEffect>
  );
}
