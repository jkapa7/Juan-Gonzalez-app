import About from "../components/About";
import { Portfolio } from "../components/Portfolio";
import { Portfolio2 } from "../components/Portfolio";
import { Portfolio3 } from "../components/Portfolio";
import Layout from "../components/Layout";
import LandingHome from "../components/LandingHome";
import { upButton } from "../utils/buttonUp";
import Footer from "../components/Footer";

function Home() {
  return (
    <Layout>
      <main className="snap-y snap-mandatory relative w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
        <div className="snap-center">
          <LandingHome />
        </div>

        <div className="snap-center" id="about">
          <About />
        </div>

        <div className="snap-center">
          <Portfolio />
        </div>

        <div className="snap-center">
          <Portfolio2 />
        </div>

        <div className="snap-center">
          <Portfolio3 />
        </div>

        <div className="snap-center">
          <Footer txt="Hola" />
        </div>

        {upButton}
      </main>
    </Layout>
  );
}

export default Home;
