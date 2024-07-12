import { IoIosCafe } from "react-icons/io";
import Produit from "../Produit";
import React from "react";
import { useContext } from "react";
import { globalContext } from "../PartenairProvider";
import { motion } from "framer-motion";

function ProduitListe() {
  const { produits } = useContext(globalContext);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full md:my-8"
      >
        <div className="flex flex-col items-start gap-2 mx-4">
          <IoIosCafe />
          <span className="text-sm font-semibold">
            BOUTIQUE SPECIAL EN LIGNE
          </span>
          <span className="text-3xl font-bold text-[#140100] mb-8">
            NOS PRODUITS
          </span>
        </div>
        <div className="flex   flex-wrap justify-center items-center md:mb-8  md:gap-8">
          {produits.map((produit, index) => (
            <Produit className="" key={index} produit={produit} />
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default ProduitListe;
