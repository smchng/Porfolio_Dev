import {
  ProjectContent,
  ProjectVideo,
  ProjectText,
  ScrollEffect,
  NextProject,
} from "@/components/project";
import React, { useRef, useState, useEffect } from "react";

import { ProjectTable, ProjectLink } from "@/components/table";

export default function Coffee() {
  return (
    <ScrollEffect>
      <ProjectContent
        title="COFFEE BEAN ANALYSIS"
        subtext="ANALYZING TRENDS AND VALUE OF COFFEE BEANS AROUND THE WORLD"
        detail="Contextualized multiple datasets on coffee bean farming and trade. Sought to discover which country grew the highest quality bean for the lowest cost. Compared multiple locations, growth environments, and bean quality in search for the leading product."
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
              component="https://observablehq.com/d/ac8f1f9714f7840e"
            />
            <ProjectTable header="ROLE" component="Developer, Data Analyst" />{" "}
            <ProjectTable header="TIMELINE" component="3 months" />{" "}
            <ProjectTable header="TOOLS" component="JS, SQL, Observable" />
          </div>
        </div>
      </div>{" "}
      <NextProject link="/projects/yvr" />
    </ScrollEffect>
  );
}
