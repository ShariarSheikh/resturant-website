"use client";

import ShopSection from "@/sections/shop/ShopSection";
import Head from "next/head";

export default function Shop() {
  return (
    <>
      <Head>
        <title>Restaurant Hukka Bukka</title>
      </Head>
      <main className="min-h-screen relative overflow-hidden">
        <ShopSection />
      </main>
    </>
  );
}
