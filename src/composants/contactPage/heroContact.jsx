import React from "react";
function HeroContact() {
  return (
    <main className="w-full pt-14 mb-10 ">
      <div className="bg-[url('/breadcrumb_bg_01.jpg')] bg-[#060608] h-[70vh] flex flex-col  justify-center items-start pl-4 gap-4 font-bold bg-no-repeat bg-center  bg-cover text-white">
        <h1 className="  text-6xl">Nous Contactez</h1>
        <span>Nous vous repondons 24 / 7</span>
      </div>
      <img
        className="object-cover  w-[18vh] rounded-full -mt-20 ml-5  relative "
        src="/WhatsApp Image 2023-11-03 à 14.47.25_885eaa4f.jpg"
      />
    </main>
  );
}

export default HeroContact;
