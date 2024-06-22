import { Icon } from "@iconify-icon/react";
const notifications = [
  {
    date: "2022/01/01",
    time: "11 : 00",
    message: ["昨晚所放的飼料都有吃完", "水色正常"],
  },
  {
    date: "2022/01/01 ",
    time: "09 : 00",
    message: ["需要預購聯豐蝦粉", "特價只到 01/10 預定10包"],
  },
];

function Monitor() {
  return (
    <div className="relative text-right text-white  mr-4 pt-5 mb-3">
      <div>
        <span className="text-lg">星期ㄧ</span>
        <br />
        <span className="text-lg">十一月廿九</span>
        <span className="text-6xl">01/01</span>
      </div>

      <div>
        <button className="absolute left-0 bottom-0 w-[40px] h-[40px] rounded-full bg-primary text-white">
          <Icon
            className=" flex justify-center items-center text-3xl"
            icon="mi:add"
          />
        </button>
      </div>
    </div>
  );
}

function Menu() {
  return notifications.map((item, i) => (
    <div key={i} className="flex flex-col  [&:not(:last-child)]:mb-2 ">
      <div className="bg-greylight text-greydark  rounded leading-5 p-3">
        <span className="block leading-6	">{`${item.date}  ${item.time}`}</span>
        {item.message.map((text, k) => (
          <span className="block leading-6	" key={k}>
            {text}
          </span>
        ))}
      </div>
    </div>
  ));
}

export default function Notification() {
  const notificationStyle = () => `    
  relative
  w-full  p-3 bg-secondary rounded overflow-hidden shadow-sm 
  after:content-[''] 
  after:absolute 
  after:top-[43%] 
  after:-translate-y-1/2
  after:right-[4px]
  after:rounded-full
  after:w-[3px]
  after:h-[30px]
after:bg-greylight`;

  return (
    <div className={notificationStyle()}>
      <Monitor />
      <Menu />
    </div>
  );
}
