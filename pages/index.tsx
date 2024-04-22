import React, { useState, useContext, useEffect, useLayoutEffect } from "react";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Project } from "@/components/project";

import img from "@/public/imgs/stock.png";
import eunoia from "@/public/imgs/eunoia.jpg";
import caseit from "@/public/imgs/caseit.png";
import coffee from "@/public/imgs/coffee.png";
import distill from "@/public/imgs/distill.png";
import yvr from "@/public/imgs/yvr.png";
import pivot from "@/public/imgs/pivot.webp";

export default function Home() {
  const [selectedTag, setSelectedTag] = useState("");
  const uniqueTags = Array.from(new Set(["dev", "research"]));
  const ProjectItems = [
    {
      title: "WEB DEVELOPER",
      group: "EUNOIA DESIGN JAM",
      link: "eunoiadesign2024.com",
      skill: "tailwind, next.js",
      page: "/projects/eunoia",
      tag: "dev",
      img: eunoia,
    },
    {
      title: "WEB DEVELOPER",
      group: "CASEIT",
      link: "https://www.caseit.org/",
      skill: "html/css, js",
      page: "/projects/caseit",
      tag: "dev",
      img: caseit,
    },
    {
      title: "UX/UI RESEARCHER",
      group: "YVR KIOSK",
      link: "",
      skill: "figma, user reserch",
      page: "/projects/yvr",
      tag: "research",
      img: yvr,
    },
    {
      title: "WEB DEVELOPER",
      group: "PIVOT",
      link: "https://pivot.caseit.org/",
      skill: "react, html/css",
      page: "/projects/pivot",
      tag: "dev",
      img: pivot,
    },
    {
      title: "WEB DEVELOPER",
      group: "DISTILL BREW",
      link: "https://distill-brew.vercel.app/",
      skill: "next.js, tailwind",
      page: "/projects/distill",
      tag: "dev",
      img: distill,
    },
    // {
    //   title: "DATA ANALYST",
    //   group: "COFFEE BEAN ANALYSIS",
    //   link: "https://observablehq.com/d/ac8f1f9714f7840e",
    //   skill: "sql, js",
    //   page: "/projects/coffee",
    //   tag: "research",
    //   img: coffee,
    // },

    // {
    //   title: "DEVELOPER",
    //   group: "RECAP",
    //   link: "",
    //   skill: "python",
    //   page: "/projects/recap",
    //   tag: "dev",
    //   img: eunoia,
    // },
  ].filter((item) => selectedTag === "all" || item.tag === selectedTag);
  const handleFilterClick = (tag: string) => {
    setSelectedTag(tag);
  };
  useEffect(() => {
    setSelectedTag("all");
  }, []);

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
        <div className="flex flex-col justify-end m-0 ">
          <h1 className="mb-0 leading-none text-[8vw]">CREATIVE</h1>
          <h1 className="mt-0 text-[8vw]">DEVELOPER</h1>
        </div>
        <p className="flex flex-col justify-end m-0 pb-[2vw] md:pl-[2vw]">
          I aim to enhance digital experiences with motion with a focus on
          accessibility.{" "}
        </p>{" "}
      </div>
      <Marquee
        autoFill
        className="space-x-3 tracking-widest md:text-lg my-[5vh]"
      >
        DIGITAL ARCHIVE
      </Marquee>
      <div className={`py-[5vh] grid ${flexDirection}`}>
        <Image
          src={hoveredProject !== null ? ProjectItems[hoveredProject].img : img}
          alt="project title card"
          style={{
            height: isSmallViewport ? "40vh" : "80vh",
            width: "100%",
            maxWidth: isSmallViewport ? "500px" : "100%",
          }}
          className={"max-h-[80vh] 2xl:max-h-[70vh] align-center object-cover "}
        ></Image>
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
            <div className={`overflow-y-auto scroll-container  ${projectSize}`}>
              {ProjectItems.map((item, index) => (
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
    </div>
  );
}
