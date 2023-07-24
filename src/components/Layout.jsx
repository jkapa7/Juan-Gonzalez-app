import Navbar from "./NavBar";
import Footer from "./Footer";
import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer text="Hola" />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
