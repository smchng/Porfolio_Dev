import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
    const [isHovered, setIsHovered] = useState(false);
    
    const NavItems = [
        {
            link: "/",
            text:"HOME"
        },
        {
            link: "/",
            text:"ABOUT"
        },{
            link: "/",
            text:"RESUME"
        },
        {
            link: "/",
            text:"LINKEDIN"
        },
        
        {
            link: "/",
            text:"GITHUB"
        },{
            link: "/",
            text:"EMAIL"
        },
    ]
  return (
    <div className="fixed inset-0 flex items-end m-0 p-[2vw] z-50 space-x-[5vw]">
    {/* Blurred background container */}
    <div className="absolute inset-0 backdrop-blur-lg bg-navy opacity-75"></div>

    {/* Content container */}
    <div className="relative flex items-end z-10 w-full">
        <div className="flex space-x-[5vw] flex-grow">
                  
                  {NavItems.slice(0, 2).map((item, index) => (
                      <Link href={item.link} key={index}>
                          <p className="text-white">{item.text}</p>
                      </Link>))}
        </div>

        <div className="flex space-x-[5vw]">
       {NavItems.slice(2,6).map((item, index) => (
                      <Link href={item.link} key={index}>
                          <p className="text-white">{item.text}</p>
                      </Link>))}
        </div>
    </div>
    </div>


  );
};

export default Nav;
