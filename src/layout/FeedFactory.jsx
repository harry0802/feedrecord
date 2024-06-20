import { Icon } from "@iconify-icon/react";
import { useParams } from "react-router-dom";
export default function FeedFactory() {
  const param = useParams();

  return (
    <>
      <div className="flex w-full items-center">
        {Object.keys(param).length > 0 && (
          <div>
            <p className="text-lg  text-greydark tracking-wider">
              {Object.values(param).at(-1)}
            </p>
          </div>
        )}

        <div className="feed-list justify-self-end ml-auto w-[40%] ">
          屏東歸來廠
          <Icon className="text-primary" icon="subway:down-2" />
        </div>
      </div>
    </>
  );
}
