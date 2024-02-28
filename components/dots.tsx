import React, { useState, useEffect } from "react";

export function TypingEllipsis() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        const updatedText = text + ".";
        setText(updatedText);

        if (updatedText === "...") {
          setIsTyping(false);
        }
      } else {
        const updatedText = text.slice(0, -1);
        setText(updatedText);

        if (updatedText === "") {
          setIsTyping(true);
        }
      }
    }, 300); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [text, isTyping]);

  return <span className="dot">{text.toUpperCase()}</span>;
}
