import { PiTelevisionFill } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

import { FaHome } from "react-icons/fa";

import { BiSolidMoviePlay } from "react-icons/bi";
export const navigation = [
  {
    label: "Tv show",
    href: "tv",
    icon: <PiTelevisionFill />,
  },
  {
    label: "Movies",
    href: "movies",
    icon: <BiSolidMoviePlay />,
  },
];
export const MobileNavigation = [
  {
    label: "Home",
    href: "/",
    icon: <FaHome />,
  },
  ...navigation,
  {
    label: "search",
    href: "/search",
    icon: <CiSearch />,
  },
];
