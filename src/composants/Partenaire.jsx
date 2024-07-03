import { useContext } from "react";
import React from "react";
import { globalContext } from "./PartenairProvider";

function Partenair({ nom, logo, genre }) {
  const { produits } = useContext(globalContext);
  return (
    <>
      <div className=" flex justify-between flex-wrap md:ml-auto w-full rounded-lg py-8 pl-4">
        <div className=" flex justify-between items-start ">
          <div className="w-[20%] h-auto rounded-lg bg-white">
            <img src={logo} alt="" />
          </div>
          <div className="">
            <h4 className="text-sm">{nom}</h4>
            <div>
              <span>{genre}</span>
              <span className="text-xs">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
                numquam. Quod blanditiis in vel
              </span>
            </div>
          </div>
          <div className="flex justify-center   gap-5">
            {produits.map((produit, index) => (
              <div key={index} className="w-[30px] ">
                <img className="" src={produit.logo} alt={produit.nom} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Partenair;
