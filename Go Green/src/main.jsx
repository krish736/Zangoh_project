import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Front from "./componenets/Front";
import Frame10 from './componenets/Frame10.jsx';
import Img1 from './componenets/Img1.jsx';
import Img2 from './componenets/Img2.jsx';
import Img3 from './componenets/Img3.jsx';
import Img4 from './componenets/Img4.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Front />,
      },
      {
        path: "/frame10",
        element: <Frame10 />,
      },
      {
        path: "/img1",
        element: <Img1 />,
      },
      {
        path: "/img2",
        element: <Img2 />,
      },
      {
        path: "/img3",
        element: <Img3 />,
      },
      {
        path: "/img4",
        element: <Img4 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
