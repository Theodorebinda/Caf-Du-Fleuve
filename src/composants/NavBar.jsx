function NavBar() {
  return (
    <div className="flex justify-between items-center bg-[#588b00] fixed top-0 z-10 w-full text-white">
      <div className="ml-10 my-3 flex justify-between items-center gap-3">
        <span className="font-[Italianno] text-3xl font-medium hidden md:block ">
          {"Café du fleuve"}
        </span>
        <img
          className="sm:h-14  animate-bounce	"
          src="src\images\Sans titre.png"
          alt=""
        />
      </div>
      <ul className="flex justify-between items-center gap-6 text-md mr-10">
        <li>Acceuil</li>
        <li>A propos</li>
        <li>Poduits</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
export default NavBar;
