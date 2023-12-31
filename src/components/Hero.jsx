"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-gray-100 text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="text-transparent font-poppins bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I am
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Isaac",
                1000,
                "Web Developer",
                1000,
                "Content Writer",
                1000,
                "Graphics Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-400  mb-6 text-base sm:text-lg lg:text-xl font-poppins">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sint
            maiores quo optio, expedita adipisci animi ducimus at nihil
            officiis!
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white uppercase font-poppins font-semibold">
              Hire Me
            </button>
            <button className="px-1 py-1  w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-800 text-white  mt-3">
              <span className="uppercase font-semibold block bg-[#121212] hover:bg-slate-800 rounded-full py-2 font-poppins px-5">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/avat.png"
              alt="myprofile"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
