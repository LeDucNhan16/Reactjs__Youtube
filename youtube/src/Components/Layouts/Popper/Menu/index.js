import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { useState } from "react";

import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "../../Popper";
import MenuItem from "./MenuItem";
import HeaderMenu from "./HeaderMenu";
import HeaderMenuMain from "./HeaderMenuMain";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isHistory = !!item.children;

      return (
        <MenuItem
          data={item}
          key={index}
          onClick={() => {
            if (isHistory) {
              setHistory((prev) => [...prev, item.children]);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      interactive
      placement="bottom-end"
      delay={[0, 500]}
      hideOnClick={false}
      offset={[10, 9.5]}
      render={(attrs) => (
        <div className={cx("menu__list")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {history.length > 1 ? (
              <div className={cx("header__subyour")}>
                <HeaderMenu
                  onBack={() => {
                    setHistory((prev) => prev.slice(0, prev.length - 1));
                  }}
                />
              </div>
            ) : (
              <div className={cx("header__your")}>
                <HeaderMenuMain />
              </div>
            )}
            <div className={cx("header__your__main")}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHidden={() => {
        setHistory((prev) => prev.slice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
};

export default Menu;
