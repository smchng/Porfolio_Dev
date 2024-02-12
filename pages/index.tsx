import { useEffect, useState } from "react";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import Project from "@/components/project";

import img from "@/public/imgs/stock.jpg";

export default function Home() {
  const ProjectItems = [
    {
      title: "WEB DEVELOPER",
      group: "EUNOIA DESIGN JAM",
      link: "eunoiadesign2024.com",
      skill: "tailwind, next.js",
    },
    {
      title: "WEB DEVELOPER",
      group: "CASEIT",
      link: "https://www.caseit.org/",
      skill: "html/css, js",
    },
    {
      title: "WEB DEVELOPER",
      group: "PIVOT",
      link: "https://pivot.caseit.org/",
      skill: "react, html/css",
    },
    {
      title: "WEB DEVELOPER",
      group: "DISTILL BREW",
      link: "https://distill-brew.vercel.app/",
      skill: "next.js, tailwind",
    },
    {
      title: "DATA ANALYST",
      group: "COFFEE BEAN ANALYSIS",
      link: "https://observablehq.com/d/ac8f1f9714f7840e",
      skill: "sql, js",
    },
    {
      title: "UX/UI RESEARCHER",
      group: "YVR KIOSK",
      link: "",
      skill: "figma, user reserch",
    },
    {
      title: "DEVELOPER",
      group: "RECAP",
      link: "",
      skill: "pythin",
    },
  ];

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
          setProjectSize("max-h-[65vh]");
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

  return (
    <div>
      <div className="h-screen flex flex-col justify-end m-0 p-[2vw] ">
        <h1 className="mb-0 leading-none text-[8vw]">CREATIVE</h1>
        <h1 className="mt-0 text-[8vw]">DEVELOPER</h1>
      </div>
      <Marquee autoFill className="space-x-3 tracking-widest text-lg my-[5vh]">
        DIGITAL ARCHIVE
      </Marquee>
      <div className={`py-[5vh] h-screen grid ${flexDirection}`}>
        <Image
          src={img}
          alt="lighthouse"
          className={"max-h-[80vh] 2xl:max-h-[70vh] align-center object-cover "}
        ></Image>
        <div>
          <div className={`${filterSize}`}>
            <p>view all</p>
          </div>
          <div className="relative flex flex-col overflow-hidden ">
            <div className="absolute top-0 bg-gradient-to-t from-transparent to-navy w-full h-[4vw] z-10"></div>
            <div className={`overflow-y-auto scroll-container  ${projectSize}`}>
              {ProjectItems.map((item, index) => (
                <Project
                  key={index}
                  title={item.title}
                  group={item.group}
                  link={item.link}
                  skill={item.skill}
                />
              ))}
            </div>
            <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-navy w-full h-[4vw] z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
