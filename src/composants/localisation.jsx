import React from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";

function Localisation() {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between  md:items-center">
        <div className="flex justify-between gap-2 items-center">
          <div className="p-6 bg-[#f6f6f6]">
            <CiMail size={40} />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold">ADRESSE EMAIL :</span>
            <a href="mailto:cafedufleuve@gmail.com">cafedufleuver@gmail.com</a>
          </div>
        </div>
        <div className="flex justify-between gap-2 items-center">
          <div className="p-6 bg-[#f6f6f6]">
            <CiLocationOn size={40} />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold">NOS EMPLACEMENTS :</span>
            <a href="">Concession Chanic Metal</a>
          </div>
        </div>
        <div className="flex justify-between gap-2 items-center">
          <div className="p-6 bg-[#f6f6f6]">
            <CiMail size={40} />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold">NUMERO DE TELEPHONE :</span>
            <a href="tel:+243894594411">+243000099999</a>
            <a href="tel:+243894594411">+2430088899889</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Localisation;
