import React from "react";
import veekee2 from "../images/veekee2.jpg";

export const Header = () => {
  return (
    <header className="fixed inset-0 w-full h-[10vh] flex  justify-between items-center py-[50px] px-[6%] z-[999] bg-[#1b1f24] transition-all duration-300 ease-in">
      <div className="">
        <h2 className="text-[30px] md:text-[36px] text-textColor font-[600]">
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
        <a
          href="#"
          onclick="scroll_to_target()"
          className="text-[1rem] font-[500] text-otherColor transition-all duration-500 ease-out hover:text-mainColor hover:drop-shadow-[10px_15px_40px_#13bbff,-2px_1px_30px_#fff]"
        >
          About
        </a>
        <a
          href="#"
          className="text-[1rem] font-[500] text-otherColor transition-all duration-500 ease-out hover:text-mainColor hover:drop-shadow-[10px_15px_40px_#13bbff,-2px_1px_30px_#fff]"
        >
          Service
        </a>
        <a
          href="#"
          onclick="scroll_to_projects()"
          className="text-[1rem] font-[500] text-otherColor transition-all duration-500 ease-out hover:text-mainColor hover:drop-shadow-[10px_15px_40px_#13bbff,-2px_1px_30px_#fff]"
        >
          Projects
        </a>
      </div>

      <div className="hidden md:block" id="top-btnn">
        <a
          href="#"
          onclick="scroll_to_contact()"
          className="inline-block py-[11px] px-[26px] bg-transparent text-mainColor border-2 border-mainColor rounded-[8px] text-[15px] font-[600] transition-all duration-500 ease-out hover:bg-mainColor hover:text-bgColor hover:shadow-[0_0_20px_#13bbff] hover:scale-[1.1]"
        >
          Contact me
        </a>
      </div>

      <div className="block md:hidden ">
        <img
          src={veekee2}
          className="w-[100%] h-[100px] max-h-[3rem] max-w-[6rem] rounded-[50%] object-cover border-[1px] border-mainColor "
        />
      </div>

      <div
        className="relative block md:hidden transition-all duration-300"
        id="menu-home"
      >
        <div class="menu-spans" id="">
          <div className="text-[#13bbff]" id="menu-icon">
            <span class="material-symbols-sharp">menu</span>
          </div>
        </div>

        <div
          className="h-[100vh] md:flex flex-col top-10 right-[-5rem] items-start absolute gap-[1rem] bg-bgColor pr-[5rem] pl-[0.7rem] hidden"
          id="nav-home"
        >
          <div className="text-[#13bbff]" id="bx-x">
            <span class="material-symbols-sharp">close</span>
          </div>
          <a href="#">Home</a>
          <a href="#" onclick="scroll_to_target()">
            About
          </a>
          <a href="#">Service</a>
          <a href="#" onclick=" scroll_to_projects()">
            Projects
          </a>
          <a href="#" onclick="scroll_to_contact()">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};
