import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

import { BackIcon } from "../../Icons";

const cx = classNames.bind(styles);

function HeaderMenu({ onBack }) {
  return (
    <header className={cx("menu__item")}>
      <button onClick={onBack} className={cx("menu__item__btn")}>
        <BackIcon className={cx("icon__back")} />
      </button>
      <h4 className={cx("menu__item__title")}>Back to previous page</h4>
    </header>
  );
}

HeaderMenu.propTypes = {
  onBack: PropTypes.node.isRequired,
};

export default HeaderMenu;
