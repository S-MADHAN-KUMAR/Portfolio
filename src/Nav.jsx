import React from "react";
import {
  GoHome,
  GoBriefcase,
  GoUnread,
  GoRows,
  GoPerson,
} from "react-icons/go";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <>
      <div className="nav w-full overflow-hidden mx-auto fixed bottom-4 z-50">
        <div className="navitems backdrop-blur-2xl flex justify-between sm:w-[400px] w-[300px] items-center bg-black/30 px-3 rounded-[100px] mx-auto h-[60px] z-10 ">
          <Link
            spy={true}
            smooth={true}
            activeClass="active"
            to="hero"
            className="item w-10 h-10 flex items-center justify-center cursor-pointer  hover:scale-125 z-10 "
          >
            <GoHome />
          </Link>

          <Link
            spy={true}
            smooth={true}
            activeClass="active"
            to="about"
            className="item w-10 h-10 flex items-center justify-center   cursor-pointer  hover:scale-125 z-10 "
          >
            <GoPerson />
          </Link>

          <Link
            spy={true}
            smooth={true}
            activeClass="active"
            to="project"
            className="item w-10 h-10 flex items-center justify-center  cursor-pointer  hover:scale-125 z-10 "
          >
            <GoBriefcase />
          </Link>

          <Link
            spy={true}
            smooth={true}
            activeClass="active"
            to="skill"
            className="item w-10 h-10 flex items-center justify-center cursor-pointer  hover:scale-125 z-10 "
          >
            <GoRows />
          </Link>

          <Link
            spy={true}
            smooth={true}
            activeClass="active"
            to="contact"
            className="item w-10 h-10 flex items-center justify-center cursor-pointer  hover:scale-125 z-10 "
          >
            <GoUnread />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
