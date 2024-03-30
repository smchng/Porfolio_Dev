import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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
const DesktopNav = () => {
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
interface MobilePageProps {
  onClose: () => void;
}
const MobileNav: React.FC<MobilePageProps> = ({ onClose }) => {
  const [isOverlayVisible, setOverlayVisibility] = useState(true);
  const handleOverlayClick = () => {
    setOverlayVisibility(false);
    onClose(); // Notify the parent component to close the menu page
  };
  return (
    <div className="h-screen w-screen absolute bg-navy justify-end flex flex-col ">
      <div className="p-5">
        <div className="pb-[5vh]">
          <Link href="/" onClick={handleOverlayClick}>
            {" "}
            <h2>Home</h2>{" "}
          </Link>{" "}
          <Link href="about" onClick={handleOverlayClick}>
            <h2>About</h2>
          </Link>
        </div>
        <div className="flex space-x-[3vw] w-full pb-[5vh]">
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
      <div>
        <div className="md:absolute w-full border-t border-white mb-[2vh] sm:m-0"></div>
        <p className="py-1 justify-center flex " onClick={handleOverlayClick}>
          back
        </p>{" "}
      </div>{" "}
    </div>
  );
};

const Nav = () => {
  const router = useRouter();
  const [isHomePageVisible, setHomePageVisibility] = useState(false);

  const handleToggleOverlay = () => {
    setHomePageVisibility(!isHomePageVisible);
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 500;

  return (
    <div className="fixed z-10 h-screen bg-grey ">
      {isMobile ? (
        <>
          {isHomePageVisible && (
            <MobileNav onClose={() => setHomePageVisibility(false)} />
          )}

          <div className="fixed bottom-0 left-0 right-0">
            <div className="backdrop-blur-lg bg-navy opacity-75">
              <div className="md:absolute bottom-0 left-0 w-full border-t border-white mb-[2vh] sm:m-0"></div>
              <p
                className="py-1 justify-center items-end flex "
                onClick={handleToggleOverlay}
              >
                {isHomePageVisible ? "back" : "menu"}
              </p>
            </div>
          </div>
        </>
      ) : (
        <DesktopNav />
      )}
    </div>
  );
};

export default Nav;
