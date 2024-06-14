import React from "react";

const SkillCard = ({ Img, Name }) => {
  return (
    <>
      <div className="skillCard w-fit h-fit p-2 bg-white/10 rounded-lg flex flex-grow items-center  justify-center gap-x-3 hover:scale-110 ">
        <img src={Img} alt={Name} className="object-contain w-10 h-10  " />
        <h1 className="text-[25px] text-white/90 font-secondary font-semibold">
          {Name}
        </h1>
      </div>
    </>
  );
};

export default SkillCard;
