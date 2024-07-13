import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import React from "react";
import { FaRegCopyright, FaXTwitter } from "react-icons/fa6";

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
            src="https://res.cloudinary.com/dhdaxlymt/image/upload/v1720807737/cafeDuFleuve/Sans_titre_hr65cz.png"
            alt=""
          />
        </div>
        <div className="flex flex-col md:flex-row justify-start md:gap-20 items-start">
          <div>
            <p className="ml-4 md:ml-10 text-sm my-4">
              Cultivé et produit en Republique Democratique du Congo
            </p>
            <div className="flex justify-start items-center gap-4 my-4 ml-4 md:ml-10">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.X.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="insta"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
              >
                <FaYoutube />
              </a>
            </div>
            <div className="ml-4 my-4 mb-8 md:ml-10 flex justify-start gap-2 flex-col">
              <h4>CONTACT US</h4>
              <ul>
                <li>ADRESSE : Concession Chanic /Kitambo Magasin</li>
                <li>
                  <a href="mailto:cafedufleuve@gmail.com" aria-label="email">
                    MAIL :cafedufleuve@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:00243 999999999" aria-label="number">
                    TELEPHONE : 00243 999999999
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className="ml-4 md:ml-10 text-sm my-5">
              Contactez notre structure pour plus de detail
            </p>
            <div className="flex justify-start items-center gap-4 my-4 ml-4 md:ml-10">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.X.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="insta"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
              >
                <FaYoutube />
              </a>
            </div>
            <div className="ml-4 my-4 mb-8 md:ml-10 flex justify-start gap-2 flex-col">
              <h4>CONTACT US</h4>
              <ul>
                <li>ADRESSE : Concession Silikin village /Kinshasa Gombe</li>
                <li>
                  <a href="mailto:palmedor@gmail.com" aria-label="email">
                    MAIL :palmedor@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:00243 999999999" aria-label="number">
                    TELEPHONE : 00243 999999999
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:block">
            <p className="ml-4 md:ml-10 text-sm my-4">
              Visitez nos differents sites
            </p>
            <div className="flex justify-start items-center gap-4 my-4 ml-4 md:ml-10">
              <ul>
                <li>
                  <a href="#" aria-label="Palme D'or">
                    Palme D'or
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Palme D'or">
                    Hydroforce
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center bg-[#c2c2c2] py-2  bottom-0 w-full ">
          <FaRegCopyright />
          <p className="ml-4 text-xs">
            Design by{"  "}
            <a
              className=" font-bold after:content-['_'] text-black"
              href="https://portefolio-gules.vercel.app/"
              aria-label="Theodore"
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
