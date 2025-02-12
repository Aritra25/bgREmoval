import React from "react";
import { testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div className="">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 text-transparent bg-clip-text">
        Customer Testimonials
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8">
        {testimonialsData.map((item, index) => {
          return (
            <div className="bg-white rounded-xl p-6 drop-shadow-md m-auto max-w-lg" key={index}>
              <p className="text-gray-500 text-4xl">"</p>
              <p className="text-gray-500 text-sm">{item.text}</p>

              <div className="flex items-center gap-3 mt-5">
                <img src={item.image} alt="" className="w-9 rounded-full"/>
                <div className="">
                  <p>{item.author}</p>
                  <p>{item.jobTitle}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
