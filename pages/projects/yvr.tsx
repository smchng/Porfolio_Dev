import {
  ProjectContent,
  ProjectVideo,
  ProjectText,
  ScrollEffect,
  NextProject,
  ProjectImage,
} from "@/components/project";
import React, { useRef, useState, useEffect } from "react";

import { ProjectTable, ProjectLink } from "@/components/table";

export default function Yvr() {
  return (
    <ScrollEffect>
      <ProjectContent
        title="YVR KIOSK"
        subtext="FLIGHT INFORMATION DISPLAY AT YVR"
        detail="Conducted investigative research into Vancouver International Airport’s protocols in observations desks. Revised and developed a tangible solution through interviewing plane spotters and site visits. The proposed solution bridges the public with YVR and enforces YVR’s objective to serve the community."
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
              title="Figma Document"
              component="https://www.figma.com/file/AN0DgzSA0baGpXx5npuq62/SFU-SIAT-X-YVR-PLANE-SPOTTER-PROJECT-(FINAL)?type=design&node-id=1%3A396&mode=design&t=IWqFbrtL2KCgHTic-1"
            />
            <ProjectTable header="ROLE" component="UX Researcher" />{" "}
            <ProjectTable header="TIMELINE" component="4 months" />{" "}
            <ProjectTable header="TOOLS" component="Figma, Maya" />
          </div>
        </div>
      </div>{" "}
      <ProjectText
        title="Problem Space"
        detail="YVR's South Terminal’s platform presents the challenge of underutilised, outdated and insufficient signage. The limited information provided by YVR drives planespotters to outsource information, resulting in tedious handling during planespotting."
      />
      <ProjectImage src="/imgs/yvr-terminal.png" />
      <ProjectText
        title="Objective"
        detail="How might we enable engagement through fostering community connections, ensuring the conveyance of accurate information, and reducing the cognitive load for aviation enthusiasts"
      />
      <ProjectImage src="/imgs/yvr-journey.png" />
      <ProjectText
        title="Research Process"
        detail="We began identifying possible issues within the airport in relation to passengers passing through security and navigating the space. As well as painpoints in the relationships YVR has with Vancouver and related networks that they aim to uphold. This included interactive brainstorming sessions as well as live site visits of the airport."
      />
      <ProjectImage src="/imgs/yvr-diagrams2.png" />
      <ProjectText
        title="Interviews and Iteration"
        detail="In order to narrow the scope of our project, we interviewed real plane enthusiasts to gain their insights on where YVR could improve."
      />
      <ProjectImage src="/imgs/yvr-interviews.png" />
      <ProjectText
        title="The Solution"
        detail="the spotter’s kiosks invites planespotters to contribute to the overall success of the activity, by introducing a space for content to be showcased to the community, expanding the engagement and connection beyond media engagement. "
      />
      <ProjectImage src="/imgs/yvr-poster.png" />
      <ProjectText
        title="Why it works"
        detail="According to our research, planespotters expressed the complications that stem from mishandling gear equipment due to, including missed opportunities for desired shots which felt frustrating and drove planespotters to external sites for their activities. The chosen interactive system, Spotters Kiosk is a tool to foster the connection between YVR and its planespotting community; aiding aircraft enthusiasts with necessary content to prevent the urgency from outsourcing information.  Equipped with flexible features, it compels planespotters to contribute to the community through crafted knowledge in a central domain, such as South Terminal."
      />
      <ProjectImage src="/imgs/yvr-interface1.png" />
      <ProjectText
        title="Vertical kiosk in action"
        detail="Our journey map research indicated that the majority of planespotters spend downtime waiting inside their cars, the vertical board serves as an information source extending to those not situated directly on the platform. Positioning and height increases board visibility in cases of platform overcrowding, where users are unable to access horizontal board, allowing for information to remain accessible. Keeping visitors informed of flight status and aircraft runway timing."
      />
      <ProjectText
        title="Horizontal kiosk in action"
        detail="In our participatory workshop, planepsotters expressed satisfaction of external individuals participating in spotting. The kiosk showcased photographs assist for anyone undergoing the spotting process, while maintaining YVR’s integrity via image credidation. 
Digital touchscreen format enables interface interactions, while prolonging product durability, ultimately ensuring functionality and current information."
      />
      <ProjectVideo title="/video/yvr.mp4" detail="video/mp4" />
      <ProjectText
        title="Takeaway"
        detail="Working in a team to develop this project was an enlightening experience that underscored the importance of communication and collaboration. Through numerous interviews and iterative cycles of solution development, we navigated various challenges and refined our approach to arrive at the final prototype. These interactions not only fostered a deeper understanding of the problem space but also highlighted the significance of open dialogue and receptivity to feedback within a team setting. Ultimately, this journey taught us that effective teamwork is not merely about individual contributions but rather the collective effort towards a shared goal, where each iteration and exchange serves as a stepping stone towards innovation and excellence."
      />
      <NextProject link="/projects/pivot" />
    </ScrollEffect>
  );
}
