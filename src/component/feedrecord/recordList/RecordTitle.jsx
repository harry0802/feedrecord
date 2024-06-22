import { Icon } from "@iconify-icon/react";

function DateButton() {
  const buttonStyle = `mt-2 w-full feed-list  max-w-[90%]`;
  const date = `pl-3 tracking-widest `;
  const dateIcon = `text-primary pr-2 text-xl`;
  return (
    <>
      <button className={`${buttonStyle} mr-6  `}>
        <span className={date}> 2022 /01/01 00:00</span>
        <Icon className={dateIcon} icon="lets-icons:date-fill" />
      </button>
      <button className={buttonStyle}>
        <span className={date}>2022/01/20 12:00</span>
        <Icon className={dateIcon} icon="lets-icons:date-fill" />
      </button>
    </>
  );
}

function AddButton() {
  const wave = `after:content-['~']
  after:text-2xl
  after:block
  after:absolute
  after:left-[-70%]
  after:top-1/2
  after:-translate-y-1/2
  after:translate-x-1/2
  after:text-greydark`;
  return (
    <div
      className={`shadow absolute top-2  right-2 ml-auto flex justify-center items-center w-10 h-10 text-white bg-primary rounded-full ${wave}`}
    >
      <Icon className="  items-center text-3xl  " icon="mi:add" />
    </div>
  );
}

export default function RecordTitle() {
  return (
    <div className="relative  flex items-end flex-col  w-full  pl-4 pr-14 bg-greylight pb-4">
      <AddButton />
      <DateButton />
    </div>
  );
}
