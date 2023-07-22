import Navbar from "./NavBar";
import Footer from "./Footer";
import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.string,
};

export default Layout;
