import React, { useState } from "react";
import Data from "../data/initial-data.json";

export const globalContext = React.createContext(null);
function PartenairProvider({ children }) {
  const [produits, setProduits] = useState(Data.produits);
  const [partenaires, setPartenaires] = useState(Data.partenaires);
  const [ville, setVille] = useState("Tous");

  return (
    <globalContext.Provider
      value={{
        produits,
        setProduits,
        partenaires,
        setPartenaires,
        ville,
        setVille,
      }}
    >
      {children}
    </globalContext.Provider>
  );
}

export default PartenairProvider;
