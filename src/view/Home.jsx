import About from "../components/About";
import { Portfolio } from "../components/Portfolio";
import Layout from "../components/Layout";
import LandingHome from "../components/LandingHome";
import { upButton } from "../utils/buttonUp";

function Home() {
  return (
    <Layout>
      <LandingHome />
      <About />
      <Portfolio />
      {upButton}
    </Layout>
  );
}

export default Home;
