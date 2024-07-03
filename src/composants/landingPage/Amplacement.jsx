import { IoIosCafe } from "react-icons/io";
import React from "react";
import Controls from "../controles";
import PartenairList from "../PartenairList";

function Amplacement() {
  return (
    <div className="h-full max-w-full my-8 p-3 md:p-3 bg-[url('.\images\bg_03.png')] ">
      <div className="  w-full  ">
        <div className="flex md:justify-between flex-wrap md:flex-nowrap gap-2">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="max-w-2xl  shadow-md rounded-lg overflow-hidden">
              <video className="w-full h-auto" controls muted>
                <source
                  src="src\images\WhatsApp Vidéo 2023-07-04 à 08.22.04.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <span>
              Cafe du fleuve café est une marque de café de qualité supérieure,
              produite à partir des meilleurs grains de café cultivés en
              République démocratique du Congo. La kinoise café offre une
              expérience gustative unique, avec des arômes riches et intenses,
              qui raviront les amateurs de café les plus exigeants. La kinoise
              café est disponible dans plus de 11 supermarchés en RDC, où vous
              pourrez trouver différents formats et variétés de café, adaptés à
              vos besoins et à vos envies. Que vous préfériez le café moulu, en
              grains, en capsules ou en dosettes, la kinoise café vous garantit
              une qualité irréprochable et un goût incomparable. La kinoise
              café, c'est le choix du café authentique et savoureux, qui vous
              accompagne tout au long de la journée.
            </span>
            <div className="w-1/2">
              <img
                className="object-cover h-full w-full "
                src="src\images\cafe.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-full md:w-1/2  ">
            <div className=" flex justify-between w-3/4 md:m-auto  flex-col">
              <div className="flex justify-start items-center gap-2 ">
                <IoIosCafe />
                <span className="text-sm font-semibold">
                  NOS EMPLACEMENT PRIVILEGIER
                </span>
              </div>
              <h4 className="text-3xl font-bold text-[#140100]  mb-4">
                NOS POINT DE VENTE EN RDC
              </h4>
            </div>
            <div>
              <Controls />
              <PartenairList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Amplacement;
