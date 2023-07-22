import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import Translation from "../data/lenguges.json";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const [lenguage, setLenguage] = useState("english");
  const [content, setContent] = useState({});

  useEffect(() => {
    if (lenguage == "english") {
      setContent(Translation.english);
    } else if (lenguage == "spanish") {
      setContent(Translation.spanish);
    }
  }, [lenguage]);

  const handleClick = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  const text = darkMode ? "Activar modo claro" : "Activar modo oscuro";

  return (
    <Layout>
      <select
        value={lenguage}
        onChange={(e) => {
          setLenguage(e.target.value);
        }}
      >
        <option>english</option>
        <option>spanish</option>
      </select>

      <div>
        <h2>{content.title}</h2>
      </div>

      <>
        <Button onClick={handleClick} text={text}></Button>
      </>

      <About />
      <Portfolio />
    </Layout>
  );
}

export default Home;
