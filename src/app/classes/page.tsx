"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import React from "react";

// import required modules
import { Pagination } from "swiper/modules";

export default function Classes() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Swiper
        loop
        autoplay
        slidesPerView={3}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-screen"
      >
        <SwiperSlide className="bg-green-500">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-red-500">Slid e 2</SwiperSlide>
        <SwiperSlide className="bg-blue-500">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-white">Slide 4</SwiperSlide>
        <SwiperSlide className="bg-yellow-500">Slide 5</SwiperSlide>
        <SwiperSlide className="bg-indigo-500">Slide 6</SwiperSlide>
        <SwiperSlide className="bg-emerald-400">Slide 7</SwiperSlide>
        <SwiperSlide className="bg-teal-600">Slide 8</SwiperSlide>
        <SwiperSlide className="bg-purple-500">Slide 9</SwiperSlide>
      </Swiper>
    </main>
  );
}
