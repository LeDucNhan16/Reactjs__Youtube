import { DefaultLayoutYous } from "../Components/Layouts";

import config from "../config";
import Home from "../Pages/Home/Home";
import Library from "../Pages/Library/Library";
import LikeVideo from "../Pages/LikeVideo/LikeVideo";
import MenuList from "../Pages/MenuList/MenuList";
import Shorts from "../Pages/Shorts/Shorts";
import SubscribeChannel from "../Pages/SubscribeChannel/SubscribeChannel";
import Watched from "../Pages/Watched/Watched";
import WatchedItLater from "../Pages/WatchedItLater/WatchedItLater";
import YourVideo from "../Pages/YourVideo/YourVideo";
import Explore from "../Pages/Explore/Explore";
import YourChannel from "../Pages/YourChannel/YourChannel";
import Purchases from "../Pages/Purchases/Purchases";

export const publicRoutes = [
  { path: config.router.Home, component: Home },
  { path: config.router.Shorts, component: Shorts },
  { path: config.router.Subscribe, component: SubscribeChannel },
  { path: config.router.Library, component: Library },
  { path: config.router.Explore, component: Explore },
  { path: config.router.Watched, component: Watched },
  { path: config.router.LikeVideo, component: LikeVideo },
  { path: config.router.MenuList, component: MenuList },
  { path: config.router.YourChannel, component: YourChannel },
  { path: config.router.Purchases, component: Purchases },
  {
    path: "/watcheditlater",
    component: WatchedItLater,
    layout: DefaultLayoutYous,
  },
  { path: "/yourvideo", component: YourVideo },
];
