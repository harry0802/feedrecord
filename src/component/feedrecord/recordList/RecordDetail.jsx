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
        categrty: "飼料1號",
        weight: "",
        price: "",
      },
      {
        id: "feed-2",
        categrty: "飼料2號",
        weight: "",
        price: "",
      },
      {
        id: "feed-3",
        categrty: "飼料3號",
        weight: "",
        price: "",
      },
      {
        id: "feed-4",
        categrty: "飼料4號",
        weight: "",
        price: "",
      },
      {
        id: "feed-5",
        categrty: "飼料5號",
        weight: "",
        price: "",
      },
      {
        id: "feed-6",
        categrty: "飼料6號",
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
        categrty: "營養品1號",
        weight: "",
        price: "",
      },
      {
        id: "supplement-2",
        categrty: "營養品2號",
        weight: "",
        price: "",
      },
      {
        id: "supplement-3",
        categrty: "營養品3號",
        weight: "",
        price: "",
      },
      {
        id: "supplement-4",
        categrty: "營養品4號",
        weight: "",
        price: "",
      },
      {
        id: "supplement-5",
        categrty: "營養品5號",
        weight: "",
        price: "",
      },
      {
        id: "supplement-6",
        categrty: "營養品6號",
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
        categrty: "藥品1號",
        weight: "",
        price: "",
      },
      {
        id: "medicine-2",
        categrty: "藥品2號",
        weight: "",
        price: "",
      },
      {
        id: "medicine-3",
        categrty: "藥品3號",
        weight: "",
        price: "",
      },
      {
        id: "medicine-4",
        categrty: "藥品4號",
        weight: "",
        price: "",
      },
      {
        id: "medicine-5",
        categrty: "藥品5號",
        weight: "",
        price: "",
      },
      {
        id: "medicine-6",
        categrty: "藥品6號",
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
        categrty: "添加品1號",
        weight: "",
        price: "",
      },
      {
        id: "additive-2",
        categrty: "添加品2號",
        weight: "",
        price: "",
      },
      {
        id: "additive-3",
        categrty: "添加品3號",
        weight: "",
        price: "",
      },
      {
        id: "additive-4",
        categrty: "添加品4號",
        weight: "",
        price: "",
      },
      {
        id: "additive-5",
        categrty: "添加品5號",
        weight: "",
        price: "",
      },
      {
        id: "additive-6",
        categrty: "添加品6號",
        weight: "",
        price: "",
      },
    ],
  },
];

function RecordTableFormContent({ category }) {
  const [formWeight, setFormWeight] = useState();
  const [formPrice, setFormPrice] = useState();
  const [active, setActive] = useState(false);
  const transition = "transition-all duration-300";
  const inputStyle =
    "w-full py-2 px-4  bg-white rounded-full outline-none shadow shadow-greydark border-[1px]  ";
  const activeStyle = " bg-secondary text-white ";

  const handleFormWeightChange = (e) => {
    setFormWeight((pW) => (pW = e.target.value));
  };
  const handleFormPriceChange = (e) => {
    setFormPrice((pW) => (pW = e.target.value));
  };

  useEffect(() => {
    setFormWeight(category.weight);
    setFormPrice(category.price);
  }, [category]);

  const handleOpenActive = () => {
    setActive(true);
  };
  const handleCloseActive = () => {
    setActive(false);
  };

  return (
    <div className=" grid grid-cols-3 text-greydark  justify-between mb-4 gap-1  ">
      <div
        className={`text-center w-full leading-10 px-2  rounded-full ${transition} ${
          active ? activeStyle : ""
        }`}
      >
        {category.categrty}
      </div>
      <div>
        <input
          className={`${inputStyle}  ${transition} ${
            active ? "border-greydark" : "border-[transparent]"
          } transition `}
          type="text"
          onChange={handleFormWeightChange}
          value={formWeight}
          onFocus={() => handleOpenActive()}
          onBlur={() => handleCloseActive()}
          placeholder={"公斤"}
        />
      </div>
      <div>
        <input
          className={`${inputStyle} ${
            active ? "border-greydark" : "border-[transparent]"
          } transition `}
          text="text"
          value={formPrice}
          onChange={handleFormPriceChange}
          onFocus={() => handleOpenActive()}
          onBlur={() => handleCloseActive()}
          placeholder={"元/公斤 "}
        />
      </div>
    </div>
  );
}

function RecordTableForm({ selectedCategory, formTable }) {
  const category = formTable.find(
    (category) => category.category === selectedCategory
  );
  return (
    <div className="w-full ">
      {category.item?.map((category) => (
        <RecordTableFormContent key={category.id} category={category} />
      ))}
    </div>
  );
}

function RecordTableNavButton({
  selectedCategory,
  handleCategoryClick,
  formTable,
}) {
  return (
    <div className="flex justify-between mb-8">
      {formTable.map((item) => (
        <div
          key={item.category}
          className={`p-1 px-4  rounded-full  overflow-hidden text-greydark shadow-md ${
            item.category === selectedCategory
              ? "bg-secondary text-white"
              : "bg-white"
          }`}
          onClick={() => handleCategoryClick(item.category)}
        >
          {item.category}
        </div>
      ))}
    </div>
  );
}

function RecordTable() {
  const { lists, dataIndex, currentData, getCurrentData } =
    useContext(listDetailContext);

  const [selectedCategory, setSelectedCategory] = useState("飼料");
  const [formTable, setFormTable] = useState(recordData);

  const formTableInit = (da) => {
    return da.map((list) => {
      if (list.category === selectedCategory) {
        return {
          ...list,
          item: list.item.map((item) => {
            const test = currentData.categrty.find((da) => da.id === item.id);
            if (test) return test;
            return item;
          }),
        };
      }
      return list;
    });
  };

  useEffect(() => {
    setFormTable((pT) => {
      const respon = formTableInit(pT);
      return (pT = respon);
    });
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-full p-2 ">
      <RecordTableNavButton
        selectedCategory={selectedCategory}
        handleCategoryClick={handleCategoryClick}
        formTable={formTable}
      />
      <RecordTableForm
        selectedCategory={selectedCategory}
        formTable={formTable}
      />
    </div>
  );
}

function RecordDetaiItemButton({ handleOnRemoveSchedule }) {
  return (
    <div className="absolute top-1/2 -translate-y-1/2  right-2 flex place-content-center items-center rounded-full w-10 h-10 bg-redlight text-white shadow-xl z-[0]">
      <Icon
        onClick={() => handleOnRemoveSchedule()}
        className=" text-2xl"
        icon="subway:delete"
      />
    </div>
  );
}

function RecordDetaiItemContentText({ categrty }) {
  return categrty.map((content, i) => (
    <div className="flex w-full " key={i}>
      <p className="grow-[1]">{content.categrty}</p>
      <p className="mr-10">{content.weight}</p>
      <p>{content.price}</p>
    </div>
  ));
}

function RecordDetaiItemContent({ item, draggingRef }) {
  const { time, categrty } = item;
  const { getCurrentData, openDetail } = useContext(listDetailContext);

  const handleClickOpenTable = () => {
    openDetail();
    getCurrentData(item);
  };
  const detaiItemContent =
    "p-1 px-3 relative translate-x-[0px] left-0 w-full leading-[50px] z-[1] transition-all duration-300 ease-in-out bg-greylight text-greydark ";
  return (
    <div
      ref={draggingRef}
      onClick={() => handleClickOpenTable()}
      className={detaiItemContent}
    >
      <p> {time}</p>
      <RecordDetaiItemContentText categrty={categrty} />
    </div>
  );
}

function RecordDetaiItemWrapper({
  children,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
}) {
  return (
    <li
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`cursor-pointer  border border-greydark rounded-lg   relative    overflow-hidden `}
    >
      {children}
    </li>
  );
}

function RecordDetaiItem({ item }) {
  const {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleClickClose,
    draggingRef,
  } = dragList();
  const { handleRemoveSchedule } = useContext(userContext);

  const handleOnRemoveSchedule = () => {
    handleClickClose();
    handleRemoveSchedule(item.id);
  };

  return (
    <RecordDetaiItemWrapper
      handleTouchStart={handleTouchStart}
      handleTouchMove={handleTouchMove}
      handleTouchEnd={handleTouchEnd}
    >
      <RecordDetaiItemContent draggingRef={draggingRef} item={item} />
      <RecordDetaiItemButton handleOnRemoveSchedule={handleOnRemoveSchedule} />
    </RecordDetaiItemWrapper>
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
  const {
    isdetail,
    currentData,
    getCurrentData,
    openDetail,
    data,
    lists,
    dataIndex,
  } = useContext(listDetailContext);

  const recordDetail = () => {
    return (
      <ul>
        {lists[dataIndex].details?.map((item, i) => (
          <RecordDetaiItem
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
        className={`ml-auto bg-secondary ${buttonStytle}`}
      >
        確定
      </button>
    </div>
  );
}

function RecordDetaiHeader() {
  const {
    isdetail,
    currentData,
    param,
    lists,
    dataMaxlength,
    handleAddIndex,
    handleReduceIndex,
    dataIndex,
  } = useContext(listDetailContext);

  return (
    <div className="text-greydark w-full pb-2 border-b  ">
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
        className="absolute inset-0 m-auto flex flex-col w-full h-full p-2 max-w-[92%] max-h-[85%]  bg-greylight rounded-xl shadow-xl "
      >
        {children}
      </div>
    </div>
  );
}

export default function RecordDetail() {
  const param = useParams();
  const {
    list,
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

  // 尋找當下資料索引
  const [dataIndex, setDataIndex] = useState(
    list.findIndex((item) => item.id === data?.id)
  );
  // 資料最大長度
  const dataMaxlength = list.length;

  const handleAddIndex = () => {
    if (dataIndex >= dataMaxlength - 1) return;
    setDataIndex((pI) => pI + 1);
  };
  const handleReduceIndex = () => {
    if (dataIndex === 0) return;
    setDataIndex((pI) => pI - 1);
  };

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
        dataMaxlength,
        dataIndex,
        getCurrentData,
        openDetail,
        closeDetail,
        createRecordState,
        handleAddIndex,
        handleReduceIndex,
        setData,
      }}
    >
      <RecordDetailWrapper>
        <RecordDetaiHeader />
        <RecordDetaiContent />
        <RecordDetaiBottom />
      </RecordDetailWrapper>
    </listDetailContext.Provider>
  );
}
