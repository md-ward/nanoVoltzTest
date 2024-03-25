import { faArrowDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

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
      <div className="flex items-center justify-center gap-x-14">
        <motion.img
          src="/assets/logo.png"
          alt="site logo"
          className="w-40 "
          initial={{ opacity: 0, y: -20, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <nav>
          <ul className="relative flex w-full flex-row gap-10">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="relative font-semibold"
              >
                <Link to={link.to}>{link.label}</Link>
                {/* under line animated on hover moved to link  */}
                {location.pathname == link.to ? (
                  <motion.span
                    className="absolute bottom-0   left-0 z-30 h-0.5 w-full  bg-black"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 0.4,
                      bounce: true,
                      ease: "easeInOut",
                    }}
                  ></motion.span>
                ) : (
                  <></>
                )}
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
      <motion.span
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row gap-4"
      >
        <span className="flex flex-row items-center justify-center gap-x-2 ">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="search"
            name="search"
            id="search"
            autoComplete="off"
            placeholder="search pools or tokens"
            className=" rounded-md p-1 outline-none focus:outline-red-600/60 "
          />
        </span>
        <img
          src="/assets/profile_image.jpg"
          alt="profile image "
          className="size-12 rounded-full object-cover transition-transform duration-200 ease-in-out hover:scale-95  hover:cursor-pointer"
        />
        <button className="m-auto aspect-square size-8 rounded-lg bg-red-200 p-1 transition-colors duration-300 ease-in-out hover:bg-red-300 ">
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </motion.span>
    </header>
  );
};

export default Header;
