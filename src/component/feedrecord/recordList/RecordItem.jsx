import { Icon } from "@iconify-icon/react";
import { dragList } from "./RecordHelper.js";
import React, { useState } from "react";

export default function RecordItem({
  item,
  removeList,
  openDetail,
  getCurrentData,
}) {
  const { handleTouchEnd, handleTouchStart, status, setStatus } = dragList();

  return (
    <>
      <li
        data-status={status}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={`cursor-pointer feed-list  [&:not(:last-child)]:mb-4 relative h-[50px]  overflow-hidden`}
      >
        <p
          onClick={() => {
            openDetail();
            getCurrentData(item);
          }}
          className={`absolute left-0 w-full h-full pl-5 leading-[50px] z-[1] transition-all duration-300 ease-in-out bg-white ${
            status === 1 ? "left-[-50px]" : ""
          } `}
        >
          {item.date} {item.text}-餵養紀錄
        </p>
        <div className="absolute right-1 flex place-content-center items-center rounded-full w-10 h-10 bg-redlight text-white shadow-xl z-[0]">
          <Icon
            onClick={() => {
              removeList(item.id);
              setStatus(0);
            }}
            className=" text-2xl"
            icon="subway:delete"
          />
        </div>
      </li>
    </>
  );
}
