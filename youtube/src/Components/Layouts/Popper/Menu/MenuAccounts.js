import classNames from "classnames/bind";

import styles from "./Menu.module.scss";
import Image from "../../../../assets/Images";

const cx = classNames.bind(styles);

function MenuAccounts() {
  return (
    <div className={cx("accounts")}>
      <div className={cx("menu__header")}>
        <h6>Lê Đức Nhân</h6>
        <p>leducnhan3211602@gmail.com.vn</p>

        <div className={cx("menu__avatar")}>
          <Image
            className={cx("menu__avatar__head")}
            alt="avatar__menu"
            src="https://yt3.ggpht.com/CQj0ZQeehafRNurpeZavsayIS_E2i6BdF99Ct3M7tAsNlpMsyHza7EsO8aNLae2vq3EBOuPW0A=s88-c-k-c0x00ffffff-no-rj"
          />
          <div className={cx("menu__avatar__title")}>
            <p>Lê Đức Nhân</p>
            <p>@nhanle1602</p>
          </div>
        </div>
        <p>View All channels</p>
      </div>
    </div>
  );
}

export default MenuAccounts;
