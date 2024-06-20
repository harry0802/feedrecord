import React from "react";
import { Icon } from "@iconify-icon/react";
import FeedFactory from "../layout/FeedFactory.jsx";
import { useNavigate } from "react-router-dom";

export default function FeedHeader({ isHome }) {
  const navigate = useNavigate();
  return (
    <>
      <header className="sticky inset-0 w-full z-50">
        <nav className="max-h-[50px] bg-primary flex justify-end  items-center  gap-5 px-1 py-2.5  text-white ">
          {!isHome && (
            <div onClick={() => navigate(-1)} className="mr-auto p">
              <Icon
                className="text-4xl flex cursor-pointer"
                icon="mingcute:left-fill"
              />
            </div>
          )}

          <div className="relative">
            <button className=" flex  text-3xl">
              <Icon icon="bxs:bell" />
            </button>
            <span className="absolute top-[5px] right-0 text-xs text-center w-[15px] h-[15px] leading-[15px] rounded-full bg-red">
              1
            </span>
          </div>

          <div>
            <button className="flex  text-2xl">
              <Icon icon="fa:sign-out" />
            </button>
          </div>
          <div>
            <div className="rounded-full w-[30px] h-[30px] leading-[30px] mr-3  text-xs text-center   bg-white text-primary">
              <span>小明</span>
            </div>
          </div>
        </nav>
        <div className="max-h-[60px] p-3 flex justify-center items-center bg-greylight">
          <FeedFactory />
        </div>
      </header>
    </>
  );
}
