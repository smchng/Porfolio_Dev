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
  return (
    <div>
      <div className="h-screen flex flex-col justify-end m-0 p-[2vw] ">
        <h1 className="mb-0 leading-none text-[8vw]">CREATIVE</h1>
        <h1 className="mt-0 text-[8vw]">DEVELOPER</h1>
      </div>
      <Marquee autoFill className="space-x-3 tracking-widest text-lg">DIGITAL ARCHIVE</Marquee>
      <div className="py-[5vh] h-screen flex 2xl:flex-col">
        <Image src={img} alt="lighthouse" className="max-h-[80vh] 2xl:max-h-[70vh] max-w-[80vw] mx-[3vw] 2xl:m-auto align-center object-cover"></Image>
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
