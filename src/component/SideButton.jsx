import { Icon } from "@iconify-icon/react";
import React, { useState, useEffect, useRef } from "react";
export default function SideButton({ el }) {
  const buttonStyle = `fixed right-2 text-2xl  text-greydark transition-colors duration-300 z-[1]`;
  const activeScroll = (dir) =>
    scrollDirection === dir && isScrolling ? "text-primary" : "";
  const [scrollDirection, setScrollDirection] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollTimeout = useRef(null);
  const elHeight = el.current?.offsetHeight;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      currentScrollY > lastScrollY
        ? setScrollDirection("down")
        : currentScrollY < lastScrollY
        ? setScrollDirection("up")
        : currentScrollY;
      setLastScrollY(currentScrollY);
      if (!isScrolling) setIsScrolling(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => setIsScrolling(false), 200);
    };
  }, [lastScrollY]);

  return (
    <>
      <Icon
        onClick={scrollToTop}
        className={`${buttonStyle} top-[${elHeight}]  ${activeScroll("up")} `}
        icon="ph:arrow-up-bold"
      />
      <Icon
        onClick={scrollToBottom}
        className={`${buttonStyle} bottom-[60px]
        
        ${activeScroll("down")}
        `}
        icon="ph:arrow-down-bold"
      />
    </>
  );
}
