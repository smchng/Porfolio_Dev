import {
  ProjectContent,
  ProjectVideo,
  ProjectText,
  ScrollEffect,
  NextProject,
} from "@/components/project";
import React, { useRef, useState, useEffect } from "react";

import { ProjectTable, ProjectLink, CombinedTable } from "@/components/table";

export default function Caseit() {
  return (
    <ScrollEffect>
      <ProjectContent
        title="CASEIT 2024"
        subtext="INFORMATION SITE FOR INTERNATIONAL CASE COMPETITION"
        detail="Applied updated event information for international competitor and prospecting visitors. Implemented new pages under DiscoverIT that informed competitors about the city of Vancouver. During the event week, site featured LiveChat services and live updates on occuring case presentations."
      />
      <CombinedTable>
        {[
          <div key="child1">
            {" "}
            <ProjectLink
              header="EXT. LINKS"
              title="visit"
              component="https://caseit.org"
            />
            <ProjectTable header="ROLE" component="Web Developer" />{" "}
          </div>,
          <div key="child2">
            {" "}
            <ProjectTable header="TIMELINE" component="5 months" />{" "}
            <ProjectTable header="TOOLS" component="HTML, CSS, JS" />
          </div>,
        ]}
      </CombinedTable>
      <ProjectText
        title="About the site"
        detail=" The site serves as an engaging introduction to SFU CaseIT’s international case competition. Featuring the international recognization the organization holds, the organizing commitee's legacy, and what's is offered to those who compete."
      />
      <ProjectVideo title="/video/caseit.webm" detail="video/webm" />
      <ProjectText
        title="Working in a team"
        detail="When working off an existing project, I efficiently locate necessary files and components, streamlining the development process. Leveraging Git, I create a structured project environment, enabling seamless collaboration and version control among team members."
      />
      <ProjectVideo title="/video/caseit-code.webm" detail="video/webm" />
      <ProjectText
        title="Following branding"
        detail="In adhering to established brand identities, I applied specified colors and accurately placed content as outlined by the designer's vision. This ensures seamless integration of design elements, maintaining brand consistency across all platforms and materials."
      />{" "}
      <ProjectVideo
        title="/video/caseit-tours-figma.webm"
        detail="video/webm"
      />
      <ProjectVideo title="/video/caseit-tour.webm" detail="video/webm" />
      <ProjectText
        title="Other features"
        detail="To uphold the professionalism of CaseIt while encouraging participation, the site prominently showcases the individuals behind the scenes, such as sponsors and the organizing committee. By highlighting their contributions, we convey CaseIt's commitment to recognizing and fostering talent, thereby encouraging others to join and contribute to our esteemed establishment."
      />
      <ProjectVideo title="/video/caseit-discover.webm" detail="video/webm" />{" "}
      {/* <ProjectText detail=" Represents the sponsors of the event that help make the case competition come to life." />{" "} */}
      <ProjectVideo title="/video/caseit-sponsor.webm" detail="video/webm" />{" "}
      {/* <ProjectText detail="Features the team behind the event that create, organize, and run the case competition" /> */}
      <ProjectVideo title="/video/caseit-team.webm" detail="video/webm" />
      <ProjectText
        title="Reflection"
        detail="Working off a preexisting project taught me the importance of familiarizing myself with the established file structure, enabling seamless integration and collaboration. Challenging myself to recreate the designer's vision enhanced my skills while navigating pull requests and Git workflows provided invaluable insights into efficient project management and version control."
      />
      <NextProject link="/projects/yvr" />
    </ScrollEffect>
  );
}
