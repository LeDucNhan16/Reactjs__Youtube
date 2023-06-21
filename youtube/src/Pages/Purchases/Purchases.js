import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Purchases.module.scss";
import Image from "../../Components/Image";

const cx = classNames.bind(styles);

function Purchases() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("main")}>
        <h3 className={cx("main__title")}>Offers from YouTube</h3>
        <div className={cx("wrapper__list")}>
          <div className={cx("wrapper__listSub")}>
            <Image
              className={cx("img")}
              alt="img Premium"
              src="https://gstatic.com/youtube/img/unlimited/ytu_desktop_premium_offer_450x254.png"
            />
            <h5 className={cx("title")}>
              Enjoy a free month of YouTube Premium
            </h5>
            <p className={cx("document")}>
              Get ad-free access, downloads, and background play when you get
              YouTube Premium
            </p>
            <Link
              to="https://www.youtube.com/premium?ybp=OgIIEEoNCAYSCXVubGltaXRlZA%253D%253D"
              className={cx("button__btn")}
            >
              Learn More
            </Link>
          </div>
          <div className={cx("wrapper__listSub")}>
            <Image
              className={cx("img")}
              alt="img Premium"
              src="https://gstatic.com/youtube/img/unlimited/ytu_desktop_premium_offer_450x254.png"
            />
            <h5 className={cx("title")}>
              Enjoy a free month of YouTube Premium
            </h5>
            <p className={cx("document")}>
              Get ad-free access, downloads, and background play when you get
              YouTube Premium
            </p>
            <Link
              to="https://www.youtube.com/musicpremium?ybp=OgIIEEoVCAYSEXVubGltaXRlZC1CLW11c2lj"
              className={cx("button__btn")}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchases;
