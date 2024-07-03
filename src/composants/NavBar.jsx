import { useState } from "react";
import React from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center bg-[#588b00] fixed top-0 z-20 w-full text-white">
      <div className="ml-4 md:ml-10 my-3 flex justify-between items-center gap-3">
        <span className="font-[Italianno] text-3xl font-medium  md:block animate-pulse">
          {"Café du fleuve"}
        </span>
        <img
          className="sm:h-14 h-14 animate-bounce	"
          src="src\images\Sans titre.png"
          alt=""
        />
      </div>

      <ul className="md:flex md:justify-between md:items-center md:gap-6 text-md mr-10 hidden">
        <li>Acceuil</li>
        <li>A propos</li>
        <li>Poduits</li>
        <li>Contact</li>
      </ul>
      {!isOpen ? (
        <button
          className="block md:hidden text-black  focus:outline-none mr-6"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2H3zm0 8a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2H3zm0 8a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2H3z"
            />
          </svg>
        </button>
      ) : (
        <div>
          <button
            onClick={toggleMenu}
            className=" block md:hidden text-black  focus:outline-none mr-6"
          >
            <span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>
          <ul className="flex flex-col justify-between w-full pl-10 fixed top-20 right-0  h-[200px] bg-[#a8bd83] shadow-lg z-50 md:hidden">
            <li>Acceuil</li>
            <li>A propos</li>
            <li>Poduits</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default NavBar;
