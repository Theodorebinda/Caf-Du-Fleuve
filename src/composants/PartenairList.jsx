import React, { useContext } from "react";
import Partenair from "./Partenaire";
import { globalContext } from "./PartenairProvider";

export default function PartenairList() {
  const { partenaires, ville } = useContext(globalContext);

  return (
    <>
      {partenaires
        .filter((partenaire) => {
          if (ville === "Tous") return true;
          return partenaire.ville === ville;
        })
        .map((partenaire, index) => (
          <Partenair
            key={index}
            genre={partenaire.genre}
            logo={partenaire.logo}
            nom={partenaire.nom}
          />
        ))}
    </>
  );
}
