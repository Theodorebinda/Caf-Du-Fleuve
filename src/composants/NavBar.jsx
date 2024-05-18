function NavBar() {
  return (
    <div className="flex justify-between items-center bg-[#588b00] fixed top-0 z-10 w-full">
      <div className="ml-10 my-3 flex justify-center items-center ">
        <img
          className="logo w-8 h-16 animate-bounce	"
          src="src\images\Sans titre.png"
          alt=""
        />
      </div>
      <ul className="flex justify-between items-center gap-6 text-white text-md mr-10">
        <li>Acceuil</li>
        <li>A propos</li>
        <li>Poduits</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
export default NavBar;
