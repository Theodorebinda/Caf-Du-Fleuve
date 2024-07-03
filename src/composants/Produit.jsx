import React from "react";
export default function Produit({ className, produit }) {
  return (
    <div
      className={`${className} flex flex-col justify-start bg-white  rounded-md items-start drop-shadow-md my-8 pb-8`}
    >
      <div className="w-[350px] h-[300px] border-[20px] border-white rounded-md bg-[#f7f6f6] flex items-center justify-center">
        <img className="w-[90px] " src={produit.logo} alt={produit.nom} />
      </div>
      <h3 className="px-3 font-bold text-xl">{produit.nom}</h3>
    </div>
  );
}
