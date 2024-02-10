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
<div className="fixed flex m-0 px-[2vw] py-[15px] z-50 space-x-[5vw] backdrop-blur-lg bg-navy opacity-75 w-full">
    <div className="relative flex z-10 w-full">
        <div className="flex space-x-[5vw] w-full">
            {NavItems.slice(0, 2).map((item, index) => (
                <Link href={item.link} key={index}>
                    <p className="text-white">{item.text}</p>
                </Link>
            ))}
        </div>
        <div className="flex space-x-[5vw] justify-end w-full">
            {NavItems.slice(2, 6).map((item, index) => (
                <Link href={item.link} key={index}>
                    <p className="text-white">{item.text}</p>
                </Link>
            ))}
        </div>
    </div>
</div>



  );
};

export default Nav;
