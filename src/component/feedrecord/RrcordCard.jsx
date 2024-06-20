import { Icon } from "@iconify-icon/react";
import { useNavigate, useParams } from "react-router-dom";
export default function RrcordCard() {
  const list = [
    {
      id: "01",
      pool: "白蝦池",
      acount: 4,
    },
    {
      id: "02",
      pool: "龍膽石斑魚池",
      acount: 3,
    },
    {
      id: "03",
      pool: "鰻魚池",
      acount: 2,
    },
    {
      id: "04",
      pool: "泰國蝦池",
      acount: 1,
    },
    {
      id: "05",
      pool: "虱目魚池",
      acount: 3,
    },
  ];

  const navigate = useNavigate();
  const param = useParams();
  const handleClick = (id) => {
    navigate(`/record/${param.category}/${id}`);
  };

  return (
    <div className="flex  flex-col justify-center items-center">
      {list.map((item) => (
        <div
          onClick={() => handleClick(`${item.id}-${item.pool}`)}
          key={item.id}
          className="
          flex
          flex-col
          relative 
          w-[250px] 
          h-[200px]
           bg-redlight 
           text-white rounded-3xl 
           shadow-2xl 
           mt-4 
           cursor-pointer 
           p-4 
           pb-8"
        >
          <p className="text-2xl leading-10	">{item.id}</p>
          <p className="text-2xl leading-10	">{item.pool}</p>
          <p className="text-xl leading-10 mt-auto">第 {item.acount} 批次</p>
          <Icon
            className="absolute top-4 right-4 text-3xl"
            icon="majesticons:edit-pen-2"
          />
        </div>
      ))}
    </div>
  );
}
