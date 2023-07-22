import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./config/Router";
import { RouterProvider } from "react-router-dom";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <section className="bg-gray-200 dark:bg-gray-800 transition-colors  min-h-screen grid place-content-center text-gray-900 dark:text-gray-200">
      <RouterProvider router={Router} />
    </section>
  </React.StrictMode>
);
