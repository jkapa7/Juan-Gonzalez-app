import { Navbar } from "./NavBar";
import PropTypes from "prop-types";
import "../styles/index.css";

function Layout({ children }) {
  return (
    <div className="bg-custom-background">
      <Navbar />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
