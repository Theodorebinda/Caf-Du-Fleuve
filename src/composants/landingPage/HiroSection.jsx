import Typewriter from "../TypeWrither";
import React from "react";

function HiroSection() {
  return (
    <div className="bg-fixed md:bg-scroll  bg-[url('./images/header.png')] bg-no-repeat pt-28 md:pt-20 max-w-full  relative  h-screen">
      <div className="">
        <div className="flex flex-col md:w-1/2  md:gap-20 md:m-8 mx-4 md:max-h-full">
          <h1 className="text-4xl  font-bold font-[Italianno] text-[#588b00] animate-pulse">
            Café Du Fleuve
          </h1>
          <div className="flex flex-col justify-center gap-6 my-10 md:my-0 md:w-full ">
            <span className="lg:text-6xl text-5xl font-bold  text-[#140100]">
              Un produit congolais haut de game qui eveil vos sens
            </span>
            <span className="h-20   ">
              <Typewriter
                text={
                  "Laissez-vous bercer par les flots savoureux du Café du Fleuve"
                }
                speed={100}
                className="text-2xl "
                deleteDelay={1000}
              />
            </span>
            <button className="w-1/2 md:w-1/4 border py-3 px-5 rounded-lg  bg-[#3E6100] text-white font-semibold hover:bg-[#140100] hover:text-[#588b00] ">
              Commander
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HiroSection;
