import { Icon } from "@iconify-icon/react";
import { useParams } from "react-router-dom";
import { userContext } from "./RecordList.jsx";
import { useContext, useState, useEffect, createContext } from "react";

import { dragList, createRecordState } from "./RecordHelper.js";

const listDetailContext = createContext();
const recordData = [
  {
    category: "飼料",
    item: [
      {
        id: "feed-1",
        name: "飼料1號",
        weight: "",
        price: "",
      },
      {
        id: "feed-2",
        name: "飼料2號",
        weight: "",
        price: "",
      },
      {
        id: "feed-3",
        name: "飼料3號",
        weight: "",
        price: "",
      },
      {
        id: "feed-4",
        name: "飼料4號",
        weight: "",
        price: "",
      },
      {
        id: "feed-5",
        name: "飼料5號",
        weight: "",
        price: "",
      },
      {
        id: "feed-6",
        name: "飼料6號",
        weight: "",
        price: "",
      },
    ],
  },
  {
    category: "營養品",
    item: [
      {
        id: "supplement-1",
        name: "營養品1號",
        weight: "",
        price: "",
      },
      {
        id: "supplement-2",
        name: "營養品2號",
        weight: "",
        price: "",
      },
      {
        id: "supplement-3",
        name: "營養品3號",
        weight: "",
        price: "",
      },
      {
        id: "supplement-4",
        name: "營養品4號",
        weight: "",
        price: "",
      },
      {
        id: "supplement-5",
        name: "營養品5號",
        weight: "",
        price: "",
      },
      {
        id: "supplement-6",
        name: "營養品6號",
        weight: "",
        price: "",
      },
    ],
  },
  {
    category: "藥品",
    item: [
      {
        id: "medicine-1",
        name: "藥品1號",
        weight: "",
        price: "",
      },
      {
        id: "medicine-2",
        name: "藥品2號",
        weight: "",
        price: "",
      },
      {
        id: "medicine-3",
        name: "藥品3號",
        weight: "",
        price: "",
      },
      {
        id: "medicine-4",
        name: "藥品4號",
        weight: "",
        price: "",
      },
      {
        id: "medicine-5",
        name: "藥品5號",
        weight: "",
        price: "",
      },
      {
        id: "medicine-6",
        name: "藥品6號",
        weight: "",
        price: "",
      },
    ],
  },
  {
    category: "添加品",
    item: [
      {
        id: "additive-1",
        name: "添加品1號",
        weight: "",
        price: "",
      },
      {
        id: "additive-2",
        name: "添加品2號",
        weight: "",
        price: "",
      },
      {
        id: "additive-3",
        name: "添加品3號",
        weight: "",
        price: "",
      },
      {
        id: "additive-4",
        name: "添加品4號",
        weight: "",
        price: "",
      },
      {
        id: "additive-5",
        name: "添加品5號",
        weight: "",
        price: "",
      },
      {
        id: "additive-6",
        name: "添加品6號",
        weight: "",
        price: "",
      },
    ],
  },
];

function Buttoon({ item }) {
  const { handleTouchEnd, handleTouchStart, status, setStatus } = dragList();
  const { time, categrty } = item;
  const { handleRemoveSchedule } = useContext(userContext);
  const { getCurrentData, openDetail } = useContext(listDetailContext);
  return (
    <li
      data-status={status}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`cursor-pointer  border border-greydark rounded-lg   relative    overflow-hidden `}
    >
      <div
        onClick={() => {
          openDetail();
          getCurrentData(item);
        }}
        className={`p-1 px-3 relative translate-x-[0px] left-0 w-full   leading-[50px] z-[1] transition-all duration-300 ease-in-out bg-greylight text-greydark ${
          status === 1 ? "translate-x-[-20%]" : "translate-x-[0px]"
        } `}
      >
        <p> {time}</p>
        {categrty.map((content, i) => (
          <div className="flex w-full " key={i}>
            <p className="grow-[1]">{content.categrty}</p>
            <p className="mr-10">{content.weight}</p>
            <p>{content.price}</p>
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 -translate-y-1/2  right-1 flex place-content-center items-center rounded-full w-10 h-10 bg-redlight text-white shadow-xl z-[0]">
        <Icon
          onClick={() => {
            handleRemoveSchedule(item.id);
            setStatus(0);
          }}
          className=" text-2xl"
          icon="subway:delete"
        />
      </div>
    </li>
  );
}

function RecordTable({ data }) {
  const [selectedCategory, setSelectedCategory] = useState("飼料");
  const [formData, setFormData] = useState({});

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  useEffect(() => {
    const initialFormData = {};
    data.categrty.forEach((item) => {
      initialFormData[item.id] = {
        weight: item.weight,
        price: item.price,
      };
    });
    setFormData((perF) => (perF = initialFormData));
  }, [data]);
  return (
    <div className="w-full ">
      <div className="flex justify-between mb-8">
        {recordData.map((item) => (
          <div key={item.category}>
            <div
              className={`p-1 px-4  rounded-full  overflow-hidden text-greydark shadow-md ${
                item.category === selectedCategory
                  ? "bg-secondary text-white"
                  : "bg-white"
              }`}
              onClick={() => handleCategoryClick(item.category)}
            >
              <button>{item.category}</button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full ">
        {recordData
          .find((category) => category.category === selectedCategory)
          .item.map((category) => (
            <div
              className="flex text-greydark  justify-between mb-4"
              key={category.id}
            >
              <p className="leading-10 ">{category.name}</p>
              <input
                type="text"
                className="max-w-[30%]  py-1 px-4  bg-white rounded-full outline-none shadow-md"
                placeholder={"公斤"}
              />
              <input
                text="text"
                className="max-w-[30%]  py-2 px-4  bg-white rounded-full outline-none  shadow-md"
                placeholder={"元/公斤 "}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

function RecordDetaiHeaderButton({
  param,
  isdetail,
  handleAddIndex,
  handleReduceIndex,
  dataMaxlength,
  dataIndex,
}) {
  const buttonStyle =
    "flex justify-center items-center  w-7 h-7  rounded-full shadow-md shadow-greydark";
  return (
    <div className="flex justify-between ">
      <div className="mb-2">{param.category}</div>
      {!isdetail && (
        <div className="text-white flex gap-5 ">
          <button
            onClick={handleReduceIndex}
            className={`${buttonStyle} ${
              dataIndex <= 0 ? "bg-greydark" : "bg-primary"
            } `}
          >
            <Icon className="text-2xl" icon="mingcute:left-fill" />
          </button>
          <button
            onClick={handleAddIndex}
            className={`${buttonStyle} ${
              dataIndex >= dataMaxlength - 1 ? "bg-greydark" : "bg-primary"
            }`}
          >
            <Icon className="text-2xl" icon="mingcute:right-fill" />
          </button>
        </div>
      )}
    </div>
  );
}

function RecordDetaiHeaderText({
  data,
  currentData,
  param,
  isdetail,
  dataIndex,
}) {
  return (
    <>
      <p className="mb-2">{`${data[dataIndex].text}-${param.poolId}`}</p>
      <p className="ml-4">
        {isdetail
          ? `${data[dataIndex].date} ${currentData.time}`
          : `${data[dataIndex].date} `}
      </p>
    </>
  );
}

function RecordDetaiContent() {
  const { isdetail, currentData, getCurrentData, openDetail, data } =
    useContext(listDetailContext);
  const recordDetail = () => {
    return (
      <ul className="">
        {data.details?.map((item, i) => (
          <Buttoon
            openDetail={openDetail}
            getCurrentData={getCurrentData}
            item={item}
            key={i}
          />
        ))}
      </ul>
    );
  };

  return (
    <div className="overflow-y-auto">
      {isdetail ? <RecordTable data={currentData} /> : recordDetail()}
    </div>
  );
}

function RecordDetaiBottom() {
  const { onClose, isdetail, closeDetail } = useContext(listDetailContext);

  const buttonStytle = "py-2 px-5 bg-primary text-white rounded-full";
  return (
    <div className="flex w-full justify-between p-4 ml-auto mr-3">
      {isdetail && (
        <button onClick={closeDetail} className={buttonStytle}>
          取消
        </button>
      )}

      <button
        onClick={() => {
          isdetail ? closeDetail() : onClose();
        }}
        className={`ml-auto ${buttonStytle}`}
      >
        確定
      </button>
    </div>
  );
}

function RecordDetaiHeader() {
  const { data, isdetail, currentData, param, lists, setData } =
    useContext(listDetailContext);

  // 尋找當下資料索引
  const [dataIndex, setDataIndex] = useState(
    lists.findIndex((item) => item.id === data.id)
  );
  // 資料最大長度
  const dataMaxlength = lists.length;

  const handleAddIndex = () => {
    if (dataIndex >= dataMaxlength - 1) return;
    setDataIndex((pI) => pI + 1);
  };
  const handleReduceIndex = () => {
    if (dataIndex <= 0) return;
    setDataIndex((pI) => pI - 1);
  };

  return (
    <div className="text-greydark w-full mb-2">
      <RecordDetaiHeaderButton
        param={param}
        isdetail={isdetail}
        handleAddIndex={handleAddIndex}
        handleReduceIndex={handleReduceIndex}
        dataMaxlength={dataMaxlength}
        dataIndex={dataIndex}
      />

      <RecordDetaiHeaderText
        data={lists}
        currentData={currentData}
        param={param}
        isdetail={isdetail}
        dataIndex={dataIndex}
      />
    </div>
  );
}

function RecordDetailWrapper({ children }) {
  const { onClose, isdetail, closeDetail } = useContext(listDetailContext);

  return (
    <div
      onClick={() => (isdetail ? closeDetail() : onClose())}
      className="fixed  inset-0 bg-[rgba(0,0,0,.3)] z-50"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="absolute  inset-0 m-auto flex flex-col w-full h-full p-2 max-w-[92%] max-h-[85%]  bg-greylight rounded-xl shadow-xl "
      >
        {children}
      </div>
    </div>
  );
}

export default function RecordDetail() {
  const param = useParams();
  const {
    list: [...list],
    isModalOpen: isOpen,
    currentData: data,
    closeModal: onClose,
    getCurrentData: setData,
  } = useContext(userContext);

  const {
    isModalOpen: isdetail,
    currentData,
    getCurrentData,
    openModal: openDetail,
    closeModal: closeDetail,
  } = createRecordState();

  return (
    <listDetailContext.Provider
      value={{
        data,
        isOpen,
        onClose,
        isdetail,
        currentData,
        param,
        lists: list,
        getCurrentData,
        openDetail,
        closeDetail,
        createRecordState,
        setData,
      }}
    >
      {isOpen && (
        <RecordDetailWrapper>
          <RecordDetaiHeader />
          <RecordDetaiContent />
          <RecordDetaiBottom />
        </RecordDetailWrapper>
      )}
    </listDetailContext.Provider>
  );
}
