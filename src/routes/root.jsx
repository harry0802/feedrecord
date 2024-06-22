import { Outlet, Link, useLocation } from "react-router-dom";
import FeedHeader from "../layout/FeedHeader.jsx";

import { Icon } from "@iconify-icon/react";
function HomeButton({ isHome }) {
  return (
    !isHome && (
      <Link
        to="/"
        className="fixed flex w-10 h-10 bottom-2 right-2 rounded-full  place-content-center items-center    bg-primary text-white z-10"
      >
        <Icon className="text-xl" icon="ion:home" />
      </Link>
    )
  );
}

function RootWrapper({ children }) {
  return (
    <div className="flex justify-center">
      <div className="relative flex flex-col w-full max-w-[600px] min-h-screen bg-greylight">
        {children}
      </div>
    </div>
  );
}

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <RootWrapper>
      <FeedHeader isHome={isHome} />
      <main>
        <Outlet />
      </main>
      <HomeButton isHome={isHome} />
    </RootWrapper>
  );
}

export default App;
