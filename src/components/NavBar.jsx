import Button from "./Button";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Navbar() {
  const [t, i18n] = useTranslation("global");
  const [darkMode, setDarkMode] = useState(false);

  i18n.changeLanguage;
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
    />
  </svg>;

  const handleClick = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  const text = darkMode ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

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
