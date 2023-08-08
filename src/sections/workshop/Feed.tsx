import React from "react";
import menuData from "./menuData";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Feed = () => {
  return (
    <div className="mt-[80px] max-w-[628px] w-full overflow-hidden overflow-y-scroll">
      <p className="text-[16px] text-white text-opacity-50">Cooking Class</p>
      <h1 className="mt-[8px] text-[40px]">Reserve Your Spot</h1>
      <p className="text-[16px] text-white text-opacity-50 mt-[16px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Porttitor massa id
        neque aliquam.
      </p>

      <div className="flex items-center mt-[32px] mb-[80px]">
        <button className="h-[60px] rounded-[50px] w-[181px] bg-[#F8D49E] uppercase text-black active:scale-95 duration-150">
          Book A Spot
        </button>
        <p className="ml-[32px] text-[24px]">89€</p>
      </div>
      <div className="w-full px-[10px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none">
          Details
        </h1>

        <ul className="mt-[32px]">
          <li className="flex items-center justify-between h-[80px] border-b border-[#171717]">
            <h4 className="text-[20px] font-medium">Date</h4>
            <p className="text-[18px] text-white text-opacity-50">
              June 16, 2023 8:00 PM
            </p>
          </li>
          <li className="flex items-center justify-between h-[80px] border-b border-[#171717]">
            <h4 className="text-[20px] font-medium">Teacher</h4>
            <div className="flex items-center">
              <Image
                src={
                  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                }
                alt="teacher"
                width={40}
                height={40}
                className="overflow-hidden h-[40px] w-[40px] rounded-full object-cover"
              />
              <p className="text-[18px] text-white text-opacity-50 ml-[6px]">
                Jakob Grønberg
              </p>
            </div>
          </li>
          <li className="flex items-center justify-between h-[80px] border-b border-[#171717]">
            <h4 className="text-[20px] font-medium">Language</h4>
            <p className="text-[18px] text-white text-opacity-50">English</p>
          </li>
          <li className="flex items-center justify-between h-[80px]">
            <h4 className="text-[20px] font-medium">Location</h4>
            <p className="text-[18px] text-white text-opacity-50">
              Hukka Bukka.Bangladesh, Dhaka, Street 1234
            </p>
          </li>
        </ul>
      </div>

      <div className="w-full px-[10px] mt-[96px]">
        <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px]">
          Menu
        </h1>
        {menuData.breakfast.slice(0, 2).map((item) => (
          <div
            style={{
              borderRadius: 10,
            }}
            key={item.id}
            className="flex w-full mt-[16px] cursor-pointer hover:scale-95 duration-150"
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
                <p className="text-white text-opacity-90">{item.price}</p>
              </div>
              <p className="text-[16px] text-white text-opacity-50">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-[#FACE8D] font-dancing text-[64px] leading-none mb-[32px] mt-[80px]">
        Teacher
      </h1>
      <div className="flex items-center mt-[32px] w-full">
        <div className="min-w-[80px] min-h-[80px] overflow-hidden relative bg-green-500 rounded-full">
          <Image
            src="https://avatars.githubusercontent.com/u/69359203?s=400&u=6634c87609e503bdc6b0ceb5b5b26f02ab99808f&v=4"
            alt="teacher"
            width={80}
            height={80}
            className="min-w-[80px] w-full min-h-[80px] max-h-[80px] object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col ml-[32px]">
          <h1 className="text-[24px]">Shariar Sheikh</h1>
          <p className="text-[16px] mt-[4px] text-white text-opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            neque quis consequuntur odio sed placeat illo tempore harum, est
            nesciunt.
          </p>
          <div className="flex items-center mt-[20px] space-x-4">
            <Link
              className="hover:animate-bounce"
              target="_blank"
              href={"https://github.com/ShariarSheikh"}
            >
              <BsGithub />
            </Link>
            <Link
              className="hover:animate-bounce"
              target="_blank"
              href={"https://www.linkedin.com/in/sheikhshariar/"}
            >
              <BsLinkedin />
            </Link>
            <Link
              className="hover:animate-bounce"
              target="_blank"
              href={"https://www.facebook.com/profile.php?id=100053248808536"}
            >
              <BsFacebook />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Feed;
