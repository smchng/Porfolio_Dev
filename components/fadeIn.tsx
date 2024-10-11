import { useEffect, useRef, useState } from "react";

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

export default FadeIn;
