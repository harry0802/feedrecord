import Notification from "../component/feedhome/Notification";
import FeedNav from "../component/feedhome/FeedNav.jsx";
export default function FeedHome() {
  return (
    <div className="w-full  p-2  pb-5 ">
      <Notification />
      <FeedNav />
    </div>
  );
}
