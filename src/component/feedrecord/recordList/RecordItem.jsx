import { Icon } from "@iconify-icon/react";
import { dragList } from "./RecordHelper.js";
import React, { useContext, createContext } from "react";
import { userContext } from "./RecordList.jsx";

const draggingContext = createContext();

function RemoveButton() {
  const { handleRemove } = useContext(draggingContext);
  return (
    <div className="absolute right-1 flex place-content-center items-center rounded-full w-10 h-10 bg-redlight text-white shadow-xl z-[0]">
      <Icon
        onClick={() => handleRemove()}
        className=" text-2xl"
        icon="subway:delete"
      />
    </div>
  );
}
function RecordItemList() {
  const { handleClickOpen, status, item, draggingRef } =
    useContext(draggingContext);

  const listStyle =
    " dragging-item absolute left-0 w-full h-full pl-5 leading-[50px] z-[1] transition-all duration-300 ease-in-out bg-white";
  // ${status === 1 ? "left-[-50px]" : ""}
  return (
    <div
      ref={draggingRef}
      onClick={() => handleClickOpen()}
      className={`${listStyle} `}
    >
      {item.date} {item.text}-餵養紀錄
    </div>
  );
}

function RecordItemWrapper({ children }) {
  const { handleTouchStart, handleTouchEnd, status, handleTouchMove } =
    useContext(draggingContext);

  return (
    <li
      data-status={status}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`cursor-pointer feed-list  [&:not(:last-child)]:mb-4 relative h-[50px]  overflow-hidden`}
    >
      {children}
    </li>
  );
}

export default function RecordItem({ item }) {
  const {
    handleTouchEnd,
    handleTouchStart,
    status,
    setStatus,
    draggingRef,
    handleTouchMove,
  } = dragList();

  const {
    getCurrentData,
    openModal: openDetail,
    handleRemove: removeList,
  } = useContext(userContext);

  const handleRemove = () => {
    removeList(item.id);
    setStatus(0);
  };
  const handleClickOpen = () => {
    openDetail();
    getCurrentData(item);
  };

  return (
    <draggingContext.Provider
      value={{
        handleTouchEnd,
        handleTouchStart,
        handleTouchMove,
        handleRemove,
        handleClickOpen,
        status,
        draggingRef,
        item,
      }}
    >
      <RecordItemWrapper>
        <RecordItemList />
        <RemoveButton />
      </RecordItemWrapper>
    </draggingContext.Provider>
  );
}
