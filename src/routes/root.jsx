import { Outlet, Link, useLocation } from "react-router-dom";

import { isBrowser } from "react-device-detect";

import FeedHeader from "../layout/FeedHeader.jsx";

import { Icon } from "@iconify-icon/react";

import { useEffect, useRef, useState } from "react";

function throttle(mainFunction, delay) {
  let timerFlag = null;
  return (...args) => {
    if (timerFlag === null) {
      mainFunction(...args);
      timerFlag = setTimeout(() => {
        timerFlag = null;
      }, delay);
    }
  };
}
const useWindowWidth = (delay = 300) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = throttle(() => {
      setWindowWidth(window.innerWidth);
    }, delay);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [delay]);

  return windowWidth;
};

function App() {
  const width = useWindowWidth();
  const responsiveBrowser = width > 600;

  return (
    <>{responsiveBrowser ? <BrowserRootWrapper /> : <MobileRootWrapper />}</>
  );
}
function BrowserRootWrapper() {
  const [remainSeconds, setRemainSeconds] = useState(15);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setRemainSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          window.location.href = "https://www.twoshoulder.com/";
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      className={`flex place-items-center place-content-center  min-h-screen bg-greylight`}
    >
      <div
        className={`w-[80%] sm:min-w-[40%] sm:max-w-[50%] min-h-[50vh] p-10 border  bg-white rounded-2xl flex flex-col justify-between  overflow-hidden text-center text-secondary `}
      >
        <div className={`text-xl  sm:text-3xl`}>
          <h2>檢測到非行動設備</h2>
        </div>

        <div className={`mt-20 text-md sm:text-xl`}>
          <p>
            將於
            {remainSeconds < 10 && remainSeconds > 0
              ? `0${remainSeconds}`
              : remainSeconds}
            秒後跳轉至官方網站
          </p>
        </div>
        <div className={`self-center mt-20  bg-primary text-white rounded-lg`}>
          <a
            href="https://www.twoshoulder.com/"
            className={` inline-block py-2 px-10 lg:px-40  cursor-pointer`}
          >
            立即前往
          </a>
        </div>
      </div>
    </div>
  );
}

function MobileRootWrapper() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex justify-center">
      <div className="relative flex flex-col w-full max-w-[600px] min-h-screen bg-greylight">
        <FeedHeader isHome={isHome} />
        <main>
          <Outlet />
        </main>
        <HomeButton isHome={isHome} />
      </div>
    </div>
  );
}

function HomeButton({ isHome }) {
  return (
    !isHome && (
      <Link
        to="/"
        className="fixed flex w-10 h-10 bottom-2 right-2 rounded-full  place-content-center items-center    bg-primary text-white z-10"
      >
        <Icon className="text-xl" icon="ion:home" />
      </Link>
    )
  );
}

export default App;
