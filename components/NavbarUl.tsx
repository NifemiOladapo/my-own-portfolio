import { ElementRef, ElementType, useRef } from "react";

const NavbarUl = () => {
  // const navbarIsVisible = useRef<boolean>(false);
  // const navbarRef = useRef<ElementRef<"ul">>(null);

  // const toggleNavbarVisibility = () => {
  //   if (navbarIsVisible.current === false) {
  //     navbarRef.current ? (navbarRef.current.style.right = "0") : null;

  //     navbarIsVisible.current = true;
  //   } else {
  //     navbarRef.current ? (navbarRef.current.style.right = "100%") : null;
  //     navbarIsVisible.current = false;
  //   }
  // };

  return (
    // <ul
    //   ref={navbarRef}
    //   className="shadow-md shadow-emerald-500 lg:shadow-none  flex z-10 ease-in-out transition-all lg:justify-normal justify-between  gap-5 lg:flex-row flex-col lg:static p-10 lg:p-0 fixed lg:h-[fit-content] h-[50vh] top-0 right-[100%] lg:w-[fit-content] w-[100vw] items-center bg-[#091b29]"
    // >
    //   {/* <li className="cursor-pointer">About Me</li>
    //   <li className="cursor-pointer">Tech Stack</li>
    //   <li className="cursor-pointer">My Projects</li> */}
    //   <li className="cursor-pointer border-[1.5px] border-emerald-500 py-2.5 px-6">
    //     Contact Me
    //   </li>
    //   <div
    //     onClick={toggleNavbarVisibility}
    //     className="flex cursor-pointer fixed top-6 z-20 right-6 lg:hidden flex-col gap-2 items-center w-8"
    //   >
    //     <span className="w-full h-[1.5px] rounded-md bg-white"></span>
    //     <span className="w-full h-[1.5px] rounded-md bg-white"></span>
    //     <span className="w-full h-[1.5px] rounded-md bg-white"></span>
    //   </div>
    // </ul>
    <ul>
      <a
        href="https://wa.me/+2349165825455?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
      >
        <li className="cursor-pointer border-[1.5px] hover:bg-emerald-500 ease-in-out transition-all border-emerald-500 py-2.5 px-6">
          Contact Me
        </li>
      </a>
    </ul>
  );
};

export default NavbarUl;
