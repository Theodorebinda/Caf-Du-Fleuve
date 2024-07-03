import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-[url('.\images\bg_04.png')]">
      <div className="mt-6">
        <h4 className="ml-4 md:ml-10 font-bold ">
          {"CAFÉ DU FLEUVE, UN MOYEN DE SE RAFRAÎCHIR L'ESPRIT"}
        </h4>
        <div className="ml-4 md:ml-10 my-3 flex justify-start items-center gap-3">
          <span className="font-[Italianno] text-3xl font-medium md:block animate-pulse">
            {"Café du fleuve"}
          </span>
          <img
            className="sm:h-14 h-14	"
            src="src\images\Sans titre.png"
            alt=""
          />
        </div>
        <p className="ml-4 md:ml-10 text-sm my-4">
          Le seul café cultivé et produit à Kinshasa RDC
        </p>
        <div className="flex justify-start items-center gap-4 my-4 ml-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a href="https://www.X.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
        <div className="ml-4 my-4 mb-8 md:ml-10 flex justify-start gap-2 flex-col">
          <h4>CONTACT US</h4>
          <ul>
            <li>ADRESSE : Concession Chanic /Kitambo Magasin</li>
            <a href="mailto:palmedor@gmail.com">
              <li>MAIL :palmedor@gmail.com</li>
            </a>
            <a href="tel:00243 999999999">
              <li>TELEPHONE : 00243 999999999</li>
            </a>
          </ul>
        </div>
        <div className="bg-[#c2c2c2] py-2 fixed bottom-0 w-full ">
          <p className="ml-4 md:ml-10 text-xs">
            Design{" "}
            <a
              className=" animate-pulse font-bold after:content-['_']"
              href="https://github.com/Theodorebinda?"
            >
              Theodore
            </a>
            {"tous droits reservés Palme D'or"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
