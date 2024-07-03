import React from "react";
import { useContext } from "react";
import { villes } from "../utile/villeDisponible";
import { globalContext } from "./PartenairProvider";

function Controls() {
  // const { partenaires, setPartenaires } = useContext(globalContext);
  const { ville, setVille } = useContext(globalContext);
  console.log({ ville });

  const handleChange = (e) => {
    setVille(e.target.value);
  };

  return (
    <div className="bg-[#FFF] flex justify-between items-center flex-wrap md:m-auto md:w-3/4 rounded-lg p-4 gap-5">
      <span className="font-sans">Nous sommes present sur ces ville </span>
      <select value={ville} onChange={handleChange}>
        {villes.map((ville, index) => (
          <option key={index} value={ville}>
            {ville}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Controls;
