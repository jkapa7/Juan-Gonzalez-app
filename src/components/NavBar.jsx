import Button from "./Button";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Navbar() {
  const [t, i18n] = useTranslation("global");
  const [darkMode, setDarkMode] = useState(false);

  i18n.changeLanguage;

  const handleClick = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  const text = darkMode ? "Activar modo claro" : "Activar modo oscuro";

  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div>
        <h2 className="text-xl font-bold">Juan Daniel Gonzalez</h2>
      </div>
      <div className="flex items-center space-x-4">
        <a
          className=" hover:bg-slate-300 mx-auto my-auto px-2 py-1 rounded"
          href="#about"
        >
          About me
        </a>

        <a
          className=" hover:bg-slate-300 mx-auto my-auto px-2 py-1 rounded "
          href="#portfolio"
        >
          Portfolio
        </a>

        {i18n.language === "en" ? (
          <button
            className=" hover:bg-slate-300 mx-auto my-auto px-2 py-1 rounded"
            onClick={() => i18n.changeLanguage("es")}
          >
            ES
          </button>
        ) : (
          <button
            className="  hover:bg-slate-300 mx-auto my-auto px-2 py-1 rounded"
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </button>
        )}

        <button
          onClick={handleClick}
          className=" hover:bg-slate-300 mx-auto my-auto px-2 py-1 rounded"
        >
          {text}
        </button>

        <Button text="Let's talk" />
      </div>
    </div>
  );
}

export default Navbar;
