import RecordSearch from "../component/feedrecord/RecordSearch";
import RrcordCard from "../component/feedrecord/RrcordCard.jsx";
import FeedFactory from "../layout/FeedFactory.jsx";
import { useState, createContext } from "react";

const list = [
  {
    id: "01",
    pool: "白蝦池",
    acount: "第4批次",
  },
  {
    id: "02",
    pool: "龍膽石斑魚池",
    acount: "第3批次",
  },
  {
    id: "03",
    pool: "鰻魚池",
    acount: "第2批次",
  },
  {
    id: "04",
    pool: "泰國蝦池",
    acount: "第1批次",
  },
  {
    id: "05",
    pool: "虱目魚池",
    acount: "第3批次",
  },
];

export const poolContext = createContext();

export default function FeedRecord() {
  const [currentList, setCurrentList] = useState(list);
  const [isSearch, SetIsSearch] = useState(false);
  const [userEnter, setUserEnter] = useState("");

  const reSetList = () => {
    setCurrentList((pL) => (pL = list));
    SetIsSearch(false);
    setUserEnter((pE) => (pE = ""));
  };

  const handleSearch = (query) => {
    if (query === "") return;
    setCurrentList((pL) => {
      pL = list;
      const reponse = pL.filter((data) => {
        const { id, pool, acount } = data;
        if (query === id || query === pool || acount === query) {
          return data;
        }
      });
      return (pL = reponse);
    });
    SetIsSearch((pI) => (pI = true));
  };

  return (
    <poolContext.Provider
      value={{
        currentList,
        setCurrentList,
        handleSearch,
        reSetList,
        isSearch,
        userEnter,
        setUserEnter,
      }}
    >
      <FeedFactory>
        <RecordSearch />
      </FeedFactory>
      <div className="w-full px-3 pt-0 ">
        <RrcordCard currentList={currentList} />
      </div>
    </poolContext.Provider>
  );
}
