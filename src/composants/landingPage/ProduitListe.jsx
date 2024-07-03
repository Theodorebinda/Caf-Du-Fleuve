import { IoIosCafe } from "react-icons/io";
import Produit from "../Produit";
import React from "react";
import { useContext } from "react";
import { globalContext } from "../PartenairProvider";

function ProduitListe() {
  const { produits } = useContext(globalContext);

  return (
    <>
      <div className="w-full md:my-8">
        <div className="flex flex-col items-start gap-2 mx-8">
          <IoIosCafe />
          <span className="text-sm font-semibold">
            BOUTIQUE SPECIAL EN LIGNE
          </span>
          <h4 className="text-3xl font-bold text-[#140100] mb-8">
            NOS PRODUITS
          </h4>
        </div>
        <div className="flex   flex-wrap justify-center items-center md:mb-8  md:gap-8">
          {produits.map((produit, index) => (
            <Produit className="" key={index} produit={produit} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProduitListe;
