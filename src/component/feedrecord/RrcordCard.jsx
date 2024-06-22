import { Icon } from "@iconify-icon/react";
import { useNavigate, useParams } from "react-router-dom";
import { poolContext } from "../../page/FeedRecord";
import { useContext } from "react";

import SideButton from "../SideButton";

const Pooltext = `text-2xl leading-10`;

function Pools() {
  const navigate = useNavigate();
  const param = useParams();
  const handleClick = (id) => {
    navigate(`/record/${param.category}/${id}`);
  };

  const { currentList, setCurrentList } = useContext(poolContext);
  return currentList?.map((item) => (
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
      <p className={Pooltext}>{item.id}</p>
      <p className={Pooltext}>{item.pool}</p>
      <p className="text-xl leading-10 mt-auto">{item.acount}</p>
      <Icon
        className="absolute top-4 right-4 text-3xl"
        icon="majesticons:edit-pen-2"
      />
    </div>
  ));
}
function PreviousLiset() {
  const { isSearch, reSetList } = useContext(poolContext);
  return (
    isSearch && (
      <div className="absolute top-2 left-0 text-4xl flex cursor-pointer text-primary">
        <Icon onClick={reSetList} className="" icon="mingcute:left-fill" />
      </div>
    )
  );
}
export default function RrcordCard() {
  return (
    <div className="relative flex  flex-col justify-center items-center">
      <Pools />
      <PreviousLiset />
      <SideButton />
    </div>
  );
}
