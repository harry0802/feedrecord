import React, { useState, createContext } from "react";
import RecordTitle from "./RecordTitle";
import RecordItem from "./RecordItem.jsx";
import RecordDetail from "./RecordDetail.jsx";
import { createRecordState } from "./RecordHelper.js";
const recordDetail = [
  {
    id: 0,
    time: "11:50",
    categrty: [
      { id: "feed-1", categrty: "飼料1號", weight: "5公斤", price: "5元/公斤" },
      { id: "muck-1", categrty: "肥料1號", weight: "5公斤", price: "5元/公斤" },
    ],
  },
  {
    id: 1,
    time: "9:30",
    categrty: [
      { id: "feed-3", categrty: "飼料3號", weight: "5公斤", price: "5元/公斤" },
    ],
  },
  {
    id: 2,
    time: "08:00",
    categrty: [
      {
        id: "medicine-2",
        categrty: "藥品2號",
        weight: "5公斤",
        price: "5元/公斤",
      },
    ],
  },
  {
    id: 3,
    time: "07:43",
    categrty: [
      {
        id: "medicine-2",
        categrty: "藥品2號",
        weight: "5公斤",
        price: "5元/公斤",
      },
    ],
  },
  {
    id: 4,
    time: "06:20",
    categrty: [
      { id: "feed-4", categrty: "飼料4號", weight: "5公斤", price: "5元/公斤" },
      { id: "feed-4", categrty: "飼料4號", weight: "5公斤", price: "5元/公斤" },
    ],
  },
];
const listData = [
  {
    id: 0,
    date: "2022/01/20",
    text: "第三批次",
    details: recordDetail,
  },
  {
    id: 1,
    date: "2022/01/18",
    text: "第三批次",
    details: recordDetail,
  },
  {
    id: 2,
    date: "2022/12/15",
    text: "第三批次",
    details: recordDetail,
  },
  {
    id: 3,
    date: "2022/12/14",
    text: "第三批次",
    details: recordDetail,
  },
  {
    id: 4,
    date: "2022/12/10",
    text: "第三批次",
    details: recordDetail,
  },
  {
    id: 5,
    date: "2022/12/05",
    text: "第三批次",
    details: recordDetail,
  },
  {
    id: 6,
    date: "2022/12/04",
    text: "第三批次",
    details: recordDetail,
  },
  {
    id: 7,
    date: "2022/12/04",
    text: "第三批次",
    details: recordDetail,
  },
  {
    id: 8,
    date: "2022/12/04",
    text: "第三批次",
    details: recordDetail,
  },
];
export const userContext = createContext();

export default function RecordList() {
  const [list, setList] = useState(listData);
  const { isModalOpen, currentData, getCurrentData, openModal, closeModal } =
    createRecordState();
  const handleRemove = (k) => {
    setList(list.filter((item) => item.id !== k));
  };

  const handleRemoveSchedule = (nb) => {
    setList((prevList) => {
      const newList = prevList.map((el) => ({
        ...el,
        details: el.details.filter((pd) => pd.id !== nb),
      }));
      return newList;
    });
  };
  return (
    <>
      <userContext.Provider value={{ list, setList, handleRemoveSchedule }}>
        <RecordTitle />
        <div className=" pl-4 pr-14 mb-14">
          <p className="text-greydark mb-2">
            目前總共 {list?.length || 0} 筆紀錄
          </p>
          <ul>
            {list.map((item, i) => (
              <RecordItem
                item={item}
                removeList={handleRemove}
                openDetail={openModal}
                getCurrentData={getCurrentData}
                key={i}
              />
            ))}

            <RecordDetail
              data={currentData}
              isOpen={isModalOpen}
              onClose={closeModal}
            />
          </ul>
        </div>
      </userContext.Provider>
    </>
  );
}