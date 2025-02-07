import React from "react";
import { Otherskills, skills } from "../public/constants"
import SkillCard from "./Components/SkillCard"
import {motion} from 'framer-motion'
import {fadeIn} from './variants'


const Skill = () => {
  return (
    <>
      <div class="section bg-black/70  z-10 " id="skill">
        <div className="w-full z-1 ">
          <motion.h1  
          variants={fadeIn('down',0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:true, amount:0.7}}
          className="w-full text-[35px] font-semibold font-primary text-center mb-16  flex justify-center items-center ">
            SKILLS
          </motion.h1>

          <div className=" flex flex-col md:flex-row gap-20 mx-auto  ">
            <motion.div 
            variants={fadeIn('right',0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:true, amount:0.7}}
            className="w-full  flex justify-center items-start border-2 [border-image:linear-gradient(to_right,_darkblue,blue,#86198f)_1]">
              <div className=" flex flex-wrap justify-center items-center gap-5 w-full p-6 ">
                {skills.map((item) => (
                  <SkillCard Img={item.image} Name={item.name} />
                ))}
              </div>
            </motion.div>

            <motion.div
            variants={fadeIn('left',0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once:true, amount:0.7}}
            className="w-full flex justify-center items-start border-2 [border-image:linear-gradient(to_right,_darkblue,blue,#86198f)_1] ">
              <div className=" flex flex-wrap justify-center items-center gap-5 w-full p-6">
                {Otherskills.map((item) => (
                  <SkillCard Img={item.image} Name={item.name} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill
