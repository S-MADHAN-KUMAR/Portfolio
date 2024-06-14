import React from "react";
import {motion} from 'framer-motion';
import {fadeIn} from './variants';

const About = () => {
  return (
    <>
      <div className="section bg-black/70 z-10" id="about">
        <div
          className="z-1 about flex-col lg:flex-row flex justify-around items-center gap-x-20
    gap-y-20 "
        >
          <motion.div
          variants={fadeIn('right',0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:true, amount:0.7}}
          className="left w-[220px] sm:w-[300px] flex-2">
            <img
              src="https://i.ibb.co/wBSjZqy/logo.jpg"
              alt="image"
              className="object-contain w-full h-full "
            />
          </motion.div>
          <div className="right flex-1 ">
            <motion.h1
            variants={fadeIn('down',0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:true, amount:0.7}}
            className=" text-[40px] text-gradient font-primary mb-10 text-center">
              ABOUT ME
            </motion.h1>
            <motion.p
            variants={fadeIn('left',0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:true, amount:0.7}}
             className="text-xl sm:text-[24px] font-secondary leading-loose tracking-wide">
              <span className="text-[30px]">HI ,</span> am a Madhankumar, a fresh and passionate web developer with a <span className="text-fuchsia-600 text-[25px] font-semibold ">strong foundation in HTML, CSS, and JavaScript, and a keen interest in React.js.</span> I'm eager to contribute to innovative web projects and continually expand my skill set to create dynamic and user-friendly websites. After completing my 12th standard,<span className="text-sky-600 text-[25px] font-semibold"> I boldly decided to drop out of college and start learning front-end development skills independently.</span> Without relying on coaching centers, I took the initiative to master these skills independently. I'm also a very hard-working employee.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
