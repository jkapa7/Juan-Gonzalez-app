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
    <div className="flex justify-between items-center bg-green-800 px-4 py-2">
      <div>
        <h2 className="text-white text-xl font-bold">Juan Daniel Gonzalez</h2>
      </div>
      <div className="flex items-center space-x-4">
        <a className="text-white">About me</a>
        <a className="text-white">Portfolio</a>

        {i18n.language === "en" ? (
          <button
            className="text-white bg-transparent border border-white px-3 py-1 rounded"
            onClick={() => i18n.changeLanguage("es")}
          >
            ES
          </button>
        ) : (
          <button
            className="text-white bg-transparent border border-white px-3 py-1 rounded"
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </button>
        )}

        <>
          <Button onClick={handleClick} text={text} />
        </>
        <Button text="let's talk" />
      </div>
    </div>
  );
}

export default Navbar;
