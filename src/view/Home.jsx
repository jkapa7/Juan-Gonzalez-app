import About from "../components/About";
import Work from "../components/Work";

import "../styles/Home.scss";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <About />
      <Work />
    </Layout>
  );
}

export default Home;
