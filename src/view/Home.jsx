import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Layout from "../components/Layout";
import { useState } from "react";
import Button from "../components/Button";

function Home() {
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

      <About />
      <Portfolio />
    </Layout>
  );
}

export default Home;
