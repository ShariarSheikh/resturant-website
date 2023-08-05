import React from "react";

const Nav = () => {
  return (
    <div className="min-h-[74px] w-full flex justify-center items-center">
      <button className="font-light text-[#FACE8D]">Starters</button>
      <button className="font-light hover:text-[#FACE8D] text-white ml-[48px]">
        Lunch
      </button>
      <button className="font-light hover:text-[#FACE8D] text-white ml-[48px]">
        Dinner
      </button>
      <button className="font-light hover:text-[#FACE8D] text-white ml-[48px]">
        Drinks
      </button>
    </div>
  );
};

export default Nav;
