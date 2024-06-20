import { Icon } from "@iconify-icon/react";
export default function RecordTitle() {
  return (
    <div className="sticky top-[110px] z-10">
      <div className="relative  flex items-end flex-col  w-full  pl-4 pr-14 bg-greylight pb-4">
        <div
          className="shadow absolute top-2  right-2 ml-auto flex justify-center items-center w-10 h-10 text-white bg-primary rounded-full  
      after:content-['~']
      after:text-2xl
      after:block
      after:absolute
      after:left-[-70%]
      after:top-1/2
      after:-translate-y-1/2
      after:translate-x-1/2
      after:text-greydark
      "
        >
          <Icon className="  items-center text-3xl  " icon="mi:add" />
        </div>
        <button
          className="
      mt-2
      w-full
      feed-list 
      max-w-[70%]
      mr-6
      "
        >
          <span> 2022 / 01 / 01 00:00</span>
          <Icon
            className="text-primary pr-2 text-xl"
            icon="lets-icons:date-fill"
          />
        </button>
        <button className="mt-2 feed-list w-full max-w-[70%]">
          <span>2022/01/20 12:00</span>
          <Icon
            className="text-xl text-primary pr-2"
            icon="lets-icons:date-fill"
          />
        </button>
      </div>
    </div>
  );
}
