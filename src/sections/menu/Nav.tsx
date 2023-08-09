import React, { FC, MutableRefObject } from "react";

//-------------------------------------------------------
interface IProps {
  startersRef: MutableRefObject<HTMLDivElement | null>;
  breakfastRef: MutableRefObject<HTMLDivElement | null>;
  dinnerRef: MutableRefObject<HTMLDivElement | null>;
  drinksRef: MutableRefObject<HTMLDivElement | null>;
  navigationHandler: (ref: MutableRefObject<HTMLDivElement | null>) => void;
}
//-------------------------------------------------------

const Nav: FC<IProps> = ({
  navigationHandler,
  startersRef,
  breakfastRef,
  dinnerRef,
  drinksRef,
}) => {
  return (
    <div className="min-h-[74px] w-full flex justify-center items-center">
      <button
        onClick={() => navigationHandler(startersRef)}
        className="font-light text-[#FACE8D]"
      >
        Starters
      </button>
      <button
        onClick={() => navigationHandler(breakfastRef)}
        className="font-light hover:text-[#FACE8D] text-white ml-[28px] md:ml-[48px]"
      >
        Breakfast
      </button>
      <button
        onClick={() => navigationHandler(dinnerRef)}
        className="font-light hover:text-[#FACE8D] text-white ml-[28px] md:ml-[48px]"
      >
        Dinner
      </button>
      <button
        onClick={() => navigationHandler(drinksRef)}
        className="font-light hover:text-[#FACE8D] text-white ml-[28px] md:ml-[48px]"
      >
        Drinks
      </button>
    </div>
  );
};

export default Nav;
