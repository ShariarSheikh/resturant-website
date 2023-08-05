import React from "react";
import menuData from "./menuData";
import Image from "next/image";
import Link from "next/link";

const Feed = () => {
  return (
    <div className="mt-[80px] max-w-[628px] w-full overflow-hidden overflow-y-scroll">
      <div className="w-full px-[10px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none">
          Starters
        </h1>
        {menuData.starters.map((item) => (
          <div
            key={item.id}
            className="flex w-full mt-[12px] pt-[32px] cursor-pointer hover:scale-95 duration-150"
          >
            <Image
              width={90}
              height={72}
              src={item.pictureUrl}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">$29</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none">
          Breakfast
        </h1>
        {menuData.breakfast.map((item) => (
          <div
            key={item.id}
            className="flex w-full mt-[12px] pt-[32px] cursor-pointer hover:scale-95 duration-150"
          >
            <Image
              width={90}
              height={72}
              src={item.pictureUrl}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">$29</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none">
          Dinner
        </h1>
        {menuData.dinner.map((item) => (
          <div
            key={item.id}
            className="flex w-full mt-[12px] pt-[32px] cursor-pointer hover:scale-95 duration-150"
          >
            <Image
              width={90}
              height={72}
              src={item.pictureUrl}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">$29</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none">
          Drinks
        </h1>
        {menuData.drinks.map((item) => (
          <div
            key={item.id}
            className="flex w-full mt-[12px] pt-[32px] cursor-pointer hover:scale-95 duration-150"
          >
            <Image
              width={90}
              height={72}
              src={item.pictureUrl}
              alt={item.name}
              className="rounded-[10px]"
            />
            <div className="ml-[24px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[20px]">{item.name}</h1>
                <p className="text-white text-opacity-90">$29</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-between px-[10px] mt-[96px] mb-[80px]">
        <div className="w-full max-w-[162px]">
          <Link href="/" className="font-semibold cursor-pointer">
            Hukka Bukka
          </Link>
          <p className="mt-[32px] text-white text-opacity-50">
            Created by Shariar Sheikh,{" "}
            <Link
              href="https://shariar.vercel.app/"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Website
            </Link>
          </p>
        </div>

        <div className="w-full max-w-[162px]">
          <h1 className="text-[18px] font-light">Pages</h1>
          <ul className="mt-[32px]">
            <li className="mb-[16px] text-[16px] text-white text-opacity-50 cursor-pointer">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="mb-[16px] text-[16px] text-white text-opacity-50 cursor-pointer">
              <Link href="/restaurant">Restaurant</Link>
            </li>
            <li className="mb-[16px] text-[16px] text-white text-opacity-50 cursor-pointer">
              <Link href="/classes">Classes</Link>
            </li>
            <li className="mb-[16px] text-[16px] text-white text-opacity-50 cursor-pointer">
              <Link href="/book-a-table">Book a Table</Link>
            </li>
            <li className="mb-[16px] text-[16px] text-white text-opacity-50 cursor-pointer">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="mb-[16px] text-[16px] text-white text-opacity-50 cursor-pointer">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="mb-[16px] text-[16px] text-white text-opacity-50 cursor-pointer">
              <Link href="/shop">Shop</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Feed;
