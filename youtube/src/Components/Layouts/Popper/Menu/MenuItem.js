import PropTypes from "prop-types";
import classNames from "classnames/bind";

import Button from "../../../Button";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  return (
    <Button
      className={cx("menu__items")}
      iconItem={data.icon}
      subIconItem={data.iconsub}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default MenuItem;
