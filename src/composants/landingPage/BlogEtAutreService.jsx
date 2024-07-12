import { IoIosCafe } from "react-icons/io";
import { motion } from "framer-motion";
import React from "react";

function AutreService() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}
      viewport={{ once: true }}
      className="bg-[url('.\images\bg_03.png')] py-6 w-full h-full "
    >
      <div className="flex flex-col m-4">
        <div className="ml-4">
          <div className="flex justify-start mb-2 gap-2 items-center">
            <IoIosCafe />
            <span className="text-sm font-semibold">
              NOS SERVICES ET PRODUITS
            </span>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-[#140100] lg:mb-4">
              {"NOUS SOMMES PALME D'OR"}
            </h4>
            <p className="py-8">
              Nous offrons des services telque Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Consectetur dolore earum quam
              veritatis fuga odit, voluptate eum asperiores voluptas pariatur
              quis adipisci quidem unde, ratione officiis quisquam minima, odio
              rem fugit eveniet. Voluptates laboriosam inventore ad ipsam! Eos
              asperiores enim fugiat, error mollitia maxime esse deleniti sed!
              Iste, delectus quaerat?
            </p>
          </div>

          <div className="flex flex-col md:flex-wrap justify-center items-center h-max-full  gap-5">
            <div className=" flex flex-col lg:flex-row justify-between items-center lg:gap-10">
              <img className="" src="src\images\pic-right.png" alt="" />
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita quos ab similique molestiae beatae animi quo nobis
                eligendi ipsa voluptaspariatur quis adipisci quidem unde,
                ratione officiis quisquam minima, odio rem fugit eveniet.
                Voluptates laboriosam inventore ad ipsam! Eos asperiores enim
                fugiat, error mollitia maxime esse deleniti sed! Iste, delectus
                quaerat?
              </span>
            </div>
            <div className=" flex flex-col lg:flex-row-reverse justify-between items-center lg:gap-10">
              <img className="" src="src\images\pic-right.png" alt="" />
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita quos ab similique molestiae beatae animi quo nobis
                eligendi ipsa voluptaspariatur quis adipisci quidem unde,
                ratione officiis quisquam minima, odio rem fugit eveniet.
                Voluptates laboriosam inventore ad ipsam! Eos asperiores enim
                fugiat, error mollitia maxime esse deleniti sed! Iste, delectus
                quaerat?
              </span>
            </div>
            <div className=" flex flex-col lg:flex-row justify-between items-center lg:gap-10">
              <img className="" src="src\images\pic-right.png" alt="" />
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita quos ab similique molestiae beatae animi quo nobis
                eligendi ipsa voluptaspariatur quis adipisci quidem unde,
                ratione officiis quisquam minima, odio rem fugit eveniet.
                Voluptates laboriosam inventore ad ipsam! Eos asperiores enim
                fugiat, error mollitia maxime esse deleniti sed! Iste, delectus
                quaerat?
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default AutreService;
