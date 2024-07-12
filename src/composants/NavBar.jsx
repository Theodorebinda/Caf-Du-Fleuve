import Hamburger from "hamburger-react";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { useClickAway } from "react-use";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setIsOpen(false));

  return (
    <div
      ref={ref}
      className="flex justify-between items-center bg-[#3E6100] fixed top-0 z-20 w-full text-white"
    >
      <Link
        to={"/"}
        className="ml-4 md:ml-10 my-3 flex justify-between items-center gap-3"
      >
        <span className="font-[Italianno] text-3xl font-medium  md:block animate-pulse">
          {"Café du fleuve"}
        </span>
        <img
          className="sm:h-14 h-14 animate-bounce	"
          src="src\images\Sans titre.png"
          alt=""
        />
      </Link>

      <ul className="md:flex md:justify-between md:items-center md:gap-6 text-md mr-10 hidden">
        <li>
          <Link to={"/"}>Accueil</Link>
        </li>
        <li>
          <Link to={"/about"}>Apropos</Link>
        </li>
        <li>
          <Link to={"/product"}>Produits</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div className="lg:hidden ">
        <Hamburger toggled={isOpen} size={30} toggle={setIsOpen} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className=" fixed top-20 right-0 w-full h-[16rem] bg-[#3a5d2a] shadow-lg z-50  md:hidden"
          >
            {/* <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1 / 10,
              }}
            > */}
            <ul className="flex flex-col justify-between h-full pl-10 py-5">
              <li>Acceuil</li>
              <li>A propos</li>
              <li>Poduits</li>
              <li>Contact</li>
            </ul>
          </motion.div>
          // </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default NavBar;
