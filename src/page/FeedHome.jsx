import Notification from "../component/feedhome/Notification";
import FeedNav from "../component/feedhome/FeedNav.jsx";
import FeedFactory from "../layout/FeedFactory.jsx";

export default function FeedHome() {
  return (
    <>
      <FeedFactory />
      <div className="w-full  p-2  pb-5 ">
        <Notification />
        <FeedNav />
      </div>
    </>
  );
}
