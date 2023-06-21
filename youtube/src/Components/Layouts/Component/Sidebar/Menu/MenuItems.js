import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";

import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItems({ target, to, title, icon, activeIcon }) {
  return (
    <NavLink
      to={to}
      target={target}
      className={(nav) => cx("menu__items", { active: nav.isActive })}
    >
      <span className={cx("icon")}>{icon}</span>
      <span className={cx("active__icon")}>{activeIcon}</span>
      <span className={cx("title")}>{title}</span>
    </NavLink>
  );
}

MenuItems.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.node,
  activeIcon: PropTypes.node,
  target: PropTypes.node,
};

export default MenuItems;
