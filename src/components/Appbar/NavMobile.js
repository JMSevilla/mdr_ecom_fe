import React, { useEffect, useState } from "react";
import { navbarData, socialAccounts } from "../../core/utils/helper";
import { XIcon } from "@heroicons/react/outline";
import { MenuAlt3Icon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { AppModal } from "../../components";
import SystemLogin from "../../views/Login/Login";
import logo from "../../assets/images/logo/modernresolve.png";
import { useHistory } from 'react-router-dom';
import { appRouter } from '../../routes/router';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRoot, setIsRoot] = useState(true);
  const history = useHistory();
  // framer motion variants
  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };
  const navigateToViewAll = () => {
    history.push(appRouter.Shop.path);
  }
  useEffect(()=>{
    if (!(window.location.href === "http://localhost:3000/#/")
     ) {
      setIsRoot(false);
    }
  }, [])
  const toTest = (Link, isRoot)=>{
    if(isRoot){
      return {to: Link};
    }else{
      return null;
    }
  }
  return (
    <nav className="relative">
      {/* menu icon */}
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-black"
      >
        <MenuAlt3Icon className="w-8 h-8" />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-white fixed top-0 right-0"
      ></motion.div>

      {/* menu */}
      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        {/* close icon */}
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-8 right-8"
        >
          <XIcon className="w-8 h-8" />
        </div>
        {/* profile image */}
        <img
          src={logo}
          className="h-[100px] w-[100px] rounded-full mb-8 lg:hidden"
          alt=""
        />
        {/* mapping navigation data */}
        {navbarData.map((item, index) => {
          return (
            <li key={index} className="mb-8">
              <Link
                onClick={() =>{ 
                  setIsOpen(false)
                    if (item.link === 'Shop') {
                      navigateToViewAll();
                    }
                    if (!isRoot) {
                      history.push(appRouter.Homepage.path);
                    }
                  }
                }
                {...toTest(item.to, isRoot)}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-xl font-body cursor-pointer text-black capitalize hover:text-accent"
              >
                {item.link}
              </Link>
            </li>
          );
        })}
        <ul className="flex space-x-6">
          {socialAccounts.map((item, index) => {
            return (
              <li
                className="flex justify-center items-center text-black hover:text-accent-hover"
                key={index}
              >
                <a
                  className="text-xl"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.icon}
                </a>
              </li>
            );
          })}
        </ul>

        <AppModal
          buttonName={"SIGN IN"}
          buttonColor={"button-black"}
          title={"ACCOUNT LOGIN"}
          description={<SystemLogin />}
          onClick={() => setIsOpen(false)}
          buttonStyle={{
            fontSize: "15px",
            marginTop: "25px",
            padding: "10px 25px",
            borderRadius: "30px",
            fontWeight: 600,
          }}
          logo
        />
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
