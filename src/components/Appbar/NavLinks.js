import React from "react";
import { NavHashLink as Link } from 'react-router-hash-link';
import { navbarData, shopButton } from "../../core/utils/helper";
import { AppDropdown } from "../../components";

const NavLinks = () => {
  return (
    <nav className="flex items-center">
      <ul className="flex space-x-6 capitalize text-[20px] items-center">
        {navbarData.map((item, index) => {
          return (
            <>
              {item.dropdown === false ? (
                <>
                  <li
                    className="text-black font-subtitle hover:text-accent cursor-pointer"
                    key={index}
                  >
                    <Link
                      to={`${item.to}`}
                      activeClassName="selected"
                      activeStyle={{ color: '#bd321c' }}
                      smooth
                    >
                      {item.link}
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <div>
                    <AppDropdown
                      dropdownTitle={item.link}
                      optionsArray={shopButton}
                    />
                  </div>
                </>
              )}
            </>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
