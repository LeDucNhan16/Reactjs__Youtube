import classNames from "classnames/bind";

import styles from "./Menu.module.scss";
import Image from "../../../Image";

const cx = classNames.bind(styles);

function HeaderMenuMain() {
  return (
    <div className={cx("menu__header")}>
      <div className={cx("menu__avatar")}>
        <Image
          className={cx("menu__avatar__head")}
          alt="avatar__menu"
          src="https://yt3.ggpht.com/ytc/AGIKgqODGq8lc8FffJNlyZYphUbJgr4hm9kpW9txCxwokg=s600-c-k-c0x00ffffff-no-rj-rp-mo"
        />
        <div className={cx("menu__avatar__title")}>
          <p>Lê Đức Nhân</p>
          <p>@nhanle1602</p>
        </div>
      </div>
      <a
        className={cx("menu__account")}
        href="https://myaccount.google.com/u/0/?utm_source=YouTubeWeb&tab=rk&utm_medium=act&tab=rk&hl=en"
      >
        Manage your Google Account
      </a>
    </div>
  );
}

export default HeaderMenuMain;
