import { MouseEventHandler } from "react";
import {
  IconDefinition,
  faChartBar,
  faEllipsis,
  faGear,
  faHome,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

//? navigation links....
type NavLinkData = {
  label: string;
  to: string;
};
export const navLinks: NavLinkData[] = [
  { label: "Dashboard", to: "/" },
  { label: "Pools", to: "/pools" },
  { label: "Tokens", to: "/tokens" },
  { label: "Market", to: "/market" },
  { label: "NFT", to: "/nft" },
];

interface DashboardIcons {
  icon: IconDefinition;
  func: MouseEventHandler;
}
export interface CryptoData {
  name: string;
  image: string;
  marketCap: string;
}
export const dashboardIcons: DashboardIcons[] = [
  {
    icon: faHome,
    func: () => {},
  },
  {
    icon: faChartBar,
    func: () => {},
  },
  {
    icon: faPerson,
    func: () => {},
  },
  {
    icon: faGear,
    func: () => {},
  },

  {
    icon: faEllipsis,
    func: () => {},
  },
];
