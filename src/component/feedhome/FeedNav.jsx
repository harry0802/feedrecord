import { Icon } from "@iconify-icon/react";
import { useNavigate } from "react-router-dom";

export default function FeedNav() {
  const menu = [
    {
      icon: "mdi:eye",
      text: "養殖監控",
    },
    {
      icon: "mingcute:wave-fill",
      text: "進水排水",
    },
    {
      icon: "streamline:bug-antivirus-debugging",
      text: "養水消毒",
    },
    {
      icon: "grommet-icons:folder-cycle",
      text: "批次紀錄",
    },
    {
      icon: "game-icons:school-of-fish",
      text: "放苗紀錄",
    },
    {
      icon: "mingcute:feeder-fill",
      text: "餵養紀錄",
    },
    {
      icon: "tdesign:measurement-1",
      text: "測量紀錄",
    },
    {
      icon: "game-icons:fishing",
      text: "收成紀錄",
    },

    {
      icon: "fluent:box-toolbox-20-filled",
      text: "包裝紀錄",
    },
  ];
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/record/${category}`);
  };

  return (
    <div className="grid  grid-cols-3  mt-2 gap-1 w-full">
      {menu.map((item, i) => (
        <div
          onClick={() => handleClick(item.text)}
          className=" p-3 rounded-md bg-[#FFFFFF] text-primary text-center shadow-md
           first:bg-red first:text-white

          "
          key={i}
        >
          <Icon className="text-5xl" icon={item.icon} />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
