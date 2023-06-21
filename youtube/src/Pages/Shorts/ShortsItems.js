import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";

import styles from "./Shorts.module.scss";

const cx = classNames.bind(styles);

function ShortsItems({ icon, className }) {
  return (
    <NavLink className={() => cx("menu__items", { className })}>
      <span className={cx("icon")}>{icon}</span>
    </NavLink>
  );
}

ShortsItems.propTypes = {
  icon: PropTypes.node,
  activeIcon: PropTypes.node,
};

export default ShortsItems;
