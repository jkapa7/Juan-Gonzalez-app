import "../styles/App.css";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />

      <About />

      <Work />

      <Contact />
    </div>
  );
}

export default Home;
