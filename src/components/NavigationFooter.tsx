import Link from "next/link";
import React from "react";
import { BiTime } from "react-icons/bi";

const NavigationFooter: React.FC = () => {
  return (
    <div className="fadeIn w-full max-w-[520px] h-[68px] rounded-[100px] bg-white mt-[22px] text-black">
      <ul className="w-full h-full flex items-center p-[10px]">
        <li>
          <BiTime />
        </li>
        <li>
          <Link
            href="menu"
            className="h-[48px] cursor-pointer rounded-[100px] flex items-center justify-center p-[16px] ml-[16px] bg-gray-100"
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            href="restaurant"
            className="h-[48px] cursor-pointer rounded-[100px] flex items-center justify-center p-[16px] ml-[16px] hover:bg-gray-100"
          >
            Restaurant
          </Link>
        </li>
        <li>
          <Link
            href="classes"
            className="h-[48px] cursor-pointer rounded-[100px] flex items-center justify-center p-[16px] ml-[16px] hover:bg-gray-100"
          >
            Classes
          </Link>
        </li>
        <li>
          <Link
            href="book-a-table"
            className="h-[48px] font-medium text-[14px] cursor-pointer rounded-[100px] flex items-center justify-center p-[16px] ml-[16px] text-white bg-black uppercase"
          >
            Book A Table
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationFooter;
