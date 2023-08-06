import { useTranslation } from "react-i18next";
import { useState } from "react";
import { sunIcon, moonIcon } from "../utils/icons";
import Button from "./Button";

export function Navbar() {
  const [t, i18n] = useTranslation("global");
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  const currentLanguage = i18n.language === "en" ? "EN" : "ES";

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex fixed top-0 px-4 py-2 w-full z-40" id="s">
      <div className="flex flex-grow">
        <h2 className="text-xl font-bold">Juan Daniel Gonzalez</h2>
      </div>

      <div className="flex items-center space-x-4 justify-end text-sm font-medium">
        <a
          className="hover:bg-slate-300 mx-auto my-auto px-2 py-1 rounded cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          {t("navBar.about")}
        </a>

        <a
          className="hover:bg-slate-300 mx-auto my-auto px-2 py-1 rounded cursor-pointer"
          onClick={() => scrollToSection("portfolio")}
        >
          {t("navBar.portfolio")}
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

        <Button text="Let's Talk" onClick={() => scrollToSection("talk")} />
      </div>
    </div>
  );
}

//ggggg
