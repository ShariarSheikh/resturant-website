"use client";

import NavigationFooter from "@/components/NavigationFooter";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import blogData from "../../utils/blogData";

export default function Blog() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <section className="w-full flex flex-col lg:flex-row h-full min-h-screen overflow-hidden">
        <div
          style={{
            background: `url(https://images.unsplash.com/photo-1618616058461-9b827bc808e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-full lg:w-[50%] p-12 flex flex-col justify-between items-center min-h-screen h-full"
        >
          <Link href="/" className="font-semibold cursor-pointer">
            Hukka Bukka
          </Link>
          <div className="text-center">
            <h2 className="text-[#FACE8D] font-dancing text-[80px] leading-none">
              Blog
            </h2>
            <h1 className="font-medium text-[80px] leading-none">
              Latest News
            </h1>
          </div>

          <NavigationFooter />
        </div>

        <div className="w-full lg:w-[50%] pt-[96px] h-screen overflow-hidden overflow-y-scroll">
          <div className="w-full flex flex-col items-center">
            {blogData.map((value) => (
              <Link href={`/blog/${value.id}`} key={value.id}>
                <div className="lg:h-[220px] w-full h-[367px] max-w-[680px] flex flex-col lg:flex-row mb-[48px] cursor-pointer border border-transparent hover:border-stone-400 rounded-[10px] py-[6px]">
                  <div className="min-w-[280px] min-h-[160px] lg:min-h-[210px] relative flex justify-center items-center">
                    <Image
                      src={value.img}
                      alt="card"
                      layout="fill"
                      className="z-10 rounded-[10px]"
                      objectFit="cover"
                    />
                  </div>
                  <div className="h-full px-[32px] py-[32px]">
                    <h3 className="text-[#FACE8D] text-[16px]">{value.time}</h3>
                    <h1 className="text-[24px]">{value.title}</h1>
                    <p className="text-[18px] text-white text-opacity-50 mt-[8px]">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="px-[50px]">
            <Footer />
          </div>
        </div>
      </section>
    </main>
  );
}
