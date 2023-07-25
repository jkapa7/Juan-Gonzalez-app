import Button from "./Button";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import smoothScroll from "../utils/smoothScroll";
import { sunIcon, moonIcon } from "../utils/icons";

export function Navbar() {
  const [t, i18n] = useTranslation("global");
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    smoothScroll(sectionId);
  };

  const currentLanguage = i18n.language === "en" ? "EN" : "ES";

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div>
        <h2 className="text-xl font-bold">Juan Daniel Gonzalez</h2>
      </div>
      <div className="flex items-center space-x-4">
        <a
          className="hover:bg-slate-300 mx-auto my-auto px-2 py-1 rounded cursor-pointer"
          onClick={(e) => handleScrollToSection(e, "#about")}
        >
          About me
        </a>

        <a
          className="hover:bg-slate-300 mx-auto my-auto px-2 py-1 rounded cursor-pointer"
          onClick={(e) => handleScrollToSection(e, "#portfolio")}
        >
          Portfolio
        </a>

        <button
          className="hover:bg-slate-300 mx-auto my-auto px-2 py-1 rounded cursor-pointer"
          onClick={toggleLanguage}
        >
          {currentLanguage}
        </button>

        <button
          onClick={handleClick}
          className="hover:bg-slate-300 mx-auto my-auto px-2 py-1 rounded cursor-pointer"
        >
          {darkMode ? sunIcon : moonIcon}
        </button>

        <Button text="Let's talk" />
      </div>
    </div>
  );
}
