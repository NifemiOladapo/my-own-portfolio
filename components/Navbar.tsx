import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className=" p-5 text-accent">
      <div className="justify-between w-full flex items-center mx-auto max-w-7xl">
        <h1 className="text-2xl  cursor-pointer">Remart</h1>
        <ul className=" hidden lg:flex  gap-10  items-center">
          <li className="text-lg font-medium  cursor-pointer">Home</li>
          <li className="text-lg font-medium  cursor-pointer">About Us</li>
          <li className="text-lg font-medium  cursor-pointer">Faq</li>
          <button className="rounded w-fit py-3 px-6 bg-secondary text-neutral text-base font-medium  cursor-pointer">
            Explore Products
          </button>
        </ul>
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
