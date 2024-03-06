import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [isHovered, setIsHovered] = useState(false);

  const NavItems = [
    {
      link: "/",
      text: "HOME",
    },
    {
      link: "/about",
      text: "ABOUT",
    },
    {
      link: "/files/resume.pdf",
      text: "RESUME",
    },
    {
      link: "https://www.linkedin.com/in/samantha-chung-76a0961bb/",
      text: "LINKEDIN",
    },

    {
      link: "https://github.com/smchng",
      text: "GITHUB",
    },
    {
      link: "mailto:s.chng02@gmail.prettierrc.js.com",
      text: "EMAIL",
    },
  ];
  return (
    <div className="fixed flex pb-[10px] pt-[25px] px-[2vw] z-50 space-x-[5vw] backdrop-blur-lg bg-navy opacity-75 w-full border-b border-white">
      <div className="relative flex z-10 w-full">
        <div className="flex space-x-[5vw] w-full">
          {NavItems.slice(0, 2).map((item, index) => (
            <Link href={item.link} key={index}>
              <p className="text-white text-[10px] md:text-[11px]">
                {item.text}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex space-x-[3vw] justify-end w-full">
          {NavItems.slice(2, 6).map((item, index) => (
            <Link href={item.link} key={index} target="_blank">
              <p className="text-white  text-[10px] md:text-[11px] ">
                {item.text}
                {index !== NavItems.slice(2, 6).length - 1 && (
                  <span className="pl-[3vw]">/</span>
                )}
              </p>
            </Link>
          ))}
        </div>
      </div>{" "}
    </div>
  );
};

export default Nav;
