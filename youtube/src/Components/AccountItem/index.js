import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./AccountItem.module.scss";
import { SearchMiniIcon } from "../Layouts/Icons";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`${data.nickname}`} className={cx("wrapper")}>
      <SearchMiniIcon className={cx("icon__search")} />
      <b className={cx("title__search")}>{data.full_name}</b>
    </Link>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
