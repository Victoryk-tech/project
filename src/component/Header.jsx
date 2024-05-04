import React, { useState } from "react";
import { Link } from "react-scroll";
import veekee2 from "../images/veekee2.jpg";

export const Header = () => {
  const [navHome, setNavHome] = useState(false); //navHome is currently false

  const handleNavHome = () => {
    setNavHome(!navHome);
    // console.log(navHome);
  };

  // const handleScrollToProject =()=>{
  //   document.getElementById("projects").scrollIntoView();
  // }

  // const handleScrollToContact =()=>{
  //   document.getElementById("contact").scrollIntoView();
  // }

  // const handleScrollToAbout =()=>{
  //   document.getElementById("about").scrollIntoView();
  // }

  return (
    <header className="fixed inset-0 w-full h-[10vh] flex  justify-between items-center py-[50px] px-[6%] z-[999] bg-[#1b1f24] transition-all duration-300 ease-in">
      <div className="flex items-center">
        <div className="block md:hidden ">
          <img
            src={veekee2}
            className="w-10 h-10 rounded-[50%] object-cover border border-mainColor "
          />
        </div>
        <h2 className="text-[30px] md:text-[36px] text-textColor font-bold">
          V<span className="text-[#13bbff]">ictory.</span>
        </h2>
      </div>

      <div className="hidden md:flex items-center justify-center gap-9">
        <a
          href="#"
          className="text-[1rem] font-[500] text-otherColor transition-all duration-500 ease-out hover:text-mainColor hover:drop-shadow-[10px_15px_40px_#13bbff,-2px_1px_30px_#fff]"
        >
          Home
        </a>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          className="text-[1rem] font-[500] text-otherColor transition-all duration-500 ease-out hover:text-mainColor hover:drop-shadow-[10px_15px_40px_#13bbff,-2px_1px_30px_#fff]"
        >
          About
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-5}
          duration={500}
          className="text-[1rem] font-[500] text-otherColor transition-all duration-500 ease-out hover:text-mainColor hover:drop-shadow-[10px_15px_40px_#13bbff,-2px_1px_30px_#fff]"
        >
          Projects
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-[1rem] font-[500] text-otherColor transition-all duration-500 ease-out hover:text-mainColor hover:drop-shadow-[10px_15px_40px_#13bbff,-2px_1px_30px_#fff]"
        >
          Contact
        </Link>
      </div>

      <div className="hidden md:block" id="top-btnn">
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-63}
          duration={500}
          className="inline-block py-[11px] px-[26px] bg-transparent text-mainColor border-2 border-mainColor rounded-[8px] text-[15px] font-[600] transition-all duration-500 ease-out hover:bg-mainColor hover:text-bgColor hover:shadow-[0_0_20px_#13bbff] hover:scale-[1.1]"
        >
          Contact me
        </Link>
      </div>

      <div
        className="relative block md:hidden transition-all duration-300"
        id="menu-home"
      >
        <div class="menu-spans" id="">
          <div
            onClick={handleNavHome}
            className="text-[#13bbff]"
            id="menu-icon"
          >
            <span class="material-symbols-sharp">menu</span>
          </div>
        </div>
        {navHome ? (
          <div
            className="h-[100vh] w-1/2 sm:w-1/5 md:w-1/4 flex flex-col top-0 right-0 items-start fixed transition-all duration-500 ease-in bg-bgColor gap-4 pl-3 "
            id="nav-home"
          >
            <div
              onClick={handleNavHome}
              className="text-[#13bbff] flex justify-end w-full p-4"
              id="bx-x"
            >
              <span class="material-symbols-sharp  ">close</span>
            </div>
            <a
              href="#"
              className="text-[1rem] font-[500] text-otherColor transition-all duration-500 ease-out hover:text-mainColor hover:drop-shadow-[10px_15px_40px_#13bbff,-2px_1px_30px_#fff]"
            >
              Home
            </a>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className="text-[1rem] font-[500] text-otherColor transition-all duration-500 ease-out hover:text-mainColor hover:drop-shadow-[10px_15px_40px_#13bbff,-2px_1px_30px_#fff]"
            >
              About
            </Link>
            <a
              href="#"
              className="text-[1rem] font-[500] text-otherColor transition-all duration-500 ease-out hover:text-mainColor hover:drop-shadow-[10px_15px_40px_#13bbff,-2px_1px_30px_#fff]"
            >
              Service
            </a>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-97}
              duration={500}
              className="text-[1rem] font-[500] text-otherColor transition-all duration-500 ease-out hover:text-mainColor hover:drop-shadow-[10px_15px_40px_#13bbff,-2px_1px_30px_#fff]"
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-63}
              duration={500}
              className="text-[1rem] font-[500] text-otherColor transition-all duration-500 ease-out hover:text-mainColor hover:drop-shadow-[10px_15px_40px_#13bbff,-2px_1px_30px_#fff]"
            >
              Contact
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
};
