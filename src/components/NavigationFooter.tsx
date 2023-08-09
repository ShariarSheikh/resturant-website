import Link from "next/link";
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { BsThreeDotsVertical } from "react-icons/bs";

const NavigationFooter: React.FC = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);

  return (
    <div className="w-full max-w-[520px] h-[68px] relative">
      <div className="w-full max-w-[520px] h-[68px] rounded-[100px] bg-white mt-[22px] text-black">
        <ul className="w-full h-full flex items-center justify-between md:justify-normal p-[10px]">
          <li>
            <button
              onClick={() => setIsMenu(true)}
              className="h-[48px] w-[48px] rounded-[50%] flex items-center justify-center bg-slate-300 duration-150 active:scale-95 group overflow-hidden"
            >
              <span className="group-hover:animate-bounce">
                <BsThreeDotsVertical />
              </span>
            </button>
          </li>
          <li className="hidden sm:block">
            <Link
              href="menu"
              className="h-[48px] cursor-pointer rounded-[100px] flex items-center justify-center p-[16px] ml-[14px] hover:bg-gray-100"
            >
              Menu
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link
              href="restaurant"
              className="h-[48px] cursor-pointer rounded-[100px] flex items-center justify-center p-[16px] ml-[14px] hover:bg-gray-100"
            >
              Restaurant
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link
              href="classes"
              className="h-[48px] cursor-pointer rounded-[100px] flex items-center justify-center p-[16px] ml-[14px] hover:bg-gray-100"
            >
              Classes
            </Link>
          </li>
          <li className="">
            <Link
              href="book-a-table"
              className="h-[48px] font-medium text-[14px] cursor-pointer rounded-[100px] flex items-center justify-center p-[16px] ml-[14px] text-white bg-black uppercase"
            >
              Book A Table
            </Link>
          </li>
        </ul>
      </div>

      <OutsideClickHandler
        onOutsideClick={() => {
          setIsMenu(false);
        }}
      >
        <div
          style={{
            left: isMenu ? "3%" : "14px",
            width: isMenu ? "96%" : "0px",
          }}
          className={`
          ${isMenu ? "h-[384px] md:h-[240px]" : "h-0"}
          ${isMenu ? "-top-[384px] md:-top-[240px]" : "top-[15px]"}
          absolute bg-white text-black shadow-md duration-200 rounded-[10px] overflow-hidden`}
        >
          <ul>
            <li className="mb-[16px] block md:hidden">
              <Link href="/menu">
                <div className="text-[32px] hover:text-gray-600 h-[48px] px-[10px] border-b border-transparent hover:border-gray-300">
                  Menu
                </div>
              </Link>
            </li>

            <li className="mb-[16px] block md:hidden">
              <Link href="/restaurant">
                <div className="text-[32px] hover:text-gray-600 h-[48px] px-[10px] border-b border-transparent hover:border-gray-300">
                  Restaurant
                </div>
              </Link>
            </li>

            <li className="mb-[16px] block md:hidden">
              <Link href="/classes">
                <div className="text-[32px] hover:text-gray-600 h-[48px] px-[10px] border-b border-transparent hover:border-gray-300">
                  Classes
                </div>
              </Link>
            </li>

            <li className="mb-[16px]">
              <Link href="/shop">
                <div className="text-[32px] hover:text-gray-600 h-[48px] px-[10px] border-b border-transparent hover:border-gray-300">
                  Shop
                </div>
              </Link>
            </li>
            <li className="mb-[16px]">
              <Link href="/workshop">
                <div className="text-[32px] hover:text-gray-600 h-[48px] px-[10px] border-b border-transparent hover:border-gray-300">
                  Workshop
                </div>
              </Link>
            </li>
            <li className="mb-[16px]">
              <Link href="/blog">
                <div className="text-[32px] hover:text-gray-600 h-[48px] px-[10px] border-b border-transparent hover:border-gray-300">
                  Blog
                </div>
              </Link>
            </li>
            <li className="mb-[16px]">
              <Link href="/contact">
                <div className="text-[32px] hover:text-gray-600 h-[48px] px-[10px] border-b border-transparent hover:border-gray-300">
                  Contact
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default NavigationFooter;
