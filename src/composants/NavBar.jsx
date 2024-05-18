import logo from "../images/Sans titre.png";

function NavBar() {
  return (
    <div className="contenair-navbar">
      <div>
        <img className="logo " src={logo} alt="" />
      </div>
      <div className="nav-header"></div>
    </div>
  );
}
export default NavBar;
