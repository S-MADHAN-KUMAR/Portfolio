import React from "react";

const Header = () => {
  return (
    <>
      <div className="Header w-full flow-row flex justify-between items-center sm:px-8 px-2 py-2">
        <div className="logo text-gradient sm:text-[30px] text-[20px] hover:scale-110 ">
          E PORTFOLIO
        </div>

        <a
          href="https://github.com/MADHAN-KUMAR-161?tab=repositories"
          target="_blank"
        >
          <div className="github-btn py-1 btn">Git Hub</div>
        </a>
      </div>
    </>
  );
};

export default Header;
