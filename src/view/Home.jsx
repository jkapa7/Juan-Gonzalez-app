import About from "../components/About";
import Layout from "../components/Layout";
import LandingHome from "../components/LandingHome";
import { upButton } from "../utils/buttonUp";
import Footer from "../components/Footer";
import { Carousel } from "../components/Carousel";

function Home() {
  return (
    <Layout>
      <main className="snap-y snap-mandatory relative w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
        <div className="snap-center" id="landing">
          <LandingHome />
        </div>

        <div className="snap-center" id="about">
          <About />
        </div>

        <div className="snap-center">
          <Carousel />
        </div>

        <div className="snap-center" id="talk">
          <Footer txt="Hola" />
        </div>
      </main>
      {upButton}
    </Layout>
  );
}

export default Home;
