import React from "react";
import veekee1 from "../images/veekee1.jpg";

export const About = () => {
  return (
    <section className="flex flex-col items-center justify-center" id="about">
      <div className="w-full md:w-[90%] h-auto bg-secongBgColor grid grid-cols-1 md:grid-cols-2 items-center md:items-start justify-items-center md:justify-items-center gap-8 md:gap-2 py-[1rem] px-4  ">
        <div
          data-aos="zoom-in-down"
          className="w-60 md:w-[100%]  h-60 md:h-[500px] md:max-w-[510px]"
        >
          <img
            src={veekee1}
            alt=""
            className="w-full h-full rounded-[90%] border-[7px] border-mainColor shadow-[0_0_20px_#13bbff] object-cover"
          />
        </div>

        <div className="text-center md:pt-[5rem] pt-1" data-aos="zoom-in-up">
          <h2 className="text-[28px] md:text-[33px] leading-9 mb-4 md:mb-10 font-[600]">
            I am a <span className="text-[#13bbff]">Frontend Developer</span>
          </h2>
          <div className="gap-4 pb-6 flex flex-col">
            <p className="text-textColor font[600] text-[19px]">
              speciality:
              <span className="text-otherColor text-[1rem] font-[400] ml-[8px]">
                Frontend Web Developer
              </span>
            </p>

            <p className="text-textColor font[600] text-[19px]">
              Email:
              <span className="text-otherColor text-[1rem] font-[400] ml-[8px]">
                kemelevictory3802@gmail.com
              </span>
            </p>

            <p className="text-textColor font[600] text-[19px]">
              Stacks:
              <span className="text-otherColor text-[1rem] font-[400] ml-[8px]">
                HTML,CSS,JAVASCRIPT,REACT,TAILWIND CSS
              </span>
            </p>

            <p className="text-textColor font[600] text-[19px]">
              Freelance:
              <span className="text-otherColor text-[1rem] font-[400] ml-[8px]">
                Available
              </span>
            </p>
            <p className="text-textColor font[600] text-[19px]">
              Education:
              <span className="text-otherColor text-[1rem] font-[400] ml-[8px]">
                B.A History and International Studies
              </span>
            </p>
          </div>
          <a
            href="#"
            className="inline-block py-[11px] px-[26px] bg-mainColor text-bgColor border-2 border-mainColor rounded-[8px] text-[15px] font-[600] transition-all duration-500 ease-in hover:bg-[transparent] hover:text-mainColor hover:shadow-[0_0_20px_#13bbff] mt-4"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};
