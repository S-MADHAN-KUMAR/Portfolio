import React from "react";
import { TypeAnimation } from "react-type-animation";
import {motion} from 'framer-motion';
import {fadeIn} from './variants';

const Hero = () => {
  return (
    <div className="section" id="hero">
      <div className="w-full mx-auto">
        <div className="hero-container flex flex-col md:flex-row text-center md:text-start justify-center gap-x-24 lg:mx-20 items-center w-fit h-fit ">
          <div className="left ">
            <motion.h1 
            variants={fadeIn('right',0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className=" text-[50px] font-semibold mb-3  ">HI !..</motion.h1>
            <motion.div
             variants={fadeIn('right',0.4)}
             initial="hidden"
             whileInView={'show'}
             viewport={{ once: true, amount: 0.7 }}
            className=" font-tertiary font-bold text-[35px] mb-4 ">
              <span>IM </span>
              <TypeAnimation
                sequence={["FRONTEND DEVELOPER", 2000, "FRESHER", 2000]}
                speed={50}
                repeat={Infinity}
                className="text-purple-600 font-tertiary font-bold text-[35px]"
              />
            </motion.div>
            <motion.h1 
            variants={fadeIn('right',0.5)}
            initial="hidden"
            whileInView={'show'}

            viewport={{ once: true, amount: 0.7 }}
            className=" text-4xl sm:text-5xl h-fit mb-10 text-gradient">
              MADHAN KUMAR{" "}
            </motion.h1>
            <motion.p
            variants={fadeIn('right',0.6)}
            initial="hidden"
            whileInView={'show'}

            viewport={{ once: true, amount: 0.7 }}
            className=" font-secondary font-medium text-[25px] mb-5 text-white/70 ">
            As a fresh and passionate web developer, I bring a strong foundation in <span className="text-red-600 font-semibold text-3xl ">HTML, CSS, and JavaScript, with a keen interest in React.js.</span>  Eager to contribute to innovative web projects and continually expand my skill set to create dynamic & user-friendly.
            </motion.p>
            <motion.div
            variants={fadeIn('right',0.7)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.7 }}
            className="flex flex-row gap-x-5 mt-8 md:justify-start justify-center">
              <a
                href="https://www.linkedin.com/in/madhan---kumar/"
                target="_blank"
              >
                <img
                  className="hover:scale-110 cursor-pointer"
                  width="70"
                  height="70"
                  src="https://img.icons8.com/3d-fluency/94/linkedin.png"
                  alt="linkedin"
                />
              </a>
              <a
                href="https://github.com/MADHAN-KUMAR-161?tab=repositories"
                target="_blank"
              >
                <img
                  className="hover:scale-110 cursor-pointer"
                  width="70"
                  height="70"
                  src="https://img.icons8.com/3d-fluency/94/github.png"
                  alt="github"
                />
              </a>
              <a href="mailto:s.madhankumar161@gmail.com" target="_blank">
                <img
                  className="hover:scale-110 cursor-pointer"
                  width="70"
                  height="70"
                  src="https://img.icons8.com/3d-fluency/94/gmail.png"
                  alt="gmail"
                />
              </a>
            </motion.div>
          </div>
          <motion.div
          variants={fadeIn('up',0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.7 }}
          className="right hidden md:flex">
            <div className=" w-[300px] h-fit ">
              <img
                src="../public/assets/hero.png"
                alt="image"
                className="object-contain w-full h-full "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
