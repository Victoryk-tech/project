import React from "react";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <div>
      <footer className="py-[22px] px-[10%] bg-secongBgColor flex items-center justify-between gap-8">
        <div className="text-[12px] md:text-[15px] font-[400] text-otherColor">
          <p>2024 Victory Kemele, All Rights Reserved</p>
        </div>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          className=" bg-mainColor transition-all duration-500 ease-out hover:bg-[transparent] hover:text-mainColor cursor-pointer hover:shadow-[0_0_20px_#13bbff] inline-flex items-center justify-center w-[25px] md:w-[45px] h-[25px] md:h-[45px] rounded-[50%] text-textColor text-[27px]"
        >
          <span class="material-symbols-sharp">Arrow_Upward</span>
        </Link>
      </footer>
    </div>
  );
};
