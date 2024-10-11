"use client";
import React, { useState, useContext, useEffect, useLayoutEffect } from "react";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Project } from "@/components/project";
import * as project from "@/content/home_content";
import { FadeIn, SlideIn } from "@/components/fadeIn";

export default function Home() {
  const [selectedTag, setSelectedTag] = useState("");
  const uniqueTags = Array.from(new Set(["dev", "research"]));

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0
  );
  const [aspectRatio, setAspectRatio] = useState(0);
  const [flexDirection, setFlexDirection] = useState("");
  const [projectSize, setProjectSize] = useState("");
  const [filterSize, setFilterSize] = useState("");

  const filteredItems = project.ProjectItems.filter(
    (item) => selectedTag === "all" || item.tag === selectedTag
  );
  const handleFilterClick = (tag: string) => {
    setSelectedTag(tag);
  };
  useEffect(() => {
    setSelectedTag("all");
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Check if window is defined (client-side)
      if (typeof window !== "undefined") {
        const newWindowWidth = window.innerWidth;
        const newWindowHeight = window.innerHeight;
        const newAspectRatio = newWindowWidth / newWindowHeight;

        setWindowWidth(newWindowWidth);
        setWindowHeight(newWindowHeight);
        setAspectRatio(newAspectRatio);

        const isSmallScreen = newWindowWidth < 768; // md breakpoint is 768px
        const isLargeScreen = newWindowWidth >= 1300; // lg breakpoint is 1024px
        const isShortHeight = newWindowHeight < 700;

        // Set flexDirection based on conditions
        if (newAspectRatio >= 2) {
          setFlexDirection("grid-cols-2 gap-[2vw]");
        } else {
          setFlexDirection("grid-col-1");
        }

        if (isShortHeight && isSmallScreen) {
          setProjectSize("max-h-[40vh]");
          setFilterSize("my-[5vh]");
        } else {
          setProjectSize("max-h-[70vh]");
          setFilterSize("mb-[1vh]");
        }
      }
    };

    // Call handleResize initially to set initial values
    handleResize();

    // Attach the handleResize function to the window resize event
    window.addEventListener("resize", handleResize);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const handleProjectHover = (index: number) => {
    setHoveredProject(index);
  };
  const isSmallViewport =
    typeof window !== "undefined" && window.innerWidth < 500;
  return (
    <div>
      <div className="p-[2vw] h-screen flex flex-col sm:flex-row justify-center md:justify-start text-center md:text-left">
        <SlideIn>
          <h1 className="mb-0 leading-none text-[8vw]">
            {project.HomeText.title1}
          </h1>
          <h1 className="mt-0 text-[8vw]">{project.HomeText.title2}</h1>
        </SlideIn>
      </div>
      <FadeIn className="m-0 px-[2vw] py-[10vw]">
        <p>{project.HomeText.logline}</p>
      </FadeIn>
      <FadeIn>
        <Marquee
          autoFill
          className="space-x-3 tracking-widest md:text-lg my-[5vh]"
        >
          {project.HomeText.banner}
        </Marquee>
      </FadeIn>
      <FadeIn>
        <div className={`py-[5vh] grid ${flexDirection}`}>
          <Image
            src={
              hoveredProject !== null
                ? project.ProjectItems[hoveredProject].img
                : "/imgs/stock.png" // Correct relative path with a leading slash
            }
            alt="project title card"
            width={isSmallViewport ? 500 : 1000} // Provide width
            height={isSmallViewport ? 400 : 800} // Provide height
            style={{
              height: isSmallViewport ? "40vh" : "80vh",
              width: "100%",
              maxWidth: isSmallViewport ? "500px" : "100%",
            }}
            className={
              "max-h-[80vh] 2xl:max-h-[70vh] align-center object-cover"
            }
          />
          <div>
            <div
              className={`${filterSize} md:pb-[1vh] pt-[1vh] flex space-x-2 text-blue cursor-pointer`}
            >
              <p
                onClick={() => handleFilterClick("all")}
                className=" hover:text-white"
              >
                view all
              </p>
              <p className="inline slash">/</p>
              {uniqueTags.map((tag, index) => (
                <React.Fragment key={index}>
                  <a
                    onClick={() => handleFilterClick(tag)}
                    className=" hover:text-white"
                  >
                    {tag}
                  </a>
                  {index !== uniqueTags.length - 1 && (
                    <p className="inline slash">/</p>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="relative flex flex-col overflow-hidden ">
              {/* <div className="absolute top-0 bg-gradient-to-t from-transparent to-navy w-full h-[4vw] z-10"></div> */}
              <div
                className={`overflow-y-auto scroll-container  ${projectSize}`}
              >
                {filteredItems.map((item, index) => (
                  <Project
                    key={index}
                    title={item.title}
                    group={item.group}
                    link={item.link}
                    skill={item.skill}
                    page={item.page}
                    onMouseOver={() => handleProjectHover(index)}
                    hovered={index === hoveredProject}
                  />
                ))}
              </div>
              {/* <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-navy w-full h-[4vw] z-10"></div> */}
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
