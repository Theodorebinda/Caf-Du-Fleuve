import Typewriter from "../TypeWrither";
import React from "react";

function HiroSection() {
  return (
    <div className="bg-fixed md:bg-scroll  bg-[url('./images/header.png')] bg-no-repeat pt-[100px] md:pt-20 w-full relative  md:h-screen">
      <div className="">
        <div className="flex flex-col md:w-1/2  md:gap-20 md:m-8 mx-4 max-h-full">
          <h1 className="text-4xl md:text-4xl font-bold font-[Italianno] text-[#588b00] animate-pulse">
            Café Du Fleuve
          </h1>
          <div className="flex flex-col justify-center md:items-center md:gap-6  md:w-full ">
            <span className=" h-[360px] md:h-60 mb-4 ">
              <Typewriter
                text={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere totam, itaque atque assumenda earum reprehenderit molestias odio. Adipisci vitae sapiente explicabo maxime neque, dolore molestiae expedita velit, at pariatur veniam voluptates vel natus rem quidem nam et. Praesentium  "
                }
                speed={100}
                deleteDelay={1000}
              />
            </span>
            <button className="w-1/2 md:w-1/4 border py-3 px-5 rounded-lg  bg-[#588b00] text-[#140100] font-semibold hover:bg-[#140100] hover:text-[#588b00] ">
              Commander
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HiroSection;
