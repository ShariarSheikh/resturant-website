import NavigationFooter from "@/components/NavigationFooter";
import Link from "next/link";
import { FC } from "react";
import data from "./data";
import Image from "next/image";
import Footer from "@/components/Footer";

const ShopSection: FC = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row h-full min-h-screen overflow-hidden">
      <div
        style={{
          background: `url(https://images.unsplash.com/photo-1526361547623-9dd08c979bb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80)`,
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
            Shop
          </h2>
          <h1 className="font-medium text-[80px] leading-none">Give A Gift</h1>
        </div>

        <NavigationFooter />
      </div>

      <div className="w-full lg:w-[50%] pt-[96px] h-screen overflow-hidden overflow-y-scroll">
        <div className="w-full flex flex-col items-center px-4">
          {data.map((value) => (
            <div
              key={value.id}
              className="h-[220px] w-full max-w-[680px] min-h-[464px] lg:min-h-[100%] flex flex-col lg:flex-row mb-[48px] cursor-pointer border border-transparent hover:border-stone-400 rounded-[10px] py-[6px]"
            >
              <div className="lg:min-w-[280px] min-h-[210px] lg:h-[210px] relative flex justify-center items-center">
                <Image
                  src={`https://images.unsplash.com/photo-1469234496837-d0101f54be3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1218&q=80`}
                  alt="card"
                  layout="fill"
                  className="z-10"
                />
                <div
                  style={{ background: `${value.logoBg}` }}
                  className="bg-red-500 z-20 w-[144px] h-[86px] rounded-[10px] flex items-center justify-center"
                >
                  <h1>Hukka Bukka</h1>
                </div>
              </div>
              <div className="h-full px-[32px] py-[32px]">
                <h3 className="text-[#FACE8D] text-[16px]">{value.price}</h3>
                <h1 className="text-[24px]">{value.title}</h1>
                <p className="text-[18px] text-white text-opacity-50 mt-[8px]">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="px-[50px]">
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
