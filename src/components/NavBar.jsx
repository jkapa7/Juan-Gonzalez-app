import Button from "./Button";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Navbar() {
  const [t, i18n] = useTranslation("global");

  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  const text = darkMode ? "Activar modo claro" : "Activar modo oscuro";

  return (
    <div className="flex justify-center text-center align-middle bg-green-800">
      <div>
        <h2>Juan Daniel Gonzalez</h2>
      </div>

      <div>
        <a>About me</a>

        <a>Portfolio</a>

        <button onClick={() => i18n.changeLanguage("es")}>ES</button>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>

        <>
          <Button onClick={handleClick} text={text}></Button>
        </>

        <Button text="let's talk" />
      </div>
    </div>
  );
}

export default Navbar;
