import {
  ProjectContent,
  ProjectVideo,
  ProjectText,
  NextProject,
} from "@/components/project";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ProjectTable, ProjectLink } from "@/components/table";

export default function Coffee() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflowY = getInitialOverflowStyle();

    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  const getInitialOverflowStyle = () => {
    return isPortrait() ? "auto" : "hidden";
  };

  const isPortrait = () => {
    return window.innerHeight > window.innerWidth;
  };

  const handleOrientationChange = () => {
    document.body.style.overflowY = getInitialOverflowStyle();
  };

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const isScrollable = container.scrollWidth > container.clientWidth;

      if (isScrollable) {
        container.scrollLeft += e.deltaY;
        e.preventDefault(); // Prevent vertical scrolling
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="md:flex md:flex-row md:h-screen md:overflow-x-scroll scroll-container px-[3vw]"
    >
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
      <NextProject link="/projects/distill" />
    </div>
  );
}
