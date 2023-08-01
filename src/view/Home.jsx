import About from "../components/About";
import { Portfolio } from "../components/Portfolio";
import Layout from "../components/Layout";
import LandingHome from "../components/LandingHome";
import { upButton } from "../utils/buttonUp";

function Home() {
  return (
    <Layout>
      <div className="snap-center">
        <LandingHome />
      </div>

      <div className="snap-center">
        <About />
      </div>

      <div className="snap-center">
        <Portfolio />
      </div>
      {upButton}
    </Layout>
  );
}

export default Home;
