import { IoIosCafe } from "react-icons/io";
import React from "react";
import CarrouselConsomateur from "../CarrouselConsomateur";

export default function OffreSections() {
  return (
    <>
      <div className="w-full flex flex-col mb-8">
        <div className="w-full md:flex justify-between items-center gap-8  bg-[#f3f3f3] md:py-3 mt-6">
          <div className="h-[530px] md:w-2/3">
            <img
              className="object-cover object-top  h-full w-full "
              src="src\images\imageBernice.jpg"
              alt="nos offres"
            />
          </div>
          <div className=" py-8">
            <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-center items-start gap-2 md:mx-8 mx-3 ">
              <div className="m-2">
                <img
                  className="object-cover h-full w-full md:w-80 "
                  src="src\images\imgTasseCafe_02.png"
                  alt=""
                />
              </div>
              <div className="w-full ">
                <div className="flex justify-start mb-2 gap-2 items-center">
                  <IoIosCafe />
                  <span className="text-sm font-semibold">
                    CE QUE NOUS OFFRONS
                  </span>
                </div>
                <div className="w-2/3">
                  <h4 className="text-3xl font-bold text-[#140100] mb-8">
                    UN ARÔME DIVIN À CHAQUE TASSE
                  </h4>
                </div>

                <div className="text-[#7c7770]">
                  <p>
                    cafe du fleuve est une marque de café de qualité supérieure,
                    produite à partir des meilleurs grains de café cultivés en
                    République démocratique du Congo pres du fleuve congo.
                  </p>
                  <p>
                    Le café du fleuve offre une expérience gustative unique,
                    avec des arômes riches et intenses, qui raviront les
                    amateurs de café les plus exigeants.
                  </p>
                  <p>
                    Le café du fleuve est disponible dans plus de 8 supermarchés
                    en RDC, où vous pourrez trouver différents formats et
                    variétés de café, adaptés à vos besoins et à vos envies.
                  </p>
                  <p>
                    Que vous préfériez le café moulu, en grains, en capsules ou
                    en dosettes, le café du fleuve vous garantit une qualité
                    irréprochable et un goût incomparable.
                  </p>
                  <p>
                    Le café du fleuve, c'est le choix du café authentique et
                    savoureux, qui vous accompagne tout au long de la journée.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CarrouselConsomateur />
      </div>
    </>
  );
}
