import React from "react";
import { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { menu, close } from "../assets";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isOpen = () => {
    if (open) {
      setOpen(false);
      document.body.classList.remove("overflow-hidden");
    } else {
      setOpen(true);
      document.body.classList.add("overflow-hidden");
    }
  };

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 1.2,
      },
    },
  };
  return (
    <>
      <header className="flex flex-1 justify-end items-center fixed top-0 z-20 w-full h-[58px]">
        <div onClick={isOpen} className="w-[58px] h-[58px] mt-4 cursor-pointer">
          <img src={menu} className="w-[30px] h-[30px]" />
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <div className="fixed top-0 left-0 w-screen h-screen z-50 darkblue-cyan-gradient">
            <motion.div
              variants={item}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100vh", opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit="exit"
              className="flex-col inline-flex justify-center items-center absolute w-full h-full text-white"
            >
              <div
                onClick={isOpen}
                className="flex flex-end justify-center items-center w-[58px] h-[58px] rounded-full absolute top-[20px] right-[20px] z-20
          cursor-pointer text-[18px]"
              >
                <img src={close} alt="close" className="w-[30px] h-[30px]" />
              </div>
              {navLinks.map((link, index) => (
                <motion.div
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index === 0 ? 1 : 0.8 / index }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: index === 0 ? 1 : 1 / index,
                    },
                  }}
                >
                  <div className="no-underline font-['Poppins'] h-[80px] sm:h-[100px] overflow-hidden text-[60px] sm:text-[80px] font-bold mt-10 uppercase cursor-pointer">
                    <Link
                      to={`${link.id}`}
                      onClick={isOpen}
                      key={link.id}
                      spy={true}
                      offset={-100}
                      duration={500}
                    >
                      {link.title}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
