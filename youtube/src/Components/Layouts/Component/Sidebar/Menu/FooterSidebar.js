import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function FooterSidebar({ title, to, className }) {
  return (
    <Link className={className} target="_blank" to={to}>
      {title}
    </Link>
  );
}

FooterSidebar.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
};

export default FooterSidebar;
