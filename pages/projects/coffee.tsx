import { ProjectContent } from "@/components/project";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ProjectTable } from "@/components/table";

export default function Coffee() {
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
        title="COFFEE BEAN ANALYSIS"
        subtext="ANALYZING TRENDS AND VALUE OF COFFEE BEANS AROUND THE WORLD"
        detail="Detail about the project"
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
              <Link
                href="https://observablehq.com/d/ac8f1f9714f7840e"
                target="_blank"
              >
                <p className="pt-[1vh]">visit</p>
              </Link>
            </div>
            <ProjectTable header="ROLE" component="Developer, Data Analyst" />{" "}
            <ProjectTable header="TIMELINE" component="3 months" />{" "}
            <ProjectTable header="TOOLS" component="JS, SQL, Observable" />
          </div>
        </div>
      </div>{" "}
      <div className="absolute bottom-0 left-0 w-full border-t border-white">
        <Link href="/projects/yvr">
          <p className="pt-[1vh] px-2 py-1 px-3 justify-end flex">next</p>
        </Link>
      </div>
    </div>
  );
}