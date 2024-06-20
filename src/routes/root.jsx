import { Outlet, Link, useLocation } from "react-router-dom";
import FeedHeader from "../layout/FeedHeader.jsx";
import { Icon } from "@iconify-icon/react";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      <div className="flex  justify-center">
        <div className="relative flex flex-col w-full max-w-[600px] min-h-screen bg-greylight">
          <FeedHeader isHome={isHome} />
          <main>
            <Outlet />
          </main>
          {!isHome && (
            <Link
              to="/"
              className="fixed flex  w-10 h-10 bottom-2 right-2 rounded-full  place-content-center items-center    bg-primary text-white"
            >
              <Icon className="text-xl" icon="ion:home" />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
