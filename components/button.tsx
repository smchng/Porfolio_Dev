import React, { useState } from "react";

type ButtonProp = {
  header: string;
  text: string;
};

export const TitleButton = ({ header, text }: ButtonProp) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMdScreen, setIsMdScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : false
  );

  const handleMouseEnter = () => {
    setIsHovered(isMdScreen);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Update isMdScreen on window resize
  const handleResize = () => {
    setIsMdScreen(window.innerWidth >= 768);
    setIsHovered(false); // Reset hover state on resize
  };

  // Attach resize event listener
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`border border-white p-3 my-[3vh] inline-block md:flex md:space-x-[2vw] xl:max-w-[60vw]`}
    >
      <h3
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={isHovered ? "hovered" : ""}
      >
        {header}
      </h3>
      <p>{text}</p>
      {/* {!isMdScreen && <p>{text}</p>}
      {isHovered && isMdScreen && <p>{text}</p>} */}
    </div>
  );
};
