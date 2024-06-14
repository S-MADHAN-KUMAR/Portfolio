import React, { useState } from "react";
import { projects } from "../public/constants";
import ProjectCard from "./Components/ProjectCard";
import {motion} from 'framer-motion';
import {fadeIn} from './variants';

const Project = () => {
  return (
    <>
      <div className="section  " id="project">
        <div className="w-full mx-auto">
          <motion.h1
          variants={fadeIn('up',0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:true, amount:0.7}}
          className="pt-5 text-[40px] text-gradient font-primary  text-center mb-8 flex justify-center items-center ">
            PROJECTS
          </motion.h1>
          <motion.p
          variants={fadeIn('right',0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:true, amount:0.7}}
          className="mb-20 text-center text-2xl font-semibold font-secondary ">
            
As a beginner, I have developed basic projects to enhance my self-learning.
          </motion.p>
          <motion.div
          variants={fadeIn('up',0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:true, amount:0.2}}
          className="mx-auto grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-20 ">
            {projects.map((item, key) => (
              <ProjectCard
               Data={item}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Project;
