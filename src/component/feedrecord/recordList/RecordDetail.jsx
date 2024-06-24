import { Icon } from "@iconify-icon/react";
import { useParams } from "react-router-dom";
import { userContext } from "./RecordList.jsx";
import { useContext, useState, useEffect, createContext } from "react";

import { dragList, createRecordState } from "./RecordHelper.js";

const listDetailContext = createContext();
const recordTableFormContext = createContext();
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
      {
        id: "feed-7",
        categrty: "飼料7號",
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
      {
        id: "supplement-7",
        categrty: "營養品7號",
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
      {
        id: "medicine-7",
        categrty: "藥品7號",
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
      {
        id: "additive-7",
        categrty: "添加品7號",
        weight: "",
        price: "",
      },
    ],
  },
];
const buttonStytle = "py-2 px-5 bg-primary text-white rounded-full";

function RecordTableFormAlter() {
  const { confirmAlter, handleSendData, handleCancelConfirm } = useContext(
    recordTableFormContext
  );
  const buttonStyle = "text-white py-2 px-4 rounded-full";

  return (
    confirmAlter && (
      <div
        onClick={(e) => {
          e.stopPropagation();
          handleCancelConfirm();
        }}
        className=" fixed bg-[rgba(181,185,192,.4)] inset-0 z-10"
      >
        <div className="absolute flex flex-col inset-0 m-auto w-[80%] max-h-[30%] text-center   bg-white rounded-3xl overflow-hidden p-5">
          <h3 className="pt-3 text-2xl text-greydark">確定要更改記錄表？</h3>
          <div className="flex justify-between mt-auto ">
            <button className={`bg-primary ${buttonStyle}`}>取消送出</button>
            <button
              onClick={() => handleSendData()}
              className={`bg-secondary ${buttonStyle}`}
            >
              確定送出
            </button>
          </div>
          <div className="absolute right-2 top-2 flex justify-center items-center w-[30px] h-[30px] bg-primary  rounded-full  border border-greydark ">
            <Icon className="text-white" icon="maki:cross" />
          </div>
        </div>
      </div>
    )
  );
}

function RecordTableFormContent({ category, handleInputChange }) {
  const [active, setActive] = useState({
    weight: false,
    price: false,
  });
  const [col, table] = category;

  const handleOpenWeightActive = () =>
    setActive((pw) => ({ ...pw, weight: (pw.weight = true) }));
  const handleWeightCloseActive = () =>
    setActive((pw) => ({ ...pw, weight: (pw.weight = false) }));

  const handleOpenPriceActive = () =>
    setActive((pc) => ({ ...pc, price: (pc.price = true) }));

  const handlePriceCloseActive = () =>
    setActive((pc) => ({ ...pc, price: (pc.price = false) }));

  const transition = "transition-all duration-300";
  const inputStyle =
    "w-full py-2 px-4  bg-white rounded-full outline-none shadow shadow-greydark border-[1px]  ";
  const activeStyle = " bg-secondary text-white ";

  return (
    <div className="grid grid-cols-3 text-greydark  justify-between mb-4 gap-1">
      <div
        className={`text-center w-full leading-10 px-2  rounded-full ${transition} ${
          active.weight || active.price ? activeStyle : ""
        }`}
      >
        {table.categrty}
      </div>
      <div>
        <input
          className={`${inputStyle}  ${transition} ${
            active.weight ? "border-greydark" : "border-[transparent]"
          } transition `}
          type="text"
          onChange={(e) => {
            handleInputChange(col, "weight", e.target.value);
          }}
          value={table.weight}
          onFocus={() => handleOpenWeightActive()}
          onBlur={() => handleWeightCloseActive()}
          placeholder={"公斤"}
        />
      </div>
      <div>
        <input
          className={`${inputStyle} ${
            active.price ? "border-greydark" : "border-[transparent]"
          } transition `}
          text="text"
          value={table.price}
          onChange={(e) => {
            handleInputChange(col, "price", e.target.value);
          }}
          onFocus={() => handleOpenPriceActive()}
          onBlur={() => handlePriceCloseActive()}
          placeholder={"元/公斤 "}
        />
      </div>
    </div>
  );
}

function RecordTableFormButton() {
  const { closeDetail } = useContext(listDetailContext);

  return (
    <RecordDetaiConrolBottom>
      <button onClick={closeDetail} className={buttonStytle}>
        取消
      </button>

      <button
        // onClick={() => closeDetail()}
        className={`ml-auto bg-secondary ${buttonStytle}`}
        type="submit"
      >
        確定
      </button>
    </RecordDetaiConrolBottom>
  );
}

function RecordTableForm({ selectedCategory, formTable }) {
  const { currentData, setList, data, closeDetail, lists, dataIndex } =
    useContext(listDetailContext);
  const category = formTable.find(
    (category) => category.category === selectedCategory
  );
  const categoryItem = category.item;

  const [form, setForm] = useState({});
  useEffect(() => {
    setForm((per) => {
      const initialFormState = {};
      categoryItem.forEach(
        (item, index) =>
          (initialFormState[`col${index + 1}`] = {
            ...item,
          })
      );
      return (per = initialFormState);
    });
  }, [category]);

  // 彈跳視窗開關
  const [confirmAlter, setConfirmAlter] = useState(false);

  const handleOpenConfirmAlter = () => setConfirmAlter(true);

  const handleCancelConfirm = () => setConfirmAlter(false);
  const handleSendData = () => {
    // 非空白值 與 取消原先值
    const filterData = Object.values(form).filter((item) => {
      if (
        currentData.categrty.find((da) => da.id === item.id) ||
        (item.price !== "" && item.weight !== "")
      ) {
        return item;
      }
    });
    const mergedMap = new Map();
    currentData.categrty.forEach((item) => mergedMap.set(item.id, { ...item }));
    filterData.forEach((item) => mergedMap.set(item.id, { ...item }));
    const response = Array.from(mergedMap.values()).filter(
      (list) => list.price !== "" && list.weight !== ""
    );

    setList((perL) => {
      const respon = perL.map((item) => {
        if (item.id === lists[dataIndex].id) {
          return {
            ...item,
            details: item.details.map((date) => {
              if (date.id === currentData.id)
                return { ...date, categrty: response };
              return date;
            }),
          };
        }
        return item;
      });
      return (perL = respon);
    });

    closeDetail();
  };

  const handleInputChange = (colKey, field, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [colKey]: {
        ...prevForm[colKey],
        [field]: value,
      },
    }));
  };

  return (
    <recordTableFormContext.Provider
      value={{
        confirmAlter,
        handleOpenConfirmAlter,
        handleCancelConfirm,
        handleSendData,
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleOpenConfirmAlter();
        }}
        className="w-full "
      >
        {Object.entries(form)?.map((category) => (
          <RecordTableFormContent
            key={category[0]}
            category={category}
            handleInputChange={handleInputChange}
          />
        ))}
        <RecordTableFormButton />
      </form>
      <RecordTableFormAlter />
    </recordTableFormContext.Provider>
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
  const { currentData } = useContext(listDetailContext);

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
      ></RecordTableForm>
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
      <p className="mr-10">{content.weight}公斤</p>
      <p>{content.price}元/公斤 </p>
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
    lists,
    dataIndex,
    onClose,
  } = useContext(listDetailContext);

  const recordDetail = () => {
    return (
      <>
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
        <RecordDetaiConrolBottom>
          <button
            onClick={() => onClose()}
            className={`ml-auto bg-secondary ${buttonStytle}`}
          >
            確定
          </button>
        </RecordDetaiConrolBottom>
      </>
    );
  };

  const recordTable = () => {
    return <RecordTable data={currentData} />;
  };

  return (
    <div className="overflow-y-auto">
      {isdetail ? recordTable() : recordDetail()}
    </div>
  );
}

function RecordDetaiConrolBottom({ children }) {
  return (
    <div className="absolute bottom-0 left-0 flex w-full justify-between p-4 ml-auto  ">
      {children}
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
        className="absolute inset-0 m-auto flex flex-col w-full h-full p-2 max-w-[92%] max-h-[85%]  bg-greylight rounded-xl shadow-xl pb-[72px] "
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
    setList,
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

  // 控制切換紀錄
  const handleAddIndex = () => {
    if (dataIndex >= dataMaxlength - 1) return;
    setDataIndex((pI) => pI + 1);
  };
  const handleReduceIndex = () => {
    if (dataIndex === 0) return;
    setDataIndex((pI) => pI - 1);
  };

  // console.log(data);
  // console.log(currentData);
  // console.log(list[dataIndex]);
  // list[dataIndex].map((item) => {
  // item.details.map((categrty) => {
  //   if (categrty.id === currentData.id) {
  //     console.log(categrty);
  //   }
  // });
  // });

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
        setList,
        setData,
      }}
    >
      <RecordDetailWrapper>
        <RecordDetaiHeader />
        <RecordDetaiContent />
      </RecordDetailWrapper>
    </listDetailContext.Provider>
  );
}
