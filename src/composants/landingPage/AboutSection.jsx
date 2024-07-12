import { IoIosCafe } from "react-icons/io";
import React from "react";
import Typewriter from "../TypeWrither";
import { motion } from "framer-motion";
function AboutSection() {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between  bg-[#a3bc77] md:h-screen w-full font-sans">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 rounded-md bg-white  m-4 md:m-2 p-6 md:p-4 "
      >
        <div className="flex justify-start items-center gap-2 ">
          <IoIosCafe />
          <span className="text-sm font-semibold">ABOUT US</span>
        </div>
        <h2 className="text-3xl font-bold text-[#140100]  mb-4">
          LES BIENFAITS DU <br />
          <span className="font-[Italianno] text-[#588b00] md:text-3xl font-bold ">
            CAFÉ Du FLEUVE
          </span>
        </h2>
        <div className="flex justify-between flex-col text-[#756e6e] gap-6">
          <p className="after:content-['_....'] ">
            Connu depuis des siècles pour ses qualités gustatives et
            stimulantes, le café est la deuxième boisson la plus consommée au
            monde.
            <span className="font-semibold">En consommation modérée</span>, le
            café possède de nombreuses propriétés bénéfiques pour la santé :
            amélioration de la mémoire, de la concentration et du moral. La
            caféine qu’il renferme a surtout été associé à de nombreuses vertus
            physiques, dont la diminution possible du risque d Alzheimer et de
            certains cancers
          </p>
          <div className=" md:overflow-hidden">
            <div className="hidden md:block">
              <span className="font-semibold before:content-['_☕'] p-4 ">
                {"STIMULER L'ESPRIT"}
              </span>
              <p>
                <span className="font-[Italianno] text-2xl text-[#588b00] font-medium after:content-['_']">
                  Café du Fleuve
                </span>
                contient de la caféine qui est un stimulant naturel du système
                nerveux central. La caféine peut aider à améliorer la vigilance,
                la concentration et l’humeur. Cependant, il est important de ne
                pas en abuser car cela peut entraîner des effets secondaires
                tels que des maux de tête, des tremblements et des troubles du
                sommeil.
              </p>
            </div>
            <div className="hidden md:block ">
              <span className="font-semibold  before:content-['_☕☕'] p-4">
                PROTECTION CONTRE LES MIGRAINES
              </span>
              <p>
                Le café contient de la caféine qui peut aider à soulager les
                migraines en réduisant la taille des vaisseaux sanguins dans le
                cerveau.
              </p>
            </div>
          </div>
          <button className="border-2 py-3 px-5 rounded-lg  bg-[#588b00]  text-[#140100] font-semibold hover:bg-[#140100] hover:text-[#588b00] w-1/2 md:w-1/3">
            En savoir plus
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className=" relative w-full md:w-1/2 overflow-hidden md:m-2  rounded-lg "
      >
        <div className="">
          <img
            className="w-full h-full object-cover  "
            src="src\images\image cafe.jpg"
            alt="cafeDuFleuve"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 text-white text-xl font-bold">
            <Typewriter
              text={"Parce que vous meritez mieux"}
              speed={200}
              deleteDelay={1000}
            />
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutSection;
