import React from "react";
function HeroContact(props) {
  return (
    <main className="min-w-full">
      <div className="bg-[url('./public/breadcrumb_bg_01.jpg')] pt-20 h-[90vh] flex flex-col  justify-center items-start pl-4 gap-4 font-semibold bg-no-repeat bg-center  bg-cover   text-white font-sans">
        <h1 className="  text-6xl">Contactez Nous</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          soluta.
        </p>
      </div>
      <div className="w-[20vh] rounded-full top-10 stycki   transform  border-4 border-white">
        <img
          className="object-cover rounded-full"
          src="./public/WhatsApp Image 2023-11-03 à 14.47.25_885eaa4f.jpg"
        ></img>
      </div>
    </main>
  );
}

export default HeroContact;
