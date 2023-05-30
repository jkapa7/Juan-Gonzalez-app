import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import "../styles/Home.scss";

function Home() {
  return (
    <div>
      <div className="home">
        <div>
          <h1>Juan Daniel Gonzalez</h1>
        </div>

        <div>
          <h1>About</h1>
        </div>

        <div>
          <h1>Work</h1>
        </div>

        <div>
          <button>Let's talk</button>
        </div>

        <button>Let's talk</button>
      </div>
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default Home;
