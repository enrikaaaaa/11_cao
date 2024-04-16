import Footer from "../components/Footer/Footer";
import PropTypes from "prop-types";
import TopBar from "../components/TopBar/TopBar";

const BasicLayout = ({ children }) => {
  return (
    <div>
      <TopBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

BasicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
