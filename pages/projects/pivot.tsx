import {
  ProjectContent,
  ProjectVideo,
  ProjectText,
  NextProject,
} from "@/components/project";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ProjectTable, ProjectLink } from "@/components/table";

export default function Pivot() {
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
      onWheel={handleScroll}
    >
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
      <ProjectVideo title="/video/pivot-nav.webm" detail="video/webm" />
      <ProjectText detail="Added colour changes to reflect PIVOT brand identity. Navigated and altered the React components to alter the colour depending on the item as well as maintain brands colour rules." />
      <ProjectVideo title="/video/pivot-about.webm" detail="video/webm" />{" "}
      <ProjectText detail="Refreshed information about the legacy of the case competition in order to display PIVOT's timeline accurately." />
      <ProjectVideo title="/video/pivot-oc.webm" detail="video/webm" />
      <ProjectText detail="Revamped the organizing commitee's page with the new members of 2024's team," />
      <NextProject link="/projects/distill" />
    </div>
  );
}
