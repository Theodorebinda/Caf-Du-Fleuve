import { useState, useEffect } from "react";
import React from "react";
import "../styles/App.css";

const Typewriter = ({ text, speed, deleteDelay, className }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (index < text.length && !isDeleting) {
      timeoutId = setTimeout(() => {
        setDisplayedText(text.substring(0, index + 1));
        setIndex(index + 1);
      }, speed);
    } else if (index === text.length && !isDeleting) {
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, deleteDelay);
    } else if (index > 0 && isDeleting) {
      timeoutId = setTimeout(() => {
        setDisplayedText(text.substring(0, index - 1));
        setIndex(index - 1);
      }, speed);
    } else if (index === 0 && isDeleting) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, index, text, speed, deleteDelay, isDeleting]);

  return (
    <div className={`${className} 'typewriter'`}>
      {displayedText}
      <span className="cursor">|</span>
    </div>
  );
};

export default Typewriter;
