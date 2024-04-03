import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import NightContextProvider from "./context/nightContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NightContextProvider>
      <RouterProvider router={router} />
    </NightContextProvider>
  </React.StrictMode>
);
