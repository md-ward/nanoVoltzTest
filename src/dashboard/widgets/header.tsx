import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import MobileSideBar from "./mobile_sidebar";

type NavLink = {
  label: string;
  to: string;
};

const Header: React.FC = () => {
  const navLinks: NavLink[] = [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Pools", to: "/pools" },
    { label: "Tokens", to: "/tokens" },
    { label: "Market", to: "/market" },
    { label: "NFT", to: "/nft" },
  ];

  const location = useLocation();
  console.log(location.pathname);

  return (
    <header className="flex h-fit w-full flex-row items-center justify-between px-6 py-4">
      {/* left side: nav link with site icon */}
      <div className="flex items-center justify-center gap-x-14">
        {/* site logo with animation : slide in from left to right with opacity change */}
        <motion.img
          key={"image1"}
          src="/assets/logo.png"
          alt="site logo"
          className=" w-32 md:block lg:w-40"
          initial={{ opacity: 0, x: -20, scale: 0 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "circInOut" }}
        />

        {/* main navigation bar with stagger animation : added 0.6s delay to show the animation after the logo animation finish and added index*0.1s to do stagger effect */}
        <nav className=" hidden flex-auto md:flex">
          <ul className="relative flex w-full gap-5">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="group relative font-semibold"
              >
                <NavLink to={link.to}>{link.label}</NavLink>
                {/* underline animated on hover moved to link */}
                {location.pathname === link.to ? (
                  <motion.span
                    key={link.to}
                    className="absolute -bottom-2 left-0 z-30 h-0.5 bg-red-500 hover:w-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  ></motion.span>
                ) : (
                  <span className="absolute -bottom-2 left-0 z-30 h-0.5 w-0 bg-black duration-200 ease-in-out hover:w-full group-hover:w-full"></span>
                )}
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Right side of nav section: search bar, image, button with arrow icon */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 + navLinks.length * 0.1, duration: 0.5 }}
        className="flex flex-row items-center gap-4"
      >
        <label className="hidden   h-1/2 w-full flex-row items-center justify-center gap-x-2 rounded-3xl bg-white px-3 md:flex">
          <FontAwesomeIcon icon={faSearch} className="px-1" />
          <input
            type="search"
            name="search"
            id="search"
            autoComplete="off"
            placeholder="search pools or tokens"
            className="rounded-md p-1 outline-none"
          />
        </label>
        <img
          src="/assets/profile_image.jpg"
          alt="profile image"
          className="hidden aspect-square size-12 rounded-full object-cover transition-transform duration-200 ease-in-out hover:scale-95 hover:cursor-pointer md:block"
        />

        <MobileSideBar links={navLinks}></MobileSideBar>
      </motion.div>
    </header>
  );
};

export default Header;
