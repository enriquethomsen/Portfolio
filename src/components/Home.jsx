import React from "react";

import Image from "../assets/teddyRound.png";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section
      className="min-h-[100vh] lg:min-h-[100vh] flex items-center bg-site5"
      id="home"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col gap-y-8 lg:flex-row items-center  mx-5 lg:gap-x-12 ">
          {/* text */}
          <div className="flex-1  flex flex-col  ">
            <span className="font-bold text-white text-[24px] pl-1 pb-5 md:text-left text-center ">
              Hey Ich Bin,
            </span>
            <h1 className=" font-bold  text-white flex flex-row md:mb-6 text-[30px] pb-5 lg:text-[70px]">
              Enriqué
              <span className="text-indigo-500  font-extrabold flex flex-row pl-5 ">
                Thomsen
              </span>
            </h1>
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="mb-6 text-[28px] lg:text-[45px]  "
            >
              <span className="font-light text-white flex-row">ein</span>
              <TypeAnimation
                sequence={[
                  "Team-Player",
                  2000,
                  "Web-Developer",
                  2000,
                  "Designer",
                  2000,
                ]}
                speed={25}
                className=" pl-2  text-green-500 "
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
          <div className="md:space-x-5  text-black md:flex-row  flex flex-col items-center 
            ">
          <Link smooth={true} to="kontakt" className=" bg-blue-700 rounded p-5 text-white text-[24px] cursor-pointer mb-3 ">Lust zu reden?</Link>
        {/* <Link to="projekte" smooth={true} className=" text-green-500 text-[30px] items-center  flex flex-col lg:flex-row " href="">Portfolio</Link> */}
          </div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            className="lg:flex-1 max-w-[320px] lg:max-w-[482px] "
          > <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
