import classNames from "classnames/bind";

import styles from "./DefaultLayout.module.scss";
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <div className={cx("container")}>
        <Sidebar className={cx("sidebar")} />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
