import classNames from "classnames/bind";

import styles from "./Sidebar.module.scss";
import Menu from "./Menu/Menu";
import MenuItems from "./Menu/MenuItems";
import config from "../../../../config";
import {
  HomeIcon,
  HomeActiveIcon,
  RepositoryIcon,
  RepositoryActiveIcon,
  VideoShortIcon,
  VideoShortActiveIcon,
  LibraryIcon,
  LibraryIconActive,
  HistoryIcon,
  HistoryIconActive,
  YourVideoIcon,
  YourVideoIconActive,
  WatchIcon,
  WatchIconActive,
  ListsIconActive,
  LikeIcon,
  LikeIconActive,
  ListsIcon,
  FireIcon,
  FireActiveIcon,
  MusicIcon,
  MusicActiveIcon,
  GameConsoleIcon,
  GameConsoleActiveIcon,
  NewspaperIcon,
  NewspaperActiveIcon,
  CupIcon,
  CupActiveIcon,
  YoutubeIcon,
  YoutubeStudioIcon,
  YoutubeMusicIcon,
  YoutubeKidsIcon,
  SettingIcon,
  SendFeedbackIcon,
  FlagIcon,
  FlagActiveIcon,
  HelpIcon,
} from "../../Icons";
import { useState } from "react";
import MenuItemSub from "./Menu/MenuItemssub";
import FooterSidebar from "./Menu/FooterSidebar";

const cx = classNames.bind(styles);

function Sidebar() {
  const [showMenuSub, setShowMenuSub] = useState(true);
  const [showMenuitems, setShowMenuItems] = useState(true);

  const handleShowItems = () => {
    setShowMenuItems(!showMenuitems);
  };

  const handleShowSubsriptions = () => {
    setShowMenuSub(!showMenuSub);
  };

  return (
    <div className={cx("wrapper")}>
      <Menu>
        <MenuItems
          to={config.router.Home}
          title="Home"
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItems
          to={config.router.Shorts}
          title="Shorts"
          icon={<VideoShortIcon />}
          activeIcon={<VideoShortActiveIcon />}
        />
        <MenuItems
          to={config.router.Subscribe}
          title="Subscriptions  "
          icon={<RepositoryIcon />}
          activeIcon={<RepositoryActiveIcon />}
        />
      </Menu>
      <Menu>
        <MenuItems
          to={config.router.Library}
          title="Library"
          icon={<LibraryIcon />}
          activeIcon={<LibraryIconActive />}
        />
        <MenuItems
          target="_blank"
          to="https://studio.youtube.com/channel/UCp1Nwme_hZe8fbJ1M-iVSRw/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D"
          title="History"
          icon={<HistoryIcon />}
          activeIcon={<HistoryIconActive />}
        />
        <MenuItems
          target="_blank"
          to="https://studio.youtube.com/channel/UCp1Nwme_hZe8fbJ1M-iVSRw/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D"
          title="YourVideo"
          icon={<YourVideoIcon />}
          activeIcon={<YourVideoIconActive />}
        />
        <MenuItems
          to={config.router.Watched}
          title="Watched"
          icon={<WatchIcon />}
          activeIcon={<WatchIconActive />}
        />
        {!showMenuitems && (
          <>
            <MenuItems
              to={config.router.MenuList}
              title="Clone Tiktok với ReactJS"
              icon={<ListsIcon />}
              activeIcon={<ListsIconActive />}
            />
            <MenuItems
              to={config.router.LikeVideo}
              title="LikedVideo"
              icon={<LikeIcon />}
              activeIcon={<LikeIconActive />}
            />
          </>
        )}
        <button className={cx("menu__show")} onClick={handleShowItems}>
          Show
        </button>
      </Menu>
      <Menu>
        <span className={cx("menu__title__sub")}>Subscriptions</span>
        <MenuItemSub
          to="1"
          src="https://yt3.ggpht.com/5SNxZQaK8yLgStxRuzh_KF0d-aK5-gzj7eXxAwGCwVCCWPKaazju_O_dHjyRUvWoqRc-7kjPaQk=s88-c-k-c0x00ffffff-no-rj"
          title="JV"
        />
        <MenuItemSub
          to="2"
          src="https://yt3.ggpht.com/CQj0ZQeehafRNurpeZavsayIS_E2i6BdF99Ct3M7tAsNlpMsyHza7EsO8aNLae2vq3EBOuPW0A=s88-c-k-c0x00ffffff-no-rj"
          title="ACV Entertainment"
        />
        <MenuItemSub
          to="3"
          src="https://yt3.ggpht.com/jVDxD5UWUq1r0p3nIv6pVT-MJAEwwAr2PnKKmDJtAu2g7mWKKld6rYV6GI5EvpZcDSEMMEg7=s88-c-k-c0x00ffffff-no-rj"
          title="Thanh Cong - TC"
        />
        <MenuItemSub
          to="4"
          src="https://yt3.ggpht.com/ytc/AGIKgqMxnfepg1RoIyfFRoZ_sZQVwb6MjiLeMJJyOtD1=s88-c-k-c0x00ffffff-no-rj"
          title="Phim Sài Gòn"
        />
        <MenuItemSub
          to="5"
          src="https://yt3.ggpht.com/ytc/AGIKgqPqRvQNlM4hbvPNMesu8XdPYJcWEeUEzSeIRj5L0A=s88-c-k-c0x00ffffff-no-rj"
          title="Sheep"
        />
        <MenuItemSub
          to="6"
          src="https://yt3.ggpht.com/ytc/AGIKgqOKK8nn3nwCjOwxcQA0dpAuOAly5sd8xp-7wrW5Sg=s88-c-k-c0x00ffffff-no-rj"
          title="Thời trang Ngôi sao"
        />
        <MenuItemSub
          to="7"
          src="https://yt3.ggpht.com/ytc/AGIKgqNF7uN7kFuWXItF4xrmArYGWd2Khi52_N4hPi3L=s88-c-k-c0x00ffffff-no-rj"
          title="ANH FORD"
        />
        {!showMenuSub && (
          <>
            <MenuItemSub
              to="1"
              src="https://yt3.ggpht.com/5SNxZQaK8yLgStxRuzh_KF0d-aK5-gzj7eXxAwGCwVCCWPKaazju_O_dHjyRUvWoqRc-7kjPaQk=s88-c-k-c0x00ffffff-no-rj"
              title="JV"
            />
            <MenuItemSub
              to="2"
              src="https://yt3.ggpht.com/CQj0ZQeehafRNurpeZavsayIS_E2i6BdF99Ct3M7tAsNlpMsyHza7EsO8aNLae2vq3EBOuPW0A=s88-c-k-c0x00ffffff-no-rj"
              title="ACV Entertainment"
            />
            <MenuItemSub
              to="3"
              src="https://yt3.ggpht.com/jVDxD5UWUq1r0p3nIv6pVT-MJAEwwAr2PnKKmDJtAu2g7mWKKld6rYV6GI5EvpZcDSEMMEg7=s88-c-k-c0x00ffffff-no-rj"
              title="Thanh Cong - TC"
            />
            <MenuItemSub
              to="4"
              src="https://yt3.ggpht.com/ytc/AGIKgqMxnfepg1RoIyfFRoZ_sZQVwb6MjiLeMJJyOtD1=s88-c-k-c0x00ffffff-no-rj"
              title="Phim Sài Gòn"
            />
            <MenuItemSub
              to="5"
              src="https://yt3.ggpht.com/ytc/AGIKgqPqRvQNlM4hbvPNMesu8XdPYJcWEeUEzSeIRj5L0A=s88-c-k-c0x00ffffff-no-rj"
              title="Sheep"
            />
            <MenuItemSub
              to="6"
              src="https://yt3.ggpht.com/ytc/AGIKgqOKK8nn3nwCjOwxcQA0dpAuOAly5sd8xp-7wrW5Sg=s88-c-k-c0x00ffffff-no-rj"
              title="Thời trang Ngôi sao"
            />
            <MenuItemSub
              to="7"
              src="https://yt3.ggpht.com/ytc/AGIKgqNF7uN7kFuWXItF4xrmArYGWd2Khi52_N4hPi3L=s88-c-k-c0x00ffffff-no-rj"
              title="ANH FORD"
            />
          </>
        )}
        <button className={cx("menu__show")} onClick={handleShowSubsriptions}>
          Show
        </button>
      </Menu>
      <Menu>
        <span className={cx("menu__title__sub")}>Explore</span>

        <MenuItems
          to="8"
          icon={<FireIcon />}
          title="Trending"
          activeIcon={<FireActiveIcon />}
        />
        <MenuItems
          to="9"
          icon={<MusicIcon />}
          title="Music"
          activeIcon={<MusicActiveIcon />}
        />
        <MenuItems
          to="10"
          icon={<GameConsoleIcon />}
          title="Gaming"
          activeIcon={<GameConsoleActiveIcon />}
        />
        <MenuItems
          to="11"
          icon={<NewspaperIcon />}
          title="News"
          activeIcon={<NewspaperActiveIcon />}
        />
        <MenuItems
          to="12"
          icon={<CupIcon />}
          title="Sports"
          activeIcon={<CupActiveIcon />}
        />
      </Menu>
      <Menu>
        <span className={cx("menu__title__sub")}>More from YouTube</span>

        <MenuItems
          to="https://www.youtube.com/premium"
          icon={<YoutubeIcon />}
          title="Youtube Premium"
        />
        <MenuItems
          target="_blank"
          to="https://studio.youtube.com/channel/UCp1Nwme_hZe8fbJ1M-iVSRw"
          icon={<YoutubeStudioIcon />}
          title="Youtube Studio"
        />
        <MenuItems
          target="_blank"
          to="https://music.youtube.com/"
          icon={<YoutubeMusicIcon />}
          title="Youtube Music"
        />
        <MenuItems
          target="_blank"
          to="https://www.youtubekids.com/?source=youtube_web"
          icon={<YoutubeKidsIcon />}
          title="Youtube Kids"
        />
      </Menu>
      <Menu>
        <MenuItems
          to="https://www.youtube.com/account"
          icon={<SettingIcon />}
          title="Settings"
        />
        <MenuItems
          to="https://www.youtube.com/reporthistory"
          icon={<FlagIcon />}
          activeIcon={<FlagActiveIcon />}
          title="Report history"
        />
        <MenuItems
          to="https://www.youtube.com/account"
          icon={<HelpIcon />}
          title="Help"
        />
        <MenuItems
          to="https://www.youtube.com/account"
          icon={<SendFeedbackIcon />}
          title="Send Feedback"
        />
      </Menu>
      <Menu>
        <nav className={cx("footer__sidebar")}>
          <FooterSidebar
            className={cx("footer__sidebar__items")}
            to="https://about.youtube/"
            title="About"
          />
          <FooterSidebar
            className={cx("footer__sidebar__items")}
            to="https://blog.youtube/"
            title="Press"
          />
          <FooterSidebar
            className={cx("footer__sidebar__items")}
            to="https://www.youtube.com/howyoutubeworks/policies/copyright/"
            title="Copyright"
          />
          <FooterSidebar
            className={cx("footer__sidebar__items")}
            to="https://www.youtube.com/t/contact_us/"
            title="Contact us"
          />
          <FooterSidebar
            className={cx("footer__sidebar__items")}
            to="https://www.youtube.com/creators/"
            title="Creators"
          />
          <FooterSidebar
            className={cx("footer__sidebar__items")}
            to="https://www.youtube.com/ads/"
            title="Advertise"
          />
          <FooterSidebar
            className={cx("footer__sidebar__items")}
            to="https://developers.google.com/youtube?utm_source=devtools"
            title="Developers"
          />
        </nav>
        <nav className={cx("footer__sidebar")}>
          <FooterSidebar
            className={cx("footer__sidebar__items")}
            to="https://www.youtube.com/t/terms"
            title="Terms"
          />
          <FooterSidebar
            className={cx("footer__sidebar__items")}
            to="https://policies.google.com/privacy?hl=en"
            title="Privacy"
          />
          <FooterSidebar
            className={cx("footer__sidebar__items")}
            to="https://www.youtube.com/howyoutubeworks/policies/community-guidelines/"
            title="Policy & Safety"
          />
          <FooterSidebar
            className={cx("footer__sidebar__items")}
            to="https://www.youtube.com/howyoutubeworks/?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen"
            title="How YouTube works"
          />
          <FooterSidebar
            className={cx("footer__sidebar__items")}
            to="https://www.youtube.com/new"
            title="Test new features"
          />
        </nav>
        <span className={cx("footer__sign")}>© 2023 Nhanle</span>
      </Menu>
    </div>
  );
}

export default Sidebar;
