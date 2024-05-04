import React, { useRef } from "react";
import emailjs from '@emailjs/browser';


export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g7rll1a', 'template_o1p5u1o', form.current, {
        publicKey: '-WPNNDlgaDPUqR8em',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    
      <section className="pb-[3rem]" id="contact">
        <div className=" text-center pt-14 md:pt-[1rem] mb-[3rem]"      data-aos="fade-down">
          <h2 className="text-[2rem] md:text-[2.9rem] font-[600]">
            Contact <span className="text-mainColor">Me</span>
          </h2>
        </div>

        <div
          className="flex items-center justify-center mt-[3.2rem]"
          data-aos="zoom-in"
        >
          <form action="" ref={form} onSubmit={sendEmail} className="relative w-[350px] p-2 md:w-[600px]">
            <input
              className="w-[100%] p-5 border-none outline-none shadow-[0_0_5px_#13bbff] bg-[#2d343f] text-textColor mb-5 rounded-[8px]"
              type="text"
              name="from_name"
              placeholder="Your name"
              required
            />
            <input
              className="w-[100%] p-5 border-none outline-none shadow-[0_0_5px_#13bbff] bg-[#2d343f] text-textColor mb-5 rounded-[8px]"
              type="email"
              name="from_email"
              placeholder="Email Address"
              required
            />
            <textarea
              className="w-[100%] p-5 border-none outline-none shadow-[0_0_5px_#13bbff] bg-[#2d343f] text-textColor mb-5 rounded-[8px]"
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Write message here..... "
              required
            ></textarea>
            <input
              type="submit"
              name=""
              value="Send "
              className="inline-block py-[11px] px-[26px] placeholder:text-[15px] bg-mainColor border-2 border-mainColor rounded-[8px] placeholder:text-otherColor font-[600] transition-all duration-500 ease-out w-[30%] hover:bg-[transparent] hover:text-mainColor cursor-pointer hover:shadow-[0_0_20px_#13bbff]"
            />
          </form>
        </div>
      </section>
    
  );
};
