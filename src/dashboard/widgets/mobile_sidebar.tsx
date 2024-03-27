import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

//! Variants for the individual items in the sidebar
const itemVariants = {
  closed: {
    opacity: 0,
    y: -20,
  },
  open: {
    opacity: 1,
    y: 0,
  },
};

// Variants for the sidebar container
const sideVariants = {
  closed: {
    transition: {
      delay: 0.4,
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const MobileSideBar = ({ links }: { links: Array<Record<string, string>> }) => {
  const [open, cycleOpen] = useCycle(false, true); // State for toggling the sidebar
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // State for checking if the window size is mobile

  // Effect for handling window resize and updating the isMobile state
  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (!isMobile && open) {
        cycleOpen();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [cycleOpen, isMobile, open]);

  // Effect for closing the sidebar if the window size changes from mobile to desktop
  useLayoutEffect(() => {
    if (!isMobile && open) {
      cycleOpen();
    }
  }, [cycleOpen, isMobile, open]);

  return (
    <main className="relative">
      {/* Button for toggling the sidebar */}
      <button
        onClick={() => cycleOpen()}
        className="right-4 top-4 z-50 m-auto block aspect-square size-8 rounded-lg bg-red-200 p-1 backdrop-blur-2xl transition-colors duration-300 ease-in-out hover:bg-red-300 md:hidden"
      >
        <FontAwesomeIcon icon={faBars} rotate={open ? "0deg" : "90deg"} />
      </button>
      {/* used Animated presence to enable the animation when React.Node element demount from dom tree ... */}
      <AnimatePresence>
        {/* Sidebar */}
        {open && (
          <motion.aside
            className="absolute right-[4rem] top-0  w-full rounded-md bg-red-300 p-4"
            initial={{ width: 0 }}
            animate={{
              width: "200px",
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
          >
            <motion.ul
              className="container flex flex-col gap-y-2 divide-y divide-white"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {/* Sidebar items */}
              {links.map(({ label, to, index }) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col"
                >
                  <Link to={to}>{label}</Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </main>
  );
};

export default MobileSideBar;
