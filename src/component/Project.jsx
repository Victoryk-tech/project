import React from "react";
import advice from "../images/advice.png";
import lilies from "../images/lilies.png"
import event from "../images/Event.png"

export const items = [
  {
    id: 1,
    title: "Advice App",
    description:
      "Explore my React, Tailwind CSS advice project. Designed to encourge you and give you life advicing.It showcases my ability to put humanity first in terms of encouraging you through quotes. The focus is on the functionality, reliable performance and humanity for everyday motivation. ",
    btn1: " github repo",
    btn2: " Live demo",
    image: advice
  },
  {
    id: 2,
    title: "FOOD APP",
    description:
      "Explore my React, and Tailwind CSS Food App project. Designed  with simplicity in mind, it showcases my ability to create  practical and user-friendly tools. The focus is on clean design, responsive functionality, and reliable performance for everyday food satisfaction.",
    btn1: <a href="https://github.com/Victoryk-tech/e-commerce">github repo</a>,
    btn2: " Live demo",
    image: lilies
  },
  {
    id: 3,
    title: "Event App",
    description:
      "This is a collaboration project done with a team of developers to help you invite people to your events. It showcases my ability to collaborate with people and create a  user-friendly website. The focus is on clean design, responsive functionality, and reliable performance for your satisfaction and make it easy for you to invite people to your event.",
    btn1: <a href="https://github.com/JerryJeager/Will-Be-There">github repo</a>,
    btn2: <a href="https://will-be-there.vercel.app/">Live demo</a>,
    image: event
  },
  
];
export const Project = () => {
  return (
    <section className="md:p-[5rem] w-[100%] h-auto px-[2rem]" id="projects">
      <div className="text-center mt-[3rem]" data-aos="fade-down">
        <h2 className="text-[2rem] md:text-[2.9rem] leading-8 mb-1 font-[600]">
          My <span className="text-mainColor">Projects</span>
        </h2>
      </div>

      <div
        className="flex flex-col justify-center items-start sm:p-2"
        data-aos="zoom-in-up"
      >
        {items.map((item, index) => {
          return (
            <div
            
              key={index}
              className="w-full h-auto flex items-start md:items-start justify-start md:justify-between mt-[3rem]"
            >
              <div className="text-center w-full md:w-[50%]  h-auto">
                <h2 className="mb-[2rem] text-[2rem] md:text-[2.9rem]">
                  {item.title}
                </h2>

                <p className="text-[1rem] text-otherColor">
                  {item.description}
                </p>

                <div className="flex items-center justify-center gap-[1.5rem] mt-[1.5rem]">
                  <a
                    className="inline-block bg-[transparent] text-mainColor border-2 border-mainColor rounded-[8px] text-[15px] font-[600] transition-all duration-500 ease-out p-[8px] hover:bg-mainColor hover:text-bgColor hover:scale-[1.1] hover:shadow-[0_0_20px_#13bbff]"
                    href="https://github.com/Victoryk-tech/Advise"
                  >
                    {item.btn1}
                  </a>
                  <a
                    className="inline-block bg-[transparent] text-mainColor border-2 border-mainColor rounded-[8px] text-[15px] font-[600] transition-all duration-500 ease-out p-[8px] hover:bg-mainColor hover:text-bgColor hover:scale-[1.1] hover:shadow-[0_0_20px_#13bbff]"
                    href="https://victory-is-advicing-you.onrender.com"
                  >
                    {item.btn2}
                  </a>
                </div>
              </div>

              <div className="hidden md:block w-[40%] h-[40%] ml-[10rem] mt-[3rem]">
                <img
                  src={item.image}
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
