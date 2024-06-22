import { Icon } from "@iconify-icon/react";
import { poolContext } from "../../page/FeedRecord";
import { useContext, useState } from "react";
function Search() {
  const searchWrapper = `flex max-w-[80%] ml-auto justify-end place-items-center bg-white rounded-full overflow-hidden shadow-md z-1    border-[2px]   transition-colors duration-300 `;
  const {
    handleSearch: sendData,
    reSetList,
    userEnter,
    setUserEnter,
  } = useContext(poolContext);

  const [focusInput, SetFocusInput] = useState(false);
  const handleInputChange = (e) => {
    if (e.target.value === "") reSetList();
    setUserEnter((pE) => (pE = e.target.value));
  };
  const handleFocus = () => SetFocusInput((pf) => (pf = true));
  const handleBlur = () => SetFocusInput((pf) => (pf = false));
  const handleSearch = () => {
    sendData(userEnter);
  };

  return (
    <div
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={`${searchWrapper}   ${
        focusInput ? "border-greydark" : "border-[transparent]"
      }`}
    >
      <input
        className="outline-none w-full p-2 px-3 text-greydark"
        type="text"
        value={userEnter}
        onChange={handleInputChange}
        onKeyUp={(e) => {
          if (e.key !== "Enter") return;
          handleSearch();
        }}
        placeholder="請輸入關鍵字查詢..."
      />
      <button className="px-2 text-3xl text-primary ">
        <Icon
          onClick={() => handleSearch()}
          className="flex "
          icon="ic:round-search"
        />
      </button>
    </div>
  );
}

export default function RecordSearch() {
  return (
    <div className="flex items-center pb-3  shadow-md shadow-greylight bg-greylight z-10 ">
      <Search />
    </div>
  );
}
