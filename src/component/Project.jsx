import React from "react";
import ecom from "../images/ecom.png";

export const items = [
  {
    id: 1,
    title: "Calculator",
    description:
      "Explore my HTML, CSS, and JavaScript calculator project. Designed  with simplicity in mind, it showcases my ability to create  practical and user-friendly tools. The focus is on clean design, responsive functionality, and reliable performance for everyday calculations.",
    btn1: " github repo",
    btn2: " Live demo",
  },
  {
    id: 2,
    title: "Calculator",
    description:
      "Explore my HTML, CSS, and JavaScript calculator project. Designed  with simplicity in mind, it showcases my ability to create  practical and user-friendly tools. The focus is on clean design, responsive functionality, and reliable performance for everyday calculations.",
    btn1: " github repo",
    btn2: " Live demo",
  },
  {
    id: 3,
    title: "Calculator",
    description:
      "Explore my HTML, CSS, and JavaScript calculator project. Designed  with simplicity in mind, it showcases my ability to create  practical and user-friendly tools. The focus is on clean design, responsive functionality, and reliable performance for everyday calculations.",
    btn1: " github repo",
    btn2: " Live demo",
  },
];
export const Project = () => {
  return (
    <section className="md:p-[5rem] w-[100%] h-auto px-[1rem]" id="projects">
      <div className="text-center mt-[3rem]" data-aos="fade-down">
        <h2 className="text-[2rem] md:text-[2.9rem] leading-8 mb-4 font-[600]">
          My <span className="text-mainColor">Projects</span>
        </h2>
      </div>

      <div
        className="flex flex-col justify-center items-start"
        data-aos="zoom-in-up"
      >
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full h-auto flex items-start md:items-start justify-start md:justify-between mt-[3rem]"
            >
              <div className="text-center w-full md:w-[50%]  h-auto">
                <h2 className="mb-[3rem] text-[2rem] md:text-[2.9rem]">
                  {item.title}
                </h2>

                <p className="text-[1rem] text-otherColor">
                  {item.description}
                </p>

                <div className="flex items-center justify-center gap-[1.5rem] mt-[1.5rem]">
                  <a
                    className="inline-block bg-[transparent] text-mainColor border-2 border-mainColor rounded-[8px] text-[15px] font-[600] transition-all duration-500 ease-out p-[8px] hover:bg-mainColor hover:text-bgColor hover:scale-[1.1] hover:shadow-[0_0_20px_#13bbff]"
                    href="$"
                  >
                    {item.btn1}
                  </a>
                  <a
                    className="inline-block bg-[transparent] text-mainColor border-2 border-mainColor rounded-[8px] text-[15px] font-[600] transition-all duration-500 ease-out p-[8px] hover:bg-mainColor hover:text-bgColor hover:scale-[1.1] hover:shadow-[0_0_20px_#13bbff]"
                    href="#"
                  >
                    {item.btn2}
                  </a>
                </div>
              </div>

              <div className="hidden md:block mw-[40%] h-[40%] ml-[10rem] mt-[3rem]">
                <img
                  src={ecom}
                  className="w-[40%] h-[40%] ml-[10rem] mt-[3rem]"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
