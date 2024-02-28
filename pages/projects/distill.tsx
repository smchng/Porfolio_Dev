import { ProjectContent } from "@/components/project";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ProjectTable } from "@/components/table";

export default function Distill() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += e.deltaY;
    }
  };
  return (
    <div
      ref={containerRef}
      className="flex flex-row h-screen overflow-x-scroll scroll-container"
      onWheel={handleScroll}
    >
      <ProjectContent
        title="EUNOIA 2024"
        subtext="E-COMMERCE WEBSITE FOR COFFEE APPLIANCES"
        detail="Created and designed by a team of 4, this website is adapted from a 3D animation video based on the process of siphon coffee. The website is focused on accessible navigation and engaging movement"
      />
      <div className="w-screen relative whitespace-normal shrink-0">
        {" "}
        {/* <h4 className="text-blue py-[15vh]">EUNOIA 2024</h4> */}
        <div className="grid grid-cols-2 pt-[25vh]">
          <h2 className="text-[40px]">
            ABOUT <br /> THE PROJECT
          </h2>{" "}
          <div className="mr-[10vw]">
            <div className="pb-[3vh]">
              <p className="text-blue pb-[1vh]">EXT. LINKS</p>
              <div className="border-b border-white "></div>
              <Link href="https://distill-brew.vercel.app/" target="_blank">
                <p className="pt-[1vh]">visit</p>
              </Link>
            </div>
            <ProjectTable
              header="ROLE"
              component="Web Developer, Project Manager"
            />{" "}
            <ProjectTable header="TIMELINE" component="3 months" />{" "}
            <ProjectTable header="TOOLS" component="Maya, Next.js, Tailwind" />
          </div>
        </div>
      </div>{" "}
      <div className="absolute bottom-0 left-0 w-full border-t border-white">
        <Link href="/projects/coffee">
          <p className="pt-[1vh] px-2 py-1 px-3 justify-end flex">next</p>
        </Link>
      </div>
    </div>
  );
}
