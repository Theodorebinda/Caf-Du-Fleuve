import Footer from "./composants/Footer";
import React from "react";
import NavBar from "./composants/NavBar";
import PartenairProvider from "./composants/PartenairProvider";
import Home from "./pages/Home";
import("./index.css");

function App() {
  return (
    <PartenairProvider>
      <NavBar />
      <Home />
      <Footer />
    </PartenairProvider>
  );
}

export default App;
