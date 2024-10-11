"use client";
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

// Define the context type
interface CursorContextProps {
  isHovered: boolean;
  handleHover: () => void;
  handleHoverExit: () => void;
}

// Create the context
const CursorContext = createContext<CursorContextProps | undefined>(undefined);

// Define the provider's props
interface CursorProviderProps {
  children: ReactNode;
}

// CursorProvider component
const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverExit = () => {
    setIsHovered(false);
  };

  return (
    <CursorContext.Provider value={{ isHovered, handleHover, handleHoverExit }}>
      {children}
    </CursorContext.Provider>
  );
};

// Cursor component
const Cursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const cursorContext = useContext(CursorContext);

  if (!cursorContext) {
    throw new Error("Cursor must be used within a CursorProvider");
  }

  const { isHovered, handleHover, handleHoverExit } = cursorContext;

  const updatePosition = (event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updatePosition);

    const handleMouseOver = (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest("button, a, [tabindex]")) {
        handleHover();
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest("button, a, [tabindex]")) {
        handleHoverExit();
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [handleHover, handleHoverExit]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <svg
        width={isHovered ? "100" : "60"}
        height={isHovered ? "100" : "60"}
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          transition: "width 0.3s, height 0.3s",
        }}
      >
        <circle
          cx={25}
          cy={25}
          r={12}
          stroke="rgb(159, 157, 164)"
          fill={isHovered ? "#28282a" : "none"}
          opacity={isHovered ? "35%" : "100%"}
        />
      </svg>
    </div>
  );
};

// Export the provider and cursor components
export { CursorProvider, Cursor };
