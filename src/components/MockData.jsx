import React from 'react'
import { data } from '../data/data.js';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const MockData = () => {
    const projekte = data;
   
    return (
      <section className="w-full bg-gray-950  py-8 " id="projekte">
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          className="text-white text-6xl flex justify-center  items-center  "
        >
          <h2 className=" border-black border h2 leading-tight text-5xl text-accent   text-center rounded-xl px-2 ">
            Meine Projekte
          </h2>
        </motion.div>

        <div
          className="container mx-auto grid lg:grid-cols-3 gap-x-6 gap-y-6 p-5  "
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
        >
          {projekte.map((item, index) => (
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0 }}
              className=""
              key={index}
            >
              {/* image */}

              <div className='h-full w-full'>
              <div className="group relative  overflow-hidden border-2 border-white/50 rounded-xl">
                {/* overlay */}
                <div className=" group-hover:bg-black/70 w-full h-full absolute  z-40 transition-all duration-300"></div>
                {/* img */}
                <img
                  key={index.id}
                  className=" group-hover:scale-125  transition-all duration-500"
                  src={item.image}
                  alt=""
                />
              
                {/* pretitle */}
                <div className="absolute  -bottom-full md:left-12 md:group-hover:bottom-24 transition-all duration-500 z-50 left-1 group-hover:bottom-12 ">
                  <span className="text-white text-1xl ">{item.syntax}</span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full md:left-12 md:group-hover:bottom-12 transition-all duration-700 z-50 left-1 group-hover:bottom-4 ">
                  <span className="text-3xl text-white">{item.name}</span>
                </div>
                 
                 
                  <div className="absolute -top-full  md:left-12 md:group-hover:top-8 transition-all duration-700 z-50 left-4 group-hover:top-4">
                    <button className="bg-gray-900 rounded border-4 border-gray-400 btn-sm md:btn-lg text-white ">
                      <a href={item.github}>Code</a>
                    </button>
                 
                  </div>
                  <div className=" absolute -top-full md:right-12 md:group-hover:top-8 transition-all duration-700 z-50 right-4 group-hover:top-4  ">
                    <button className="bg-gray-900 border-4 border-gray-400   rounded  btn-sm lg:btn-lg">
                      <a href={item.live}>Live Demo</a>
                    </button>
                  </div>
                  </div>
                
               
               
              </div>
         
            </motion.div>
          ))}
        </div>
      </section>
    );
}

export default MockData