import Link from "next/link";
import React, {
  useState,
  useRef,
  useEffect,
  ReactNode,
  RefObject,
} from "react";

type ProjectProps = {
  title?: string;
  group?: string;
  skill?: string;
  page?: string;
  link?: string;
  detail?: string;
  subtext?: string;
  onMouseOver?: () => void;
  hovered?: boolean;
};

export const Project = ({
  title,
  group,
  link,
  skill,
  page,
  onMouseOver,
  hovered,
}: ProjectProps) => {
  const resolvedPage = page !== undefined ? page : "";
  const resolvedLink = link !== undefined ? link : "";
  const resolvedSkill = skill !== undefined ? skill : "";
  const [isHovered, setIsHovered] = useState(hovered || false);
  const handleMouseEnter = () => {
    setIsHovered(true);
    onMouseOver && onMouseOver();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const skillList = (skill: string) => {
    const skills = skill.split(",").map((individualSkill, skillIndex) => (
      <p
        key={skillIndex}
        className={`
                        ${isHovered ? "border-white" : "border-blue"} 
                        border transition-colors px-2 py-1 text-[10px] lg:text-2xs`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {individualSkill.trim()}
      </p>
    ));
    return skills;
  };

  return (
    <div
      className={`
                ${isHovered ? "border-white" : "border-blue"} 
                ${isHovered ? "text-white" : "text-blue"} transition-colors
                flex border py-3 px-3 justify-between items-center my-3`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sm:flex w-full">
        <Link href={resolvedPage}>
          <p className="text-[8px] md:text-2xs">{title}</p>
          <h3 className="text-xs md:text-sm lg:text-base">{group}</h3>
        </Link>
        <div className="flex sm:items-end sm:ml-auto">
          <div className="flex flex-wrap items-end space-x-2 h-full">
            {skillList(resolvedSkill)}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export const ProjectContent = ({ title, detail, subtext }: ProjectProps) => {
  return (
    <div className="md:w-screen relative whitespace-normal shrink-0">
      <h4 className="text-blue py-[15vh]">{title}</h4>

      <h2 className="max-w-[80vw] md:max-w-[50vw] text-[35px] py-[5vh] md:max-w-[70vw] text-base lg:text-[40px] leading-none">
        {subtext}
      </h2>
      <p className="max-w-[80vw] md:max-w-[50vw]">{detail}</p>
      <p className="text-blue py-[5vh]">scroll →</p>
    </div>
  );
};

export const ProjectVideo = ({ title, detail }: ProjectProps) => {
  return (
    <div className=" md:w-screen relative whitespace-normal shrink-0 flex pt-[5vh] justify-center items-center ">
      <video
        className="h-[80vh] w-auto overflow-hidden object-cover border border-[1px] border-brown"
        autoPlay
        muted
        loop
      >
        <source src={title} type={detail} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export const ProjectText = ({ detail, title }: ProjectProps) => {
  return (
    <div className="h-[50vh] md:h-screen px-[5vw] lg:px-[3vw] sm:w-[100%] md:w-[50vw] lg:w-[40vw] flex flex-col justify-center  relative whitespace-normal shrink-0">
      <p className="text-[15px]">
        <strong>{title}</strong>
      </p>
      <p>{detail}</p>
    </div>
  );
};

interface ScrollContainerProps {
  children: ReactNode;
}
export const ScrollEffect: React.FC<ScrollContainerProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initialOverflowStyle = getInitialOverflowStyle();
    document.body.style.overflowY = initialOverflowStyle;

    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
      document.body.style.overflowY = "auto"; // Re-enable scrolling when component unmounts
    };
  }, []);

  const getInitialOverflowStyle = () => {
    return isPortrait() ? "auto" : "hidden";
  };

  const isPortrait = () => {
    return window.innerHeight > window.innerWidth;
  };

  const handleOrientationChange = () => {
    document.body.style.overflowY = getInitialOverflowStyle();
  };

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const isScrollable = container.scrollWidth > container.clientWidth;

      if (isScrollable) {
        container.scrollLeft += e.deltaY;
        e.preventDefault(); // Prevent vertical scrolling

        // Also, prevent the default action for the wheel event
        e.stopPropagation();
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className="md:flex md:flex-row  md:overflow-x-scroll scroll-container px-[3vw]"
      onWheel={handleScroll}
    >
      {children}
    </div>
  );
};

export const NextProject = ({ link }: ProjectProps) => {
  const resolvedLink = link !== undefined ? link : "";
  return (
    <div className="md:absolute bottom-0 left-0 w-full border-t border-white mb-[2vh] sm:m-0">
      <Link href={resolvedLink}>
        <p className="pt-[1vh] px-2 py-1 px-3 justify-center md:justify-end flex ">
          next
        </p>
      </Link>
    </div>
  );
};

// export const ScrollRight = ({ nextSectionRef }: ProjectProps) => {
//   const handleClick = () => {
//     if (nextSectionRef && nextSectionRef.current) {
//       nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div
//       className="md:absolute bottom-0 right-0 w-full cursor-pointer"
//       onClick={handleClick}
//     >
//       <p className="pt-[1vh] px-2 py-1 px-3 text-blue">scroll</p>
//     </div>
//   );
// };
