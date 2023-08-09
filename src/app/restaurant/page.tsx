"use client";

import NavigationFooter from "@/components/NavigationFooter";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

export default function Restaurant() {
  return (
    <>
      <Head>
        <title>Restaurant Hukka Bukka</title>
      </Head>

      <main className="min-h-screen relative overflow-hidden">
        <section className="!fixed inset-0 min-h-screen w-full bg-transparent flex flex-col items-center justify-between p-12 z-[20]">
          <Link href="/" className="font-semibold cursor-pointer">
            Hukka Bukka
          </Link>

          <div className="w-full flex flex-col items-center">
            <h2 className="text-[#FACE8D] font-dancing text-[50px] md:text-[80px] leading-none">
              The pure taste of
            </h2>
            <h1 className="font-medium text-[55px] md:text-[120px] lg:text-[160px] leading-none">
              Bangladesh
            </h1>
            <p className="text-[20px] md:text-[23px] text-center md:text-start mt-[20px] max-w-[600px]">
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
    </>
  );
}
