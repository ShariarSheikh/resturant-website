"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import { Pagination } from "swiper/modules";
import NavigationFooter from "@/components/NavigationFooter";
import Link from "next/link";
import Head from "next/head";
import useWindow from "@/hooks/useWindow";

export default function Classes() {
  const { width } = useWindow();

  const mobileRow = width <= 540 ? 1 : 2;
  const row = width > 768 ? 3 : mobileRow;

  return (
    <>
      <Head>
        <title>Restaurant Hukka Bukka</title>
      </Head>

      <main className="min-h-screen relative overflow-hidden">
        <Swiper
          loop
          autoplay={{
            delay: 1000,
          }}
          slidesPerView={row}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper h-screen"
        >
          <SwiperSlide className="relative">
            <div
              className="h-screen opacity-50"
              style={{
                backgroundImage: `url(https://plus.unsplash.com/premium_photo-1663858367004-a79cbaa15d76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
            <div className="fixed inset-0 flex flex-col items-center justify-center text-center h-full min-h-screen">
              <h1 className="text-[#FACE8D] font-dancing text-[64px]">Asian</h1>
              <h3 className="text-[40px]">Delicious Breakfast</h3>
              <p className="text-[13px] text-white text-opacity-50">
                June 16, 2023
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div
              className="h-screen opacity-50"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1519996409144-56c88c9aa612?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
            <div className="fixed inset-0 flex flex-col items-center justify-center h-full min-h-screen">
              <h1 className="text-[#FACE8D] font-dancing text-[64px]">
                Breakfast
              </h1>
              <h3 className="text-[40px]">Coffee Time</h3>
              <p className="text-[13px] text-white text-opacity-50">
                June 16, 2023
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div
              className="h-screen opacity-50"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1529543544282-ea669407fca3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
            <div className="fixed inset-0 flex flex-col items-center justify-center h-full min-h-screen">
              <h1 className="text-[#FACE8D] font-dancing text-[64px]">Vegan</h1>
              <h3 className="text-[40px]">Vegan Burger</h3>
              <p className="text-[13px] text-white text-opacity-50">
                June 16, 2023
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div
              className="h-screen opacity-50"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1543826173-70651703c5a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=879&q=80)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
            <div className="fixed inset-0 flex flex-col items-center justify-center h-full min-h-screen">
              <h1 className="text-[#FACE8D] font-dancing text-[64px]">
                Italian
              </h1>
              <h3 className="text-[40px]">Salad Style</h3>
              <p className="text-[13px] text-white text-opacity-50">
                June 16, 2023
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div
              className="h-screen opacity-50"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
            <div className="fixed inset-0 flex flex-col items-center justify-center h-full min-h-screen">
              <h1 className="text-[#FACE8D] font-dancing text-[64px]">
                Italian
              </h1>
              <h3 className="text-[40px]">Homemade Honey</h3>
              <p className="text-[13px] text-white text-opacity-50">
                June 16, 2023
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div
              className="h-screen opacity-50"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1554502078-ef0fc409efce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1084&q=80)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
            <div className="fixed inset-0 flex flex-col items-center justify-center h-full min-h-screen">
              <h1 className="text-[#FACE8D] font-dancing text-[64px]">Asian</h1>
              <h3 className="text-[40px]">Delicious Breakfast</h3>
              <p className="text-[13px] text-white text-opacity-50">
                June 16, 2023
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="w-full max-w-[520px] min-h-screen flex flex-col justify-between items-center fixed bottom-[30px] left-[1%] py-10 z-10">
          <Link href="/" className="font-semibold cursor-pointer">
            Hukka Bukka
          </Link>
          <NavigationFooter />
        </div>
      </main>
    </>
  );
}
