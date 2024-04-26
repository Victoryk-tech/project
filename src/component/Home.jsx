import React from "react";
import veekee2 from "../images/veekee2.jpg";

export const Home = () => {
  return (
    <section className="md:p-[3rem]">
      <div className="flex  gap-[5rem] mb-[3rem]">
        <div className="mt-[6rem] ml-2 md:w-[70%]  pl-3" data-aos="fade-in">
          <h4 className="text-[1.6rem] mb-2 font-[500]">Hello,</h4>
          <h1 className="text-[3rem] md:text-[3.3rem] font-[900] leading-[2.8rem]">
            I'm <span className="text-[#13bbff]">Victory Kemele</span>
          </h1>
          <h3 className="text-[1rem] md:text-[1.3rem] font-[400] mt-[1.5rem] text-otherColor mb-[15px]">
            I'm a Front-End Web Developer with a passion forcreating intuitive,
            dynamic and responsive user experience.
          </h3>

          <div className="mb-[40px] flex items-center justify-start gap-2 md:gap-3">
            <a
              href="https://twitter.com/kemele_victory"
              className="flex items-center justify-center h-[40px] w-[40px] text-mainColor rounded-[50%] text-[20px]  cursor-pointer shadow-[0_0_20px_transparent] transition-all duration-500 ease-out backdrop-sepia brightness-[80%] text-center hover:shadow-[0_0_20px_#13bbff] hover:scale-[1.1]"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.youtube.com/@victorykemele3394"
              className="flex items-center justify-center h-[40px] w-[40px] text-mainColor rounded-[50%] text-[20px]  cursor-pointer shadow-[0_0_20px_transparent] transition-all duration-500 ease-out backdrop-sepia brightness-[80%] text-center hover:shadow-[0_0_20px_#13bbff] hover:scale-[1.1]"
            >
              <i class="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/victory-kemele-b0b45024a/"
              className="flex items-center justify-center h-[40px] w-[40px] text-mainColor rounded-[50%] text-[20px]  cursor-pointer shadow-[0_0_20px_transparent] transition-all duration-500 ease-out backdrop-sepia brightness-[80%] text-center hover:shadow-[0_0_20px_#13bbff] hover:scale-[1.1]"
            >
              {" "}
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/iam_veekee_"
              className="flex items-center justify-center h-[40px] w-[40px] text-mainColor rounded-[50%] text-[20px]  cursor-pointer shadow-[0_0_20px_transparent] transition-all duration-500 ease-out backdrop-sepia brightness-[80%] text-center hover:shadow-[0_0_20px_#13bbff] hover:scale-[1.1]"
            >
              {" "}
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://github.com/Victoryk-tech"
              className="flex items-center justify-center h-[40px] w-[40px] text-mainColor rounded-[50%] text-[20px]  cursor-pointer shadow-[0_0_20px_transparent] transition-all duration-500 ease-out backdrop-sepia brightness-[80%] text-center hover:shadow-[0_0_20px_#13bbff] hover:scale-[1.1]"
            >
              {" "}
              <i class="fab fa-github"></i>
            </a>
          </div>

          <div className="flex gap-2">
            <a
              href="#"
              className="inline-block py-[11px] px-[26px] bg-mainColor text-bgColor border-2 border-mainColor rounded-[8px] text-[15px] font-[600] transition-all duration-500 ease-in hover:bg-[transparent] hover:text-mainColor hover:shadow-[0_0_20px_#13bbff] "
            >
              Hire me
            </a>
            <a
              href="#"
              className=" inline-block py-[11px] px-[26px]  rounded-[8px] text-[15px] font-[600]  bg-[transparent] text-mainColor border-2 border-solid border-mainColor hover:bg-mainColor hover:text-bgColor hover:shadow-[0_0_20px_#13bbff] transition-all duration-500 ease-in"
            >
              Download cv
            </a>
          </div>
        </div>

        <div className="hidden md:block md:mt-[2rem]">
          <img
            src={veekee2}
            className="w-[450px] h-[450px] max-w-[500px] rounded-[50%] object-cover border-[7px] border-mainColor  mt-8 "
          />
        </div>
      </div>
    </section>
  );
};
