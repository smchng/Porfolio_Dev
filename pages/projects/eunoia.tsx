import { ProjectContent } from "@/components/project";
import React, { useRef, useState, useEffect } from "react";
import { ProjectTable } from "@/components/table";

export default function Eunoia() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable vertical scrolling on the entire page
    document.body.style.overflowY = "hidden";

    // Cleanup when the component is unmounted
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
      className="flex flex-row h-screen overflow-x-scroll"
      onWheel={handleScroll}
    >
      <ProjectContent
        title="EUNOIA 2024"
        subtext="EVENT WEBSITE WITH INTERACTIVE STICKERS AND ANIMATION"
        detail="Detail about the project"
      />

      <div className="w-screen relative whitespace-normal shrink-0">
        {" "}
        <h4 className="text-blue py-[15vh]">EUNOIA 2024</h4>
        <div className="grid grid-cols-2">
          <h2 className="text-[40px]">
            ABOUT <br /> THE PROJECT
          </h2>{" "}
          <div className="mr-[10vw]">
            <ProjectTable header="EXT. LINKS" component="visit" />
            <ProjectTable header="ROLE" component="Software Developer" />{" "}
            <ProjectTable header="TIMELINE" component="8 weeks" />{" "}
            <ProjectTable header="TOOLS" component="React, Next.js" />
          </div>
        </div>
      </div>
    </div>
  );
}
