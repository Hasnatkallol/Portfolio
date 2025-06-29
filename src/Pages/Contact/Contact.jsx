import React from "react";
import Email from "./Email";
import { BsTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="mb-10  pt-10">
      <div className="max-w-6xl  mx-auto text-center ">
        <h2 className="text-[28px] sm:text-[28px] lg:text-[28px] font-normal text-[#263040] relative inline-block group">
          Let’s Build Something Great
          <span className="absolute left-0 -bottom-1 h-[2px] bg-[#263040] w-0 transition-all duration-500 group-hover:w-full"></span>
        </h2>
      </div>
      <div className="flex justify-center w-9/12 mx-auto rounded-2xl gap-20">
        <div className=" rounded-2xl  w-2/2">
            <Email></Email>
            <div className="flex gap-5 justify-center pb-10">
               <div>
                  <BsTelephoneFill  className="text-[white] bg-[#1B2432] border-1 rounded-full p-2 w-12 h-12"/>
               </div>
               <div className="">
                <p>Phone Number</p>
                <p>+880-1705-132021</p>
               </div>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
