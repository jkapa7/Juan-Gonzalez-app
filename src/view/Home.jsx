import About from "../components/About";
import { Portfolio } from "../components/Portfolio";
import Layout from "../components/Layout";
import LandingHome from "../components/LandingHome";

function Home() {
  return (
    <Layout>
      <LandingHome />
      <About />
      <Portfolio />
    </Layout>
  );
}

export default Home;
