import {
  ProjectContent,
  ProjectVideo,
  ProjectText,
  NextProject,
} from "@/components/project";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ProjectTable, ProjectLink } from "@/components/table";

export default function Distill() {
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
        title="DISTILL BREW"
        subtext="E-COMMERCE WEBSITE FOR COFFEE APPLIANCES"
        detail="Aims to provide customers easy access to quality equipment to suit their needs. Includes introduction to the art of brewing and instructions on how to create a quality brew.

Designed and implemented an e-commerce website that showcases quality coffee equipment. Utilizes 3D textured and rendered models of the product to introduce users to the products.

Created and designed by a team of 4, this website is adapted from a 3D animation video based on the process of siphon coffee. The website is focused on accessible navigation and engaging movement"
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
              component="https://distill-brew.vercel.app/"
            />
            <ProjectTable
              header="ROLE"
              component="Web Developer, Project Manager"
            />{" "}
            <ProjectTable header="TIMELINE" component="3 months" />{" "}
            <ProjectTable header="TOOLS" component="Maya, Next.js, Tailwind" />
          </div>
        </div>
      </div>{" "}
      <ProjectVideo title="/video/distill-set.webm" detail="video/webm" />
      <ProjectText detail=" Introduces Distill's carefully crafted siphon soffee set that includes the buner, paddle, filter, and machine. Information about the item is provided for consumers to explore. As well as 3D rendered examples of the items to demonstrate its use and capabilities." />
      <ProjectVideo title="/video/distill-water.webm" detail="video/webm" />
      <ProjectText detail="Focus on the videos for better comprehension of their functions" />
      <ProjectVideo title="/video/distill-checkout.webm" detail="video/webm" />
      <ProjectText detail="Simple and intuitive checkout process with clear points of actions to complete the process quickly and smoothly." />
      <ProjectVideo title="/video/distill-review.webm" detail="video/webm" />
      <ProjectText detail="Hear from out customers and read their reviews at your own pace." />
      <NextProject link="/projects/coffee" />
    </div>
  );
}
