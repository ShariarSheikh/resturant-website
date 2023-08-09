import NavigationFooter from "@/components/NavigationFooter";
import Link from "next/link";
import moment from "moment";
import { FC, useEffect, useState } from "react";
import bookATableImg from "../../assets/book-a-table.jpg";

const BookATableSection: FC = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    setCurrentDate(moment().format("YYYY-MM-DD"));
  }, []);

  setInterval(() => {
    setCurrentTime(moment().format("HH:mm"));
  }, 1000);

  return (
    <section className="w-full flex flex-col lg:flex-row h-full min-h-screen">
      <div
        style={{
          background: `url(${bookATableImg.src})`,
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
            Check Out
          </h2>
          <h1 className="font-medium text-[80px] leading-none">Our Menus</h1>
        </div>

        <NavigationFooter />
      </div>

      <div className="w-full lg:w-[50%] flex flex-col justify-center h-auto lg:px-0 px-4 lg:py-0 py-6">
        <div className="max-w-[560px] h-auto mx-auto w-full">
          <h2 className="text-[40px] font-medium">Book a table</h2>
          <p className="text-white text-opacity-50 text-[20px] mt-[16px]">
            Our dining atmosphere is casual and comfortable. To reflect this
            environment, we maintain a formal dress.
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
              Number of guests
            </h3>
            <input
              type="number"
              min={0}
              onChange={(event) => {}}
              className="h-[60px] bg-black mt-[16px] w-full px-[24px] py-[15px] border border-[#FFFFFF] border-opacity-50 rounded-[10px]"
              value={0}
            />
            <div className="mt-[48px] flex justify-between">
              <div className="w-full max-w-[40%]">
                <h3 className="text-white text-opacity-50 text-[16px]">Date</h3>
                <input
                  type="date"
                  value={currentDate}
                  className="h-[60px] bg-black mt-[16px] w-full px-[24px] py-[15px] border border-[#FFFFFF] border-opacity-50 rounded-[10px]"
                />
              </div>
              <div className="w-full max-w-[40%]">
                <h3 className="text-white text-opacity-50 text-[16px]">Date</h3>
                <input
                  type="time"
                  value={currentTime}
                  className="h-[60px] bg-black mt-[16px] w-full px-[24px] py-[15px] border border-[#FFFFFF] border-opacity-50 rounded-[10px]"
                />
              </div>
            </div>
            <button className="bg-[#F8D49E] active:scale-95 hover:bg-[#f4ca8a] duration-150 mt-[48px] w-full text-black text-[16px] uppercase flex items-center justify-center rounded-[500px] h-[60px]">
              Book A Table
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookATableSection;
