import {
  ProjectContent,
  ProjectVideo,
  ProjectText,
  ScrollEffect,
  NextProject,
} from "@/components/project";
import React, { useRef, useState, useEffect } from "react";

import { ProjectTable, ProjectLink } from "@/components/table";

export default function Pivot() {
  return (
    <ScrollEffect>
      <ProjectContent
        title="PIVOT 2024"
        subtext="INFORMATION SITE FOR CASE COMPETITION"
        detail="Updated and refined site features on BC’s business technology management case competition. Applied UI changes to links and interactions to improve user navigation. Updated information pages on sponsors, organizing committee, and legacy."
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
              component="https://pivot.caseit.org/"
            />
            <ProjectTable header="ROLE" component="Web Developer" />{" "}
            <ProjectTable header="TIMELINE" component="4 months" />{" "}
            <ProjectTable header="TOOLS" component="React" />
          </div>
        </div>
      </div>{" "}
      <ProjectText detail="In this role, it was challenging for me to learn and develop a pre-established website. I had to review the fole sturctures and naming conventions in order to find the compoenents and edit them. This was the first project where I used React professionally. When owrkin on the task, I took time to review and explore the project so I placed the right code in the right location." />
      <ProjectVideo title="/video/pivot-nav.webm" detail="video/webm" />
      <ProjectText detail="Added colour changes to reflect PIVOT brand identity. Navigated and altered the React components to alter the colour depending on the item as well as maintain brands colour rules. This task helped me familiarize myself with React file structures and the colour and navigation layout were placed in separate locations." />
      <ProjectVideo title="/video/pivot-about.webm" detail="video/webm" />{" "}
      <ProjectText detail="Refreshed information about the legacy of the case competition in order to display PIVOT's timeline accurately." />
      <ProjectVideo title="/video/pivot-oc.webm" detail="video/webm" />
      <ProjectText detail="Revamped the organizing commitee's page with the new members of 2024's team." />
      <NextProject link="/projects/distill" />
    </ScrollEffect>
  );
}
