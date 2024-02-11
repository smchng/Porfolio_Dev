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
      skill: "typescript, react, next.js, tailwind",
    },
    {
      title: "WEB DEVELOPER",
      group: "EUNOIA DESIGN JAM",
      link: "eunoiadesign2024.com",
      skill: "typescript, react, next.js, tailwind",
    },
    {
      title: "WEB DEVELOPER",
      group: "EUNOIA DESIGN JAM",
      link: "eunoiadesign2024.com",
      skill: "typescript, react, next.js, tailwind",
    },
    {
      title: "WEB DEVELOPER",
      group: "EUNOIA DESIGN JAM",
      link: "eunoiadesign2024.com",
      skill: "typescript, react, next.js, tailwind",
    },
    {
      title: "WEB DEVELOPER",
      group: "EUNOIA DESIGN JAM",
      link: "eunoiadesign2024.com",
      skill: "typescript, react, next.js, tailwind",
    },
  ];

  const [flexDirection, setFlexDirection] = useState("");
  const [projectSize, setProjectSize] = useState("");
  const [filterSize, setFilterSize] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 768; // md breakpoint is 768px
      const isLargeScreen = window.innerWidth >= 1300; // lg breakpoint is 1024px
      const isShortHeight = window.innerHeight < 700;

      // Set flexDirection based on conditions
      if (isShortHeight && (isSmallScreen || isLargeScreen)) {
        setFlexDirection("grid-col-1");
      } else {
        setFlexDirection("grid-cols-2 gap-[2vw]");
      }
      if (isShortHeight && isSmallScreen) {
        setProjectSize(" max-h-[40vh]");
        setFilterSize("my-[5vh]");
      } else {
        setProjectSize(" max-h-[65vh]");
        setFilterSize("mb-[1vh]");
      }
    };

    // Initial setup
    handleResize();

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

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
