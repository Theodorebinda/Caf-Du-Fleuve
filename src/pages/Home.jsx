import AboutSection from "../composants/landingPage/AboutSection";
import React from "react";
import Amplacement from "../composants/landingPage/Amplacement";
import AutreService from "../composants/landingPage/BlogEtAutreService";
import HiroSection from "../composants/landingPage/HiroSection";
import OffreSections from "../composants/landingPage/OffreSection";
import ProduitListe from "../composants/landingPage/ProduitListe";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-auto overflow-hidden">
      <HiroSection />
      <AboutSection />
      <Amplacement />
      <ProduitListe />
      <OffreSections />
      <AutreService />
    </div>
  );
}
export default Home;
