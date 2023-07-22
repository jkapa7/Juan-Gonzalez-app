import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Layout from "../components/Layout";
import { useState } from "react";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";

function Home() {
  const [t, i18n] = useTranslation("global");
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  const text = darkMode ? "Activar modo claro" : "Activar modo oscuro";

  return (
    <Layout>
      <>
        <Button onClick={handleClick} text={text}></Button>
      </>

      <h1>{t("title")}</h1>

      <button onClick={() => i18n.changeLanguage("es")}>ES</button>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>

      <About />

      <Portfolio />
    </Layout>
  );
}

export default Home;
