import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  children,
  onClick,
  iconItem,
  subIconItem,
  ...passProps
}) {
  let Comp = "button";

  const props = {
    onClick,
    ...passProps,
  };

  const classes = cx("wrapper", {
    primary,
    iconItem,
  });

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  return (
    <Comp className={classes} {...props}>
      {iconItem && <span className={cx("icon")}>{iconItem}</span>}
      <span className={cx("title")}>{children}</span>
      {subIconItem && <span className={cx("iconsub")}>{subIconItem}</span>}
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  subIconItem: PropTypes.node,
  iconItem: PropTypes.node,
};

export default Button;
