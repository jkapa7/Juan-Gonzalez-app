import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./config/Router";
import { RouterProvider } from "react-router-dom";
import "./styles/index.css";
import LanguageDetector from "i18next-browser-languagedetector";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./data/translations/es/global.json";
import global_en from "./data/translations/en/global.json";

i18next.use(LanguageDetector).init({
  interpolation: {
    escapeValue: false,
  },

  fallbackLng: "en",

  debug: true,

  react: {
    wait: true,
  },

  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <section className="bg-gray-200 dark:bg-gray-800 transition-colors  text-gray-900 dark:text-gray-200">
        <RouterProvider router={Router} />
      </section>
    </I18nextProvider>
  </React.StrictMode>
);
