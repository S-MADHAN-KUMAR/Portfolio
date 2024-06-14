import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className=" bg-black/70 flex flex-col justify-center items-center">
        <div className="w-full h-full mx-auto text-center mb-auto mt-10 text-white/60 font-secondary font-semibold sm:text-lg   ">
          © 2024 Madhan Kumar . All rights reserved.
        </div>

        <div className="footer h-full flex text-center flex-col lg:flex-row justify-around items-center w-full mb-20 ">
          <div className="logo  hover:scale-110 text-gradient text-4xl  h-full my-20">
            E PORTFOLIO
          </div>
          <div className="flex flex-wrap justify-center items-center sm:flex-row gap-6 text-white/60 font-secondary font-semibold text-xl sm:text-2xl  h-full">
            <Link
              to="hero"
              smooth={true}
              className=" hover:scale-110 cursor-pointer border-white/40 "
            >
              Home
            </Link>

            <Link
              to="about"
              scro
              smooth={true}
              className=" hover:scale-110 cursor-pointer border-white/40 "
            >
              About
            </Link>

            <Link
              to="project"
              scro
              smooth={true}
              className=" hover:scale-110 cursor-pointer  border-white/40 "
            >
              Project
            </Link>

            <Link
              to="skill"
              scro
              smooth={true}
              className=" hover:scale-110 cursor-pointer border-white/40 "
            >
              Skill
            </Link>
          </div>
          <div className="flex flex-wrap justify-center sm:flex-row sm:gap-x-10 gap-x-5  h-full  my-20 ">
            <a
              href="https://www.linkedin.com/in/madhan---kumar/"
              target="_blank"
            >
              <img
                className=" hover:scale-110"
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/linkedin.png"
                alt="linkedin"
              />
            </a>
            <a
              href="https://github.com/MADHAN-KUMAR-161?tab=repositories"
              target="_blank"
       
            >
              <img
                className=" hover:scale-110"
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/github.png"
                alt="github"
              />
            </a>
            <a
              href="mailto:s.madhankumar161@gmail.com"
              target="_blank"
       
            >
              <img
                className=" hover:scale-110"
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/gmail.png"
                alt="gmail"
              />
            </a>
            <a
              href="https://wa.me/918610488281?text=Hi"
              target="_blank"
            >
              <img
                className=" hover:scale-110"
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/whatsapp.png"
                alt="whatsapp"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
