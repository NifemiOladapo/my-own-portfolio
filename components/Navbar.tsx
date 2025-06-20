import NavbarUl from "./NavbarUl";

const Navbar = () => {
  return (
    <nav className="p-7 text-white w-full">
      <div className="w-full max-w-[1000px] mx-auto items-center flex justify-between">
        <h1>Nifemi</h1>
        <NavbarUl />
      </div>
    </nav>
  );
};

export default Navbar;
