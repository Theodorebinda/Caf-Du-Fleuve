import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { globalContext } from "./PartenairProvider";
import { IoIosCafe } from "react-icons/io";

export default function CarrouselConsomateur() {
  const { produits, partenaires } = useContext(globalContext);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Slider {...settings} className="flex justify-center items-center mt-8">
      {produits?.map((produit, index) => (
        <div key={index} className="flex justify-center items-center">
          <div className="md:flex md:justify-center md:items-center md:w-full md:m-8 md:gap-20">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex justify-center items-center md:w-1/6 "
            >
              <img
                className="w-[100px] md:w-full md:object-cover"
                src={produit.logo}
                alt={produit.nom}
              />
            </motion.div>
            <div className="md:w-2/4">
              <div className="flex justify-start mb-2 gap-2 items-center">
                <IoIosCafe />
                <span className="text-sm font-semibold">
                  Appréciation des consommateurs
                </span>
              </div>
              <h4 className="text-3xl font-bold text-[#140100] mb-8">
                Nos consommateurs de disent quelque chose à propos du café
                Arabusta
              </h4>
              <div className="text-[#7c7770]">
                <span>
                  - L’arôme: le parfum du café est l’un des éléments les plus
                  importants pour apprécier le café. Il peut être fruité,
                  floral, épicé ou chocolaté.
                </span>
                <span>
                  - L’acidité: l’acidité du café est un élément important pour
                  déterminer la qualité du café. Elle peut être douce ou vive.
                </span>
                <span>
                  - Le corps: le corps du café est la sensation en bouche. Il
                  peut être léger ou lourd. - La saveur: la saveur du café est
                  l’ensemble des éléments précédents. Elle peut être douce,
                  amère ou acide.
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
