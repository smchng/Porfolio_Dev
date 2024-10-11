import { useEffect, useRef, useState } from "react";
import React from "react";

type FadeProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export const FadeIn = ({
  children,
  className = "",
  delay = 200,
}: FadeProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing after it's visible
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out transform ${
        isVisible
          ? `opacity-100 translate-y-0 delay-${delay}`
          : "opacity-0 translate-y-5"
      } ${className}`}
    >
      {children}
    </div>
  );
};
export const SlideIn: React.FC<FadeProps> = ({ children }) => {
  const [animate, setAnimate] = useState(false);
  const [showSecond, setShowSecond] = useState(false); // State to control second child's visibility

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimate(true);
    // Set a timeout to show the second child after the first has animated in
    const timer = setTimeout(() => {
      setShowSecond(true);
    }, 300); // Adjust delay to match the duration of your animation

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className="flex flex-col justify-end m-0">
      {React.Children.map(children, (child, index) => {
        const animationClass =
          index === 0 ? "slide-in-right-1" : "slide-in-right-2"; // Apply staggered animations
        return <div className={animate ? animationClass : ""}>{child}</div>;
      })}
    </div>
  );
};
