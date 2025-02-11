import React from "react";

const ProjectCard = ({Data }) => {
  return (
    <>
      <div className=" backdrop-blur-6 shadow-2xl  shadow-black text-white/95 p-4 rounded-xl w-[300px] sm:w-[350px] sm:h-[580px]  border-2 border-solid [border-image:linear-gradient(to_right,_darkblue,blue,#86198f)_1] hover:-translate-y-3 bg-black/60">
        <div className="overflow-hidden  ">
          <img
            src={Data.image}
            className="object-contain hover:scale-150 transition-all 5s "
          />
        </div>
        <h1 className="text-gradient font-primary text-left mt-4 my-2 text-[25px] font-semibold ">
          {Data.title}
        </h1>
        <h1 className=" text-left mb-3 text-[14px] font-medium font-secondary text-white/60">
          {Data.date}
        </h1>
        <div className="flex flex-wrap w-full justify-center items-center gap-3">
          {
            Data.tags.map((tag,index)=>(
              <div className="flex flex-row justify-center items-center z-10 gap-x-3 bg-black/40 rounded-md h-fit p-1.5 w-fit " key={index}>
                <img src={tag.image} alt={tag.name} className="w-7 h-7 z-20" />
                
              </div>
            ))
          }
        </div>
        <p className="text-[15px]  text-justify text-white/50 mt-8 overflow-hidden ">
          {Data.description.slice(0,150)}...
        </p>
        <div className="flex text-white justify-between h-fit overflow-hidden my-3 mt-12">
          <a
            href={Data.github}
             target="_blank"
            className="font-semibold text-[16px] bg-sky-700 hover:scale-105 px-3 py-1 rounded-md m-2 "
          >
            Github
          </a>
          <a
            href={Data.webapp}
             target="_blank"
            className="font-semibold  text-[16px] bg-fuchsia-700 hover:scale-105  px-3 py-1 rounded-md m-2  "
          >
            Webapp
          </a>
        </div>
        
      </div>
    </>
  );
};

export default ProjectCard;
