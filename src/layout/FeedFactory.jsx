import { Icon } from "@iconify-icon/react";
import { useParams, useLocation } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import SideButton from "../component/SideButton";

const factoryData = ["屏東歸來廠", "桃園龜山廠", "台南歸仁廠", "湖內海埔廠"];
function FactorySelectButton({ selectRef, toggleSelect, userSelect, isOpen }) {
  return (
    <div
      ref={selectRef}
      onClick={toggleSelect}
      className={` relative z-10 feed-list justify-self-end ml-auto w-full  appearance-none outline-none border-[2px] transition-colors duration-300 ${
        isOpen ? "border-greydark" : "border-[transparent]"
      }`}
    >
      {userSelect}
      <Icon
        className={` absolute top-1/2 right-3 -translate-y-1/2 text-primary 
        transition-transform duration-300
        ${isOpen ? "rotate-180" : ""} `}
        icon="subway:down-2"
      />
    </div>
  );
}

function FactorySelectList({ optionRef, userSelect, isOpen, handleClick }) {
  const activeList = (val) =>
    val === userSelect
      ? "bg-greydark text-white border-greydark "
      : "hover:bg-[#f2f2f2]  hover:border-[#f2f2f2]";

  return (
    <ul
      ref={optionRef}
      className={`  absolute top-[100%] w-full opacity-0   text-greydark border-[2px] rounded-md bg-white shadow-md
    transition-all  duration-300 z-10
    ${isOpen ? "visible opacity-100 top-[110%]" : "invisible"}`}
    >
      {factoryData.map((item, i) => (
        <li
          onClick={() => handleClick(item)}
          key={i}
          className={` p-1 py-2 [&:not(:last-child)]:border-b transition-colors duration-300
        ${activeList(item)} `}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function FactorySelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [userSelect, setUserSelect] = useState("屏東歸來廠");
  const selectRef = useRef(null);
  const optionRef = useRef(null);

  const closeList = () => setIsOpen(false);
  const handleClick = (val) => {
    if (val === userSelect) return closeList();
    setUserSelect((pS) => (pS = val));
    closeList();
  };
  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const theSelectRef = selectRef.current;
    const theOptionRef = optionRef.current;
    const currentContain = (el, clickE) => el.contains(clickE.target);
    const handleClickOutside = (e) => {
      if (
        !currentContain(theSelectRef, e) &&
        !currentContain(theOptionRef, e)
      ) {
        closeList();
      }
    };
    document.addEventListener("click", (e) => handleClickOutside(e));
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full">
      <FactorySelectButton
        selectRef={selectRef}
        toggleSelect={toggleSelect}
        userSelect={userSelect}
        isOpen={isOpen}
      />
      <FactorySelectList
        isOpen={isOpen}
        optionRef={optionRef}
        userSelect={userSelect}
        handleClick={handleClick}
      />
    </div>
  );
}

function FactoryTitle() {
  const param = useParams();

  return (
    <div className="w-full">
      {Object.keys(param).length > 0 && (
        <h3 className="text-lg  text-greydark tracking-wider">
          {Object.values(param).at(-1)}
        </h3>
      )}
    </div>
  );
}

function FeedFactoryWrapper({ children, factoryEl }) {
  return (
    <div
      ref={factoryEl}
      className=" sticky w-full top-[50px] px-3  bg-greylight z-10"
    >
      <div className="flex  justify-between items-center  py-3">
        <FactoryTitle />
        <FactorySelect />
      </div>
      {children}
    </div>
  );
}

export default function FeedFactory({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const factoryEl = useRef(null);
  return (
    <>
      <FeedFactoryWrapper factoryEl={factoryEl}>{children}</FeedFactoryWrapper>
      {!isHome && <SideButton el={factoryEl} />}
    </>
  );
}
