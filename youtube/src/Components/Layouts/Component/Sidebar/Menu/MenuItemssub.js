import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";

import styles from "./Menu.module.scss";
import Image from "../../../../Image";

const cx = classNames.bind(styles);

function MenuItemSub({ to, src, title }) {
  return (
    <NavLink
      to={to}
      className={(nav) => cx("menu__items", { active: nav.isActive })}
    >
      <span>
        <Image className={cx("img")} src={src} />
      </span>
      <span className={cx("title")}>{title}</span>
    </NavLink>
  );
}

MenuItemSub.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
};

export default MenuItemSub;
