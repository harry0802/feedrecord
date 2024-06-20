import RecordSearch from "../component/feedrecord/RecordSearch";
import RrcordCard from "../component/feedrecord/RrcordCard.jsx";

export default function FeedRecord() {
  return (
    <>
      <div className="relative">
        <div
          className="
        sticky
        top-[109px]
        left-0
        right-0
        p-3 
        mb-3 
        shadow-md
        shadow-greylight
        z-10 
      bg-greylight"
        >
          <RecordSearch />
        </div>

        <div className="w-full px-3 pt-0 ">
          <RrcordCard />
        </div>
      </div>
    </>
  );
}
