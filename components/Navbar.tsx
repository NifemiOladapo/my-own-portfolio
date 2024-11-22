import NavbarUl from "./NavbarUl";

const Navbar = () => {
  return (
    <div className="p-7 text-white w-full">
      <div className="-full max-w-[1000px] mx-auto items-center flex justify-between">
        <h1>Nifemi</h1>
        <NavbarUl />
      </div>
    </div>
  );
};

export default Navbar;
