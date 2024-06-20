import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom"; // 使用 createHashRouter 和 HashRouter
import "./index.css";
import FeedHome from "./page/FeedHome.jsx";
import FeedRecord from "./page/FeedRecord.jsx";
import RecordList from "./component/feedrecord/recordList/RecordList.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <FeedHome />,
      },
      {
        path: "/record/:category",
        element: <FeedRecord />,
      },
      {
        path: "/record/:category/:poolId",
        element: <RecordList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
