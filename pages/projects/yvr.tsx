import { ProjectContent } from "@/components/project";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ProjectTable } from "@/components/table";

export default function Yvr() {
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
        title="YVR KIOSK"
        subtext="FLIGHT INFORMATION DISPLAY AT YVR"
        detail="Conducted investigative research into Vancouver International Airport’s protocols in observations desks. Revised and developed a tangible solution through interviewing plane spotters and site visits. The proposed solution bridges the public with YVR and enforces YVR’s objective to serve the cimmunity."
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
              <Link
                href="https://www.figma.com/file/9abU9IIBRI3TeCnvMwTm0f/Final-Presentation-Slide-Deck-(Copy)?type=design&t=HWhO42mqZwsxPGO2-6"
                target="_blank"
              >
                <p className="pt-[1vh]">visit</p>
              </Link>
            </div>
            <ProjectTable header="ROLE" component="UX Researcher" />{" "}
            <ProjectTable header="TIMELINE" component="4 months" />{" "}
            <ProjectTable header="TOOLS" component="Figma, Maya" />
          </div>
        </div>
      </div>{" "}
      <div className="absolute bottom-0 left-0 w-full border-t border-white">
        <Link href="/projects/recap">
          <p className="pt-[1vh] px-2 py-1 px-3 justify-end flex">next</p>
        </Link>
      </div>
    </div>
  );
}
