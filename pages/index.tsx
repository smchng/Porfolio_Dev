import { useEffect, useState } from 'react';

import Image from "next/image";
import Marquee from "react-fast-marquee";
import Project from "@/components/project"

import img from "@/public/imgs/stock.jpg"

export default function Home() {

  const ProjectItems = [
    {
      title: "WEB DEVELOPER",
      group: "EUNOIA DESIGN JAM",
      link: "eunoiadesign2024.com",
      skill:"typescript, react, next.js, tailwind"
    },
    {
      title: "WEB DEVELOPER",
      group: "EUNOIA DESIGN JAM",
      link: "eunoiadesign2024.com",
      skill:"typescript, react, next.js, tailwind"
    },
    {
      title: "WEB DEVELOPER",
      group: "EUNOIA DESIGN JAM",
      link: "eunoiadesign2024.com",
      skill:"typescript, react, next.js, tailwind"
    },
    {
      title: "WEB DEVELOPER",
      group: "EUNOIA DESIGN JAM",
      link: "eunoiadesign2024.com",
      skill:"typescript, react, next.js, tailwind"
    },
    {
      title: "WEB DEVELOPER",
      group: "EUNOIA DESIGN JAM",
      link: "eunoiadesign2024.com",
      skill:"typescript, react, next.js, tailwind"
    },
  ]

  const [flexDirection, setFlexDirection] = useState('');
  const [imgMargin, setImgMargin] = useState('');

  useEffect(() => {
    // Check the window height and set flex direction accordingly
    const handleResize = () => {
      setFlexDirection(window.innerHeight > 700 ? 'flex-col' : '');
      setImgMargin(window.innerHeight > 700 ? 'm-auto' : 'mx-[3vw]');
    };

    // Initial setup
    handleResize();

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <div className="h-screen flex flex-col justify-end m-0 p-[2vw] ">
        <h1 className="mb-0 leading-none text-[8vw]">CREATIVE</h1>
        <h1 className="mt-0 text-[8vw]">DEVELOPER</h1>
      </div>
      <Marquee autoFill className="space-x-3 tracking-widest text-lg">DIGITAL ARCHIVE</Marquee>
      <div className={`py-[5vh] h-screen flex ${flexDirection}`}>
        <Image src={img} alt="lighthouse" className={`max-h-[80vh] 2xl:max-h-[70vh] max-w-[95vw] md:max-w-[80vw] align-center object-cover ${imgMargin}`}></Image>
        <div>
        <div className="my-[0.25vh]">filters</div>
        <div className="relative flex flex-col overflow-hidden">
         <div className="absolute top-0 bg-gradient-to-t from-transparent to-navy w-full h-[4vw] z-10"></div>
          <div className="overflow-y-auto max-h-[30vh] scroll-container">
            {ProjectItems.map((item, index) => (
              <Project key={index} title={item.title} group={item.group} link={item.link} skill={item.skill} />
            ))}
          </div>
           <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-navy w-full h-[4vw] z-10"></div>
        </div>
      </div>
      </div>
    </div>
  );
}
