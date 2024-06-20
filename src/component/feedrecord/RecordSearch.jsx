import { Icon } from "@iconify-icon/react";

export default function RecordSearch() {
  return (
    <div
      className="
    flex
    max-w-[80%]
    ml-auto
    justify-end
    place-items-center
    bg-white
    rounded-full
    overflow-hidden
    shadow-md
    z-1
    "
    >
      <input
        className="outline-none w-full p-1 px-3"
        type="text"
        placeholder="請輸入關鍵字查詢..."
      />
      <button className="px-2 text-3xl text-primary bg-white ">
        <Icon className="flex   " icon="ic:round-search" />
      </button>
    </div>
  );
}
