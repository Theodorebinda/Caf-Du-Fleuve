import { Outlet } from "react-router-dom";
import NavBar from "../composants/NavBar";
import Footer from "../composants/Footer";

export default function Layourt() {
  return (
    <>
      {/* all the other elements */}
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
