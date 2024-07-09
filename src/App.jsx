import React from "react";
import Home from "./pages/Home";
import Layourt from "./routes/layourt";
import Contact from "./pages/Contact";
import("./index.css");

function App() {
  return (
    <Layourt>
      <Home />
      <Contact />
    </Layourt>
  );
}

export default App;
