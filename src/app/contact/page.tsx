"use client";

import NavigationFooter from "@/components/NavigationFooter";
import Link from "next/link";
import moment from "moment";
import { FC, useEffect, useState } from "react";
import bookATableImg from "../../assets/book-a-table.jpg";
import Head from "next/head";

export default function BookATable() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    setCurrentDate(moment().format("YYYY-MM-DD"));
  }, []);

  setInterval(() => {
    setCurrentTime(moment().format("HH:mm"));
  }, 1000);

  return (
    <>
      <Head>
        <title>Restaurant Hukka Bukka</title>
      </Head>

      <main className="min-h-screen relative overflow-hidden">
        <section className="w-full flex flex-col lg:flex-row h-full min-h-screen">
          <div
            style={{
              background: `url(https://images.unsplash.com/photo-1536822919364-de5612490f1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-full lg:w-[50%] p-12 flex flex-col justify-between items-center min-h-screen h-full"
          >
            <Link href="/" className="font-semibold cursor-pointer">
              Hukka Bukka
            </Link>
            <div className="text-center">
              <h2 className="text-[#FACE8D] font-dancing text-[80px] leading-none">
                Contact
              </h2>
              <h1 className="font-medium text-[80px] leading-none">
                Get in Touch
              </h1>
            </div>

            <NavigationFooter />
          </div>

          <div className="w-full lg:w-[50%] flex flex-col justify-center h-auto px-4 pb-4 lg:px-0 lg:pb-0">
            <div className="max-w-[560px] h-auto mx-auto w-full">
              <p className="text-white text-opacity-50 text-[20px] mt-[16px]">
                Volutpat maecenas volutpat blandit aliquam etiam erat velit
                scelerisque. Arcu non odio euismod lacinia. Tortor aliquam nulla
                facilisi cras fermentum odio eu.
              </p>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                }}
                className="mt-[48px]"
              >
                <h3 className="text-white text-opacity-50 text-[16px]">Name</h3>
                <input
                  type="text"
                  className="h-[60px] bg-black mt-[16px] w-full px-[24px] py-[15px] border border-[#FFFFFF] border-opacity-50 rounded-[10px]"
                  placeholder="Name"
                />

                <h3 className="text-white text-opacity-50 mt-[48px] text-[16px]">
                  Email
                </h3>
                <input
                  type="text"
                  className="h-[60px] bg-black mt-[16px] w-full px-[24px] py-[15px] border border-[#FFFFFF] border-opacity-50 rounded-[10px]"
                  placeholder="Email"
                />
                <h3 className="text-white text-opacity-50 mt-[48px] text-[16px]">
                  Message
                </h3>
                <textarea
                  placeholder="Message"
                  className="min-h-[120px] max-h-[200px] bg-black mt-[16px] w-full px-[24px] py-[15px] border border-[#FFFFFF] border-opacity-50 rounded-[10px]"
                />

                <button className="bg-[#F8D49E] active:scale-95 hover:bg-[#f4ca8a] duration-150 mt-[48px] w-full text-black text-[16px] uppercase flex items-center justify-center rounded-[500px] h-[60px]">
                  Book A Table
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
