import { Icon } from "@iconify-icon/react";
import React, { useState, useEffect, useRef } from "react";
export default function SideButton({ top }) {
  const buttonStyle = `fixed right-2 text-2xl  text-greydark`;
  const activeScroll = (dir) =>
    scrollDirection === dir && isScrolling ? "text-primary" : "";

  const [scrollDirection, setScrollDirection] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollTimeout = useRef(null);
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
      scrollTimeout.current = setTimeout(() => setIsScrolling(false), 500);
    };
  }, [lastScrollY]);

  return (
    <>
      <Icon
        className={`${buttonStyle} top-[180px] ${activeScroll("up")} `}
        icon="ph:arrow-up-bold"
      />
      <Icon
        className={`${buttonStyle} bottom-[50px]
        
        ${activeScroll("down")}
        `}
        icon="ph:arrow-down-bold"
      />
    </>
  );
}
