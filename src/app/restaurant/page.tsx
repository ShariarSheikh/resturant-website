"use client";

import NavigationFooter from "@/components/NavigationFooter";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

export default function Restaurant() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <section className="!fixed inset-0 min-h-screen w-full bg-transparent flex flex-col items-center justify-between p-12 z-[20]">
        <Link href="/" className="font-semibold cursor-pointer">
          Hukka Bukka
        </Link>

        <div className="flex flex-col items-center">
          <h2 className="text-[#FACE8D] font-dancing text-[80px] leading-none">
            The pure taste of
          </h2>
          <h1 className="font-medium text-[160px] leading-none">Bangladesh</h1>
          <p className="text-[23px] mt-[20px] max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <div className="w-full flex-col justify-center max-w-[650px]">
            <NavigationFooter />
          </div>
        </div>
      </section>

      <div className="slider">
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
      </div>
    </main>
  );
}
