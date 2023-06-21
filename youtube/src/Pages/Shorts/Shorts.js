import React from "react";
import ReactPlayer from "react-player";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";

import styles from "./Shorts.module.scss";
import ShortsItems from "./ShortsItems";
import {
  CommentVideoIcon,
  DisLikeVideoIcon,
  LikeVideoIcon,
  ShareVideoIcon,
  ThreeDotsVideoIcon,
} from "../../Components/Layouts/Icons";

const cx = classNames.bind(styles);

function Shorts() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("context")}>
        <ReactPlayer
          className={cx("video")}
          url="https://youtu.be/Bf0yX_mDIOc"
        />
        <div className={cx("interact")}>
          <Tippy
            delay={[0, 200]}
            placement="left"
            content="I like video"
            hideOnClick={false}
          >
            <div className={cx("interact__video")}>
              <ShortsItems icon={<LikeVideoIcon />} />
              <span>21 N</span>
            </div>
          </Tippy>
          <Tippy
            delay={[0, 200]}
            placement="left"
            content="I like dis videos"
            hideOnClick={false}
          >
            <div className={cx("interact__video")}>
              <ShortsItems icon={<DisLikeVideoIcon />} />
              <span>Dis Like</span>
            </div>
          </Tippy>
          <Tippy
            delay={[0, 200]}
            placement="left"
            content="Comment"
            hideOnClick={false}
          >
            <div className={cx("interact__video")}>
              <ShortsItems icon={<CommentVideoIcon />} />
              <span>67</span>
            </div>
          </Tippy>
          <Tippy
            delay={[0, 200]}
            placement="left"
            content="Share"
            hideOnClick={false}
          >
            <div className={cx("interact__video")}>
              <ShortsItems icon={<ShareVideoIcon />} />
              <span>Share</span>
            </div>
          </Tippy>
          <div className={cx("interact__video")}>
            <ShortsItems icon={<ThreeDotsVideoIcon />} />
          </div>
        </div>
      </div>
      <div className={cx("context")}>
        <ReactPlayer
          className={cx("video")}
          url="https://youtu.be/tCcOrhgwgxM"
        />
        <div className={cx("interact")}>
          <Tippy
            delay={[0, 200]}
            placement="left"
            content="I like video"
            hideOnClick={false}
          >
            <div className={cx("interact__video")}>
              <ShortsItems icon={<LikeVideoIcon />} />
              <span>21 N</span>
            </div>
          </Tippy>
          <Tippy
            delay={[0, 200]}
            placement="left"
            content="I like dis videos"
            hideOnClick={false}
          >
            <div className={cx("interact__video")}>
              <ShortsItems icon={<DisLikeVideoIcon />} />
              <span>Dis Like</span>
            </div>
          </Tippy>
          <Tippy
            delay={[0, 200]}
            placement="left"
            content="Comment"
            hideOnClick={false}
          >
            <div className={cx("interact__video")}>
              <ShortsItems icon={<CommentVideoIcon />} />
              <span>67</span>
            </div>
          </Tippy>
          <Tippy
            delay={[0, 200]}
            placement="left"
            content="Share"
            hideOnClick={false}
          >
            <div className={cx("interact__video")}>
              <ShortsItems icon={<ShareVideoIcon />} />
              <span>Share</span>
            </div>
          </Tippy>
          <div className={cx("interact__video")}>
            <ShortsItems icon={<ThreeDotsVideoIcon />} />
          </div>
        </div>
      </div>
      <div className={cx("context")}>
        <ReactPlayer
          className={cx("video")}
          url="https://youtu.be/8rVqPsVHnjE"
        />
        <div className={cx("interact")}>
          <Tippy
            delay={[0, 200]}
            placement="left"
            content="I like video"
            hideOnClick={false}
          >
            <div className={cx("interact__video")}>
              <ShortsItems icon={<LikeVideoIcon />} />
              <span>21 N</span>
            </div>
          </Tippy>
          <Tippy
            delay={[0, 200]}
            placement="left"
            content="I like dis videos"
            hideOnClick={false}
          >
            <div className={cx("interact__video")}>
              <ShortsItems icon={<DisLikeVideoIcon />} />
              <span>Dis Like</span>
            </div>
          </Tippy>
          <Tippy
            delay={[0, 200]}
            placement="left"
            content="Comment"
            hideOnClick={false}
          >
            <div className={cx("interact__video")}>
              <ShortsItems icon={<CommentVideoIcon />} />
              <span>67</span>
            </div>
          </Tippy>
          <Tippy
            delay={[0, 200]}
            placement="left"
            content="Share"
            hideOnClick={false}
          >
            <div className={cx("interact__video")}>
              <ShortsItems icon={<ShareVideoIcon />} />
              <span>Share</span>
            </div>
          </Tippy>
          <div className={cx("interact__video")}>
            <ShortsItems icon={<ThreeDotsVideoIcon />} />
          </div>
        </div>
      </div>
      <div className={cx("context")}>
        <ReactPlayer
          className={cx("video")}
          url="https://youtu.be/b9Luw7O7W_4"
        />
        <div className={cx("interact")}>
          <Tippy
            delay={[0, 200]}
            placement="left"
            content="I like video"
            hideOnClick={false}
          >
            <div className={cx("interact__video")}>
              <ShortsItems icon={<LikeVideoIcon />} />
              <span>21 N</span>
            </div>
          </Tippy>
          <Tippy
            delay={[0, 200]}
            placement="left"
            content="I like dis videos"
            hideOnClick={false}
          >
            <div className={cx("interact__video")}>
              <ShortsItems icon={<DisLikeVideoIcon />} />
              <span>Dis Like</span>
            </div>
          </Tippy>
          <Tippy
            delay={[0, 200]}
            placement="left"
            content="Comment"
            hideOnClick={false}
          >
            <div className={cx("interact__video")}>
              <ShortsItems icon={<CommentVideoIcon />} />
              <span>67</span>
            </div>
          </Tippy>
          <Tippy
            delay={[0, 200]}
            placement="left"
            content="Share"
            hideOnClick={false}
          >
            <div className={cx("interact__video")}>
              <ShortsItems icon={<ShareVideoIcon />} />
              <span>Share</span>
            </div>
          </Tippy>
          <div className={cx("interact__video")}>
            <ShortsItems icon={<ThreeDotsVideoIcon />} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shorts;
